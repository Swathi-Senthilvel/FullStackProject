package com.ticketbooking.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ticketbooking.demo.model.Spectator;
import com.ticketbooking.demo.service.SpectatorService;

@RestController
public class SpectatorController
{
	@Autowired
     SpectatorService personserv;
	@GetMapping("/getpersons")
		public List<Spectator>fetchAllSpectators()
		{
			return personserv.fetchAllSpectators();
    	}

    @PostMapping("/spectators")
    public Spectator saveSpectator(@RequestBody Spectator p) {
        // Update the existing spectator object or create a new one based on your business logic
        Spectator savedSpectator = personserv.saveSpectator(p);
        return savedSpectator;
    }
//	@PostMapping("/savespec")
//	public Spectator saveSpectator(Spectator p)
//	{
//		return personserv.saveSpectator(p);
//	}
}
