package com.pas.common;

import java.text.DecimalFormat;

import static java.lang.Double.parseDouble;

/**
 *
 * @author songchanghui
 * @date 2019/4/2
 */
public class Format {
    public static Double d2f(Double d) {
        return  d2f(d,null);
    }
    public static Double d2f(Double d,String f) {
        if (f==null||f.equals("")){
            f = "#.00";
        }
        DecimalFormat df = new DecimalFormat(f);
       return  parseDouble(df.format(d));
    }
}
