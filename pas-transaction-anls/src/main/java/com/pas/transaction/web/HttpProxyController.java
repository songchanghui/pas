package com.pas.transaction.web;

import com.pas.common.JsonResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author Ryan
 * @Date 2019/1/22  14:44
 * @desc 请求代理
 */
@RestController
@RequestMapping("/http/proxy")
public class HttpProxyController {
    /**
     * @return
     */
    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public JsonResult putNewProxy() {
        JsonResult jsonResult = new JsonResult();
        jsonResult.setData("test");
        jsonResult.success("cccc");
        jsonResult.fail("cccc");
        return jsonResult;
    }

}