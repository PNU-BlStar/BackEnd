package com.bstarbackend.bstar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BstarApplication {

	public static void main(String[] args) {
		SpringApplication.run(BstarApplication.class, args);
	}

}
