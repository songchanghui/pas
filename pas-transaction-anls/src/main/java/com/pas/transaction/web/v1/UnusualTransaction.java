package com.pas.transaction.web.v1;

import com.pas.common.JsonResult;
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
    /**
     * @return
     */
    @RequestMapping(value = "/information",method = RequestMethod.GET)
    public JsonResult index() {
        JsonResult jsonResult = new JsonResult();
        jsonResult.setData("test");
        jsonResult.success("cccc");
        jsonResult.fail("cccc");
        return jsonResult;
    }
}
