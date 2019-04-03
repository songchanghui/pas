package com.pas.common;

import com.pas.PasTransactionAnlsApplication;
import com.pas.vo.PyCxAreaCoord;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * Created by songchanghui on 2019/4/3.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class PyCxAreaCoordMapTest {
    @Autowired
    @Qualifier(value = "pycxareacoordmap")
    private PyCxAreaCoordMap pyCxAreaCoordMap;
    @Test
    public void testGetByAreaNoId() throws Exception {
        pyCxAreaCoordMap.getByAreaNoId("440304");
        PyCxAreaCoord pyCxAreaCoord = pyCxAreaCoordMap.getByAreaDscr("广州市");
        assertEquals("440100",pyCxAreaCoordMap.getByAreaDscr("广州市").getAreaNoId());
    }


}