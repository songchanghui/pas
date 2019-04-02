package com.pas.common;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.junit.Test;

import java.io.BufferedReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import static org.junit.Assert.*;

/**
 * Created by songchanghui on 2019/3/31.
 */
public class KylinResult2JsonTest {

    @Test
    public void testParse() throws Exception {
        Path path  = Paths.get(ClassLoader.getSystemResource("kylin_result.json").toURI());
        //读取文件
        BufferedReader bfr = Files.newBufferedReader(path);
        Stream<String> lines = bfr.lines();
        StringBuffer sbr = new StringBuffer();
        lines.forEach(line -> sbr.append(line));
        JSONObject json = JSONObject.parseObject(sbr.toString());
        JSONArray jsonArray = KylinResult2Json.parse(json);
        assertEquals(10,jsonArray.size());
        assertEquals("C1010344000148",((JSONObject)jsonArray.get(0)).getString("COL_ORG_NUM"));
    }
    @Test
    public void test(){
        String str ="中国R";
        System.out.println(str.toLowerCase());
    }
}