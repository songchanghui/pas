package com.pas.common;

import com.pas.vo.PyCxAreaCoord;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 *
 * @author songchanghui
 * @date 2019/4/3
 */
@Service("pycxareacoordmap")
public class PyCxAreaCoordMap implements InitializingBean {
    /**
     * 地区码表  key:areaNoId
     */
    private Map<String,PyCxAreaCoord> areaNoIdMap;
    /**
     * 地区码表  key:areaDscr
     */
    private Map<String,PyCxAreaCoord> areaDscrMap;
    /**
     * 地区码表  key:parId
     */
    private Map<String,Map<String,PyCxAreaCoord>> parIdMap;
    /**
     * 地区码表  key:parName
     */
    private Map<String,Map<String,PyCxAreaCoord>> parNameMap;

    @Override
    public void afterPropertiesSet() throws Exception {
        Path path = Paths.get(ClassLoader.getSystemResource("py_cx_area_coord.data").toURI());
        //读取文件
        BufferedReader bfr = Files.newBufferedReader(path);
        Stream<String> lines = bfr.lines();
        //构建区域信息list
        List<PyCxAreaCoord> pyCxAreaCoords =lines
                .map(line -> line.split("\\|"))
                .map(pycxareacoord -> new PyCxAreaCoord(pycxareacoord))
                .collect(Collectors.toList());
        //构建  地区码表  key:areaNoId
        setAreaNoIdMap(pyCxAreaCoords.stream().collect(Collectors.toMap(pyCxAreaCoord->pyCxAreaCoord.getAreaNoId(),pyCxAreaCoord->pyCxAreaCoord, (key1, key2) -> key2)));
        //构建  地区码表  key:areaDscr
        setAreaDscrMap(pyCxAreaCoords.stream().collect(Collectors.toMap(pyCxAreaCoord->pyCxAreaCoord.getAreaDscr(),pyCxAreaCoord->pyCxAreaCoord, (key1, key2) -> key2)));
        //构建  地区码表  key:parId
        Map<String,List<PyCxAreaCoord>> parIdlistMap =pyCxAreaCoords.stream().collect(Collectors.groupingBy(PyCxAreaCoord::getParId));
        parIdMap = new HashMap<>(parIdlistMap.size());
        parIdlistMap.forEach((k,v)->{
            Map m = v.stream().collect(Collectors.toMap(pyCxAreaCoord->pyCxAreaCoord.getAreaNoId(),pyCxAreaCoord->pyCxAreaCoord, (key1, key2) -> key2));
            parIdMap.put(k,m);
        });
        //构建  地区码表  key:parName
        Map<String,List<PyCxAreaCoord>> parNamelistMap =pyCxAreaCoords.stream().collect(Collectors.groupingBy(PyCxAreaCoord::getParName));
        parNameMap = new HashMap<>(parNamelistMap.size());
        parNamelistMap.forEach((k,v)->{
            Map m = v.stream().collect(Collectors.toMap(pyCxAreaCoord->pyCxAreaCoord.getAreaDscr(),pyCxAreaCoord->pyCxAreaCoord, (key1, key2) -> key2));
            parNameMap.put(k,m);
        });
    }

    /**
     * 通过地区代码获取地区对象
     * @param areaNoId
     * @return
     */
    public PyCxAreaCoord getByAreaNoId(String areaNoId){
        return getAreaNoIdMap().get(areaNoId);
    }

    /**
     * 通过地区名称获取地区对象
     * @param areaDscr
     * @return
     */
    public PyCxAreaCoord getByAreaDscr(String areaDscr){
        return getAreaDscrMap().get(areaDscr);
    }

    /**
     * 通过父级地区代码获取地区对象
     * @param parId
     * @return
     */
    public Map<String,PyCxAreaCoord> getByParId(String parId){
        return getParIdMap().get(parId);
    }
    /**
     * 通过父级地区获取地区对象
     * @param parName
     * @return
     */
    public Map<String,PyCxAreaCoord> getByParName(String parName){
        return getParNameMap().get(parName);
    }


    public Map<String, PyCxAreaCoord> getAreaNoIdMap() {
        return areaNoIdMap;
    }

    public void setAreaNoIdMap(Map<String, PyCxAreaCoord> areaNoIdMap) {
        this.areaNoIdMap = areaNoIdMap;
    }

    public Map<String, PyCxAreaCoord> getAreaDscrMap() {
        return areaDscrMap;
    }

    public void setAreaDscrMap(Map<String, PyCxAreaCoord> areaDscrMap) {
        this.areaDscrMap = areaDscrMap;
    }

    public Map<String, Map<String, PyCxAreaCoord>> getParIdMap() {
        return parIdMap;
    }

    public void setParIdMap(Map<String, Map<String, PyCxAreaCoord>> parIdMap) {
        this.parIdMap = parIdMap;
    }

    public Map<String, Map<String, PyCxAreaCoord>> getParNameMap() {
        return parNameMap;
    }

    public void setParNameMap(Map<String, Map<String, PyCxAreaCoord>> parNameMap) {
        this.parNameMap = parNameMap;
    }
}
