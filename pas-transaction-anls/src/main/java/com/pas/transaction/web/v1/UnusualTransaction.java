package com.pas.transaction.web.v1;

import com.alibaba.fastjson.JSONArray;
import com.pas.common.JsonResult;
import com.pas.service.v1.KylinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author songchanghui
 * @date 2019/3/19
 */
@RestController
@RequestMapping("/unusual_transaction")
public class UnusualTransaction {

    @Autowired
    @Qualifier(value = "kylinservice")
    private KylinService kylinService;

    @Value("${unusualt.total.amount.sql}")
    private String  unusualTotalAmount;
    /**
     * @return
     */
    @RequestMapping(value = "/information",method = RequestMethod.GET)
    public JsonResult getInformation() {
        JsonResult jsonResult = new JsonResult();
        try {
            JSONArray data = kylinService.post2Kylin(unusualTotalAmount);
            jsonResult.setData(data);
            jsonResult.success("请求成功！");
        } catch (Exception e) {
            jsonResult.fail("kylin请求异常");
            e.printStackTrace();
        }
        return jsonResult;
    }
}
