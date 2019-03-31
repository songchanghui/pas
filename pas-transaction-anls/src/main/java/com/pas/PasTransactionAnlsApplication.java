package com.pas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

/**
 * @author songchanghui
 */
@EnableEurekaClient
@SpringBootApplication
@EnableDiscoveryClient
public class PasTransactionAnlsApplication {
	@Bean
	public RestTemplate restTemplate() {
		//复杂构造函数的使用
		SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();
		requestFactory.setConnectTimeout(3000);

		// 设置超时
		requestFactory.setReadTimeout(3000);
		return new RestTemplate(requestFactory);
	}

	public static void main(String[] args) {
		SpringApplication.run(PasTransactionAnlsApplication.class, args);
	}


}
