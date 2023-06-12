package com.ticketbooking.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ticketbooking.demo.model.SpectatorAddress;
@Repository
public interface SpectatorAddressRepository extends JpaRepository<SpectatorAddress,Integer>
{

}
