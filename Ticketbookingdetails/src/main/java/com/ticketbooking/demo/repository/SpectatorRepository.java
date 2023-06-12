package com.ticketbooking.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ticketbooking.demo.model.Spectator;

@Repository
public interface SpectatorRepository extends JpaRepository<Spectator,Integer> {

}
