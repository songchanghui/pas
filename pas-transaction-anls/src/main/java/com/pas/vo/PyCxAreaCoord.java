package com.pas.vo;

/**
 * 区域码表
 * @author songchanghui
 * @date 2019/4/3
 */
public class PyCxAreaCoord {
    /**
     * 地区id
     */
    private String areaNoId;
    /**
     * 地区说明
     */
    private String areaDscr;
    /**
     * 上级区域id
     */
    private String parId;
    /**
     * 上级区域名称
     */
    private String parName;
    /**
     * 经度
     */
    private String longitud;
    /**
     * 纬度
     */
    private String latitude;
    /**
     *区域坐标
     */
    private Object[] coordinates;
    public PyCxAreaCoord(String[] parms) {
        this.areaNoId = parms[0];
        this.areaDscr = parms[1];
        this.parId = parms[2];
        this.parName = parms[3];
        this.longitud = parms[4];
        this.latitude = parms[5];
    }

    public String getAreaNoId() {
        return areaNoId;
    }

    public void setAreaNoId(String areaNoId) {
        this.areaNoId = areaNoId;
    }

    public String getAreaDscr() {
        return areaDscr;
    }

    public void setAreaDscr(String areaDscr) {
        this.areaDscr = areaDscr;
    }

    public String getParId() {
        return parId;
    }

    public void setParId(String parId) {
        this.parId = parId;
    }

    public String getParName() {
        return parName;
    }

    public void setParName(String parName) {
        this.parName = parName;
    }

    public String getLongitud() {
        return longitud;
    }

    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public Object[] getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(Object[] coordinates) {
        this.coordinates = coordinates;
    }
}
