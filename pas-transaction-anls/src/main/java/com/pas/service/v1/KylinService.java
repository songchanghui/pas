package com.pas.service.v1;

import com.alibaba.fastjson.JSONArray;

/**
 *
 * @author songchanghui
 * @date 2019/3/31
 */
public interface KylinService {
    /**
     * 向kylin发送restfaul 请求
     * @param sql
     * @return JSONArray
     */
    JSONArray post2Kylin(String sql);

}
