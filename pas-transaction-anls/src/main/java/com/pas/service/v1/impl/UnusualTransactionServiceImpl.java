package com.pas.service.v1.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pas.common.Dic;
import com.pas.common.Format;
import com.pas.exception.PasException;
import com.pas.service.v1.KylinService;
import com.pas.service.v1.UnusualTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author songchanghui
 * @date 2019/4/2
 */
@Service("unusualtransactionservice")
public class UnusualTransactionServiceImpl implements UnusualTransactionService {
    @Autowired
    @Qualifier(value = "kylinservice")
    private KylinService kylinService;

    @Value("${unusual.overview.total.sql}")
    private String  unusualOverviewTotalSql;
    @Value("${unusual.overview.total.city.sql}")
    private String  unusualOverviewCityTotalSql;

    @Value("${unusual.type.sql}")
    private String  unusualTypeSql;
    @Value("${unusual.type.city.sql}")
    private String  unusualTypeCitySql;

    @Value("${unusual.tradetype.sql}")
    private String  unusualTradeTypeSql;
    @Value("${unusual.tradetype.city.sql}")
    private String  unusualTradeTypeCitySql;
    @Value("${unusual.region.sql}")
    private String  unusualRegionSql;
    @Value("${unusual.region.area.sql}")
    private String  unusualRegionAreaSql;

    @Value("${overview.total.sql}")
    private String  overviewTotalSql;
    @Value("${overview.total.city.sql}")
    private String  overviewCityTotalSql;

    @Value("${region.sql}")
    private String  regionSql;
    @Value("${region.area.sql}")
    private String  regionAreaSql;


    /**
     * 获取统计数据
     *
     * @param region
     * @return region 地区（省、市）
     * 范例：广东省/广州市
     */
    @Override
    public JSONObject getAggregateData(String region) throws Exception{
        JSONObject rtn = new JSONObject();
        String unusualOverviewTotalSqlCrr = null;
        String overviewTotalSqlCrr = null;
        String unusualTypeSqlCrr = null;
        String unusualTradeTypeSqlCrr = null;
        if(region.startsWith(Dic.REGION_GUANGDONG)){
            unusualOverviewTotalSqlCrr = unusualOverviewTotalSql;
            unusualTypeSqlCrr = unusualTypeSql;
            unusualTradeTypeSqlCrr = unusualTradeTypeSql;
            overviewTotalSqlCrr = overviewTotalSql;
        }else{
            unusualOverviewTotalSqlCrr = String.format(unusualOverviewCityTotalSql,region);
            unusualTypeSqlCrr = String.format(unusualTypeSql,region);
            unusualTradeTypeSqlCrr = String.format(unusualTradeTypeSql,region);
            overviewTotalSqlCrr = String.format(overviewCityTotalSql,region);
        }
        JSONArray resultUnusualOverview =  kylinService.post2Kylin(unusualOverviewTotalSqlCrr);
        JSONArray resultOverview =  kylinService.post2Kylin(overviewTotalSqlCrr);
        JSONArray resultUnusualTypeSqlCrr =  kylinService.post2Kylin(unusualTypeSqlCrr);
        JSONArray resultUnusualTradeTypeSqlCrr =  kylinService.post2Kylin(unusualTradeTypeSqlCrr);
        rtn.put("overview",parseOvervew(resultUnusualOverview,resultOverview));
        rtn.put("type",parseType(resultUnusualTypeSqlCrr));
        rtn.put("tradeType",parseTradeType(resultUnusualTradeTypeSqlCrr));
        return rtn;
    }
    private JSONArray parseRegion(JSONArray resultUnusualRegionSqlCrr) {
        JSONArray rtn = new JSONArray();
        resultUnusualRegionSqlCrr.forEach(json ->{
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("name",((JSONObject)json).get("NAME"));
            jsonObject.put("totalAmount",((JSONObject)json).get("TOTALAMOUNT"));
            jsonObject.put("totalNum",((JSONObject)json).get("TOTALNUM"));
            jsonObject.put("totalShopNum",((JSONObject)json).get("TOTALSHOPNUM"));
            rtn.add(jsonObject);
        });
        return rtn;
    }

    private JSONArray parseType(JSONArray resultUnusualTypeSqlCrr) {
        JSONArray rtn = JSONArray.parseArray(resultUnusualTypeSqlCrr.toJSONString().toLowerCase());
        return  rtn;
    }
    private JSONArray parseTradeType(JSONArray resultUnusualTradeTypeSqlCrr) {
        JSONArray rtn = JSONArray.parseArray(resultUnusualTradeTypeSqlCrr.toJSONString().toLowerCase());
        return  rtn;
    }

    public JSONObject parseOvervew(JSONArray resultUnusualOverview, JSONArray resultOverview){
        JSONObject overview = null;
        if (resultUnusualOverview.size()>1||resultOverview.size()>1){
            throw new PasException("KylinResult 数据不正确");
        }else if(resultUnusualOverview.size()==1){
            Map<String,Double> map = new HashMap<>(3);
            resultOverview.forEach(result->{
                JSONObject json = resultOverview.getJSONObject(0);
                map.put("TOTALAMOUNT",json.getDouble("TOTALAMOUNT"));
                map.put("TOTALNUM",json.getDouble("TOTALNUM"));
                map.put("TOTALSHOPNUM",json.getDouble("TOTALSHOPNUM"));
            });
            overview = new JSONObject();
            JSONObject result = resultUnusualOverview.getJSONObject(0);
            JSONObject totalAmount = new JSONObject();
            JSONObject totalNum = new JSONObject();
            JSONObject totalShopNum = new JSONObject();
            totalAmount.put("value",result.getDouble("TOTALAMOUNT"));
            totalAmount.put("rate", Format.d2f(result.getDouble("TOTALAMOUNT")/map.get("TOTALAMOUNT")));
            totalNum.put("value",result.getDouble("TOTALNUM"));
            totalNum.put("rate", Format.d2f(result.getDouble("TOTALNUM")/map.get("TOTALNUM")));
            totalShopNum.put("value",result.getDouble("TOTALSHOPNUM"));
            totalShopNum.put("rate", Format.d2f(result.getDouble("TOTALSHOPNUM")/map.get("TOTALSHOPNUM")));
            overview.put("totalAmount",totalAmount);
            overview.put("totalNum",totalNum);
            overview.put("totalShopNum",totalShopNum);
        }
        return overview;
    }

    /**
     * 获取地域信息
     *
     * @param region
     * @return region 地区（省、市）
     * 范例：广东省/广州市
     */
    @Override
    public JSONObject getRegionData(String region) {
        JSONObject rtn = new JSONObject();
        String unusualRegionSqlCrr = null;
        String regionSqlCrr = null;
        if(region.startsWith(Dic.REGION_GUANGDONG)){
            unusualRegionSqlCrr = unusualRegionSql;
            regionSqlCrr = regionSql;
        }else{
            unusualRegionSqlCrr = String.format(unusualRegionSql,region);
            regionSqlCrr = String.format(regionSql,region);
        }
        JSONArray resultUnusualRegionSqlCrr =  kylinService.post2Kylin(unusualRegionSqlCrr);
        rtn.put("region",parseRegion(resultUnusualRegionSqlCrr));
        return rtn;
    }
}
