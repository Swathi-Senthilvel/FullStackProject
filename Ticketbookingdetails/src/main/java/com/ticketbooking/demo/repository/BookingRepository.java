package com.ticketbooking.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ticketbooking.demo.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
    @Query("SELECT b FROM Booking b WHERE b.team = ?1 AND b.name = ?2")
    public List<Booking> getBookingsByTeam(String team, String name);

    @Query("SELECT b FROM Booking b WHERE b.team = :team")
    public List<Booking> getBookingsByTeam(String team);

    List<Booking> findByNameStartingWith(String prefix);

    List<Booking> findByNameEndingWith(String suffix);

    List<Booking> findByTeam(String team);

    @Modifying
    @Query("DELETE FROM Booking b WHERE b.name = ?1")
    public int deleteBookingByName(String name);

    @Modifying
    @Query("UPDATE Booking b SET b.team = ?1 WHERE b.name = ?2")
    public int updateBookingByName(String team, String name);

    @Query(value = "SELECT * FROM bookings WHERE team = ?1", nativeQuery = true)
    public List<Booking> fetchBookingsByTeam(String team);
}