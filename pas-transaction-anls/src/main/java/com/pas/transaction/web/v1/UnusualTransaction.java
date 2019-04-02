package com.pas.transaction.web.v1;

import com.pas.common.JsonResult;
import com.pas.service.v1.UnusualTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author songchanghui
 * @date 2019/3/19
 */
@RestController
@RequestMapping("/unusual_transaction")
public class UnusualTransaction {

    @Autowired
    @Qualifier(value = "unusualtransactionservice")
    UnusualTransactionService unusualTransactionService;

    /**
     * @return
     */
    @RequestMapping(value = "/region/{region}",method = RequestMethod.GET)
    public JsonResult getInformation(@PathVariable("region") String region) {
        JsonResult jsonResult = new JsonResult();
        try {
            jsonResult.setData(unusualTransactionService.getRegionData(region));
            jsonResult.success("请求成功！");
        } catch (Exception e) {
            jsonResult.fail("kylin请求异常");
            e.printStackTrace();
        }
        return jsonResult;
    }
    /**
     * @return
     */
    @RequestMapping(value = "/aggregate/{region}",method = RequestMethod.GET)
    public JsonResult getAggregate(@PathVariable("region") String region) {
        JsonResult jsonResult = new JsonResult();
        try {
            jsonResult.setData(unusualTransactionService.getAggregateData(region));
            jsonResult.success("请求成功！");
        } catch (Exception e) {
            jsonResult.fail("kylin请求异常");
            e.printStackTrace();
        }
        return jsonResult;
    }
}
