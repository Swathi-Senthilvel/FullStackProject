package com.ticketbooking.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info=@Info(
		title="TICKETIST",
		version="1.1.2",
		description="TICKET DATABASE",
		contact=@Contact(name="Swathi T S",email="727821tuec239@skct.edu.in")))
public class TicketbookingdetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TicketbookingdetailsApplication.class, args);
	}
}
