package com.pas.common;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pas.exception.PasException;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author songchanghui
 * @date 2019/3/31
 */
public class KylinResult2Json {
    public static JSONArray parse(JSONObject jsonObject){
        //json返回结果
        try {
            JSONArray columnMetas = jsonObject.getJSONArray("columnMetas");
            JSONArray results = jsonObject.getJSONArray("results");
            if (columnMetas == null||columnMetas.size() ==0 || results == null||results.size() ==0){
                throw new PasException("KylinResult 数据不正确");
            }else{
                final JSONArray jsonArrayRtn = new JSONArray();
                List<String> columns = new ArrayList<>();
                columnMetas.forEach(column ->{
                    columns.add(((JSONObject)column).getString("label"));
                });
                final JSONArray finalJsonArrayRtn = jsonArrayRtn;
                results.forEach(result ->{
                    JSONObject jsonObjectRtn = new JSONObject();
                    for(int i=0;i<columns.size();i++){
                        jsonObjectRtn.put(columns.get(i),((JSONArray) result).get(0));
                    }
                    jsonArrayRtn.add(jsonObjectRtn);
                });
                return jsonArrayRtn;
            }
        } catch (Exception e) {
            throw new PasException("KylinResult2Json 解析异常");
        }
    }

}
