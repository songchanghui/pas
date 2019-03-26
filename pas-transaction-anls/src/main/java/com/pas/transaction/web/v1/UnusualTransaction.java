package com.pas.transaction.web.v1;

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
@RequestMapping("/")
public class UnusualTransaction {
    /**
     * @return
     */
    @RequestMapping(value = "/index",method = RequestMethod.GET)
    public ModelAndView index() {
        return new ModelAndView("index");
    }
}
