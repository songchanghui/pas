package com.pas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * @author songchanghui
 */
@EnableEurekaClient
@SpringBootApplication
@EnableDiscoveryClient
public class PasTransactionAnlsApplication {

	public static void main(String[] args) {
		SpringApplication.run(PasTransactionAnlsApplication.class, args);
	}


}
