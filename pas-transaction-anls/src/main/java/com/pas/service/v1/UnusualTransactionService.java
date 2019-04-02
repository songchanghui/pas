package com.pas.service.v1;

import com.alibaba.fastjson.JSONObject;

/**
 *
 * @author songchanghui
 * @date 2019/4/2
 */
public interface UnusualTransactionService {
    /**
     * 获取统计数据
     * @param region
     * @return region 地区（省、市）
     *    范例：广东省/广州市
     * @throws Exception
     */
    JSONObject getAggregateData(String region) throws Exception;
    /**
     * 获取区域数据
     * @param region
     * @return region 地区（省、市）
     *    范例：广东省/广州市
     * @throws Exception
     */
    JSONObject getRegionData(String region);
}
