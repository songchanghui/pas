package com.pas.common;

/**
 * @Author Ryan
 * @Date 2019/1/22  10:49
 * @desc
 */
public class JsonResult<T> {

    private static final long serialVersionUID = 1L;

    private static final String SUCCESS = "00000000";
    private static final String FAIL = "00000010";
    private static final String EXCEPTION = "00000020";
    private static final int NO_PERMISSION = 2;

    private String msg = "success";

    private String code = SUCCESS;

    private T data;

    public JsonResult() {
        super();
    }

    public JsonResult(T data) {
        super();
        this.data = data;
    }

    public JsonResult(String code, T data) {
        super();
        this.code = code;
        this.data = data;
    }

    public JsonResult(Throwable e) {
        super();
        this.msg = e.toString();
        this.code = FAIL;
    }

    public JsonResult(String code, Throwable e) {
        super();
        this.msg = e.toString();
        this.code = code;
    }

    public static String getSUCCESS() {
        return SUCCESS;
    }

    public static String getFAIL() {
        return FAIL;
    }

    public static int getNoPermission() {
        return NO_PERMISSION;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public JsonResult<T> success(String message){
        this.msg = message;
        this.code = SUCCESS;
        return this;
    }

    public JsonResult<T> fail(String message){
        this.msg = message;
        this.code = FAIL;
        return this;
    }

    public static String getEXCEPTION() {
        return EXCEPTION;
    }

    /**
     *
     * @param code
     * @param message
     */
    public JsonResult<T> success(String code, String message){
        this.msg = message;
        this.code = code;
        return this;
    }
    /**
     *
     * @param code
     * @param message
     */
    public JsonResult<T> fail(String code, String message){
        this.msg = message;
        this.code = code;
        return this;
    }

    /**
     *
     * @param message
     */
    public JsonResult<T> catchException(String message){
        this.msg = message;
        this.code = FAIL;
        return this;
    }

    /**
     *
     * @param code
     * @param e
     */
    public JsonResult<T> catchException(String code, Throwable e){
        catchException(code, e.getMessage());
        return this;
    }

    /**
     *  @param code
     * @param message
     */
    public JsonResult<T> catchException(String code, String message){
        this.msg = message;
        this.code = code;
        return this;
    }
}
