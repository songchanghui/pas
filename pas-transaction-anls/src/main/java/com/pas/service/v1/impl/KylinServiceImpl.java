package com.pas.service.v1.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pas.common.KylinResult2Json;
import com.pas.service.v1.KylinService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author songchanghui
 * @date 2019/3/31
 */
@Service("kylinservice")
public class KylinServiceImpl implements KylinService{

    @Autowired
    RestTemplate restTemplate;

    @Value("${kylin.post.api}")
    private String  kylinPostApi;
    @Value("${kylin.post.user.name}")
    private String  kylinPostUserName;
    @Value("${kylin.post.user.password}")
    private String  kylinPostUserPassword;
    @Value("${kylin.post.project}")
    private String  kylinPostProject;
    @Value("${kylin.post.limit}")
    private String  kylinPostLimit;
    /**
     * 向kylin发送restfaul 请求
     * @param sql
     * @return JSONArray
     */
    @Override
    public JSONArray post2Kylin(String sql) {
        return post2Kylin(sql,kylinPostProject);
    }
    /**
     * 向kylin发送restfaul 请求
     * @param sql
     * @param project
     * @return JSONArray
     */
    @Override
    public JSONArray post2Kylin(String sql,String project) {

        String code = "Basic "+new String(new Base64().encode((kylinPostUserName+":"+kylinPostUserPassword).getBytes()));
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json;charset=UTF-8");
        headers.add("Authorization",code);
        JSONObject postData = new JSONObject();
        postData.put("sql",sql);
        postData.put("project",project);
        postData.put("limit",kylinPostLimit);
        HttpEntity<String> entity = new HttpEntity<>(postData.toJSONString(), headers);
        JSONObject result = restTemplate.postForEntity(kylinPostApi,entity,JSONObject.class).getBody();

        return KylinResult2Json.parse(result);
    }
}
