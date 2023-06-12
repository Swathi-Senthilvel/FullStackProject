package com.ticketbooking.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ticketbooking.demo.model.Booking;
import com.ticketbooking.demo.repository.BookingRepository;
import com.ticketbooking.demo.service.BookingService;

import io.swagger.v3.oas.annotations.tags.Tag;

@CrossOrigin("*")
@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private BookingService bookingService;
    @Tag(name="getAllFetchDetails",description="getAll")
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }
//    @GetMapping("/{ticket_id}")
//    public ResponseEntity<Optional<Booking>> getBookingById(@PathVariable int ticket_id) {
//        Optional<Booking> booking = bookingRepository.findById(ticket_id);
//        return ResponseEntity.ok(booking);
//    }
    @PutMapping("/{ticket_id}")
    public Booking updateBookingDetails(@RequestBody Booking booking) {
        System.out.println("Changes have been successfully updated");
        return bookingRepository.save(booking);
    }
    @DeleteMapping("{sno}")
	public String deleteDetails(@PathVariable int sno)
	{
		bookingRepository.deleteById(sno);
		return "Sno : "+sno+" is deleted";
	}
    @DeleteMapping
    public String deleteAllBookings() {
        bookingRepository.deleteAll();
        return "All bookings have been deleted";
    }
//sorting
@GetMapping("/sortbooking/{name}")
public List<Booking> sortBookings(@PathVariable String name)
{
	return bookingService.sortBookings(name);
}

//paging
@GetMapping("/pagingbooking/{offset}/{pageSize}")
public Page<Booking> pagingBooking(@PathVariable int offset,@PathVariable int pageSize)
{
	return bookingService.pagingBooking(offset,pageSize);
}

//pagingandsorting
@GetMapping("/pagingAndSortingbooking/{offset}/{pageSize}/{field}")

public Page<Booking> pagingAndSorting(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field) 
{
	return bookingService.pagingAndSorting(offset, pageSize, field);
}
//http://localhost:9080/fetchStudentsByNamePrefix?prefix=a
@GetMapping("getTeamPre/{prefix}")
public List<Booking> fetchByPrefix(@PathVariable("prefix") String prefix)
{
	return bookingService.fetchTeamByPrefix(prefix);
}
@GetMapping("/getSuffix/{suffix}")
public List<Booking> fetchBySuffix(@PathVariable("suffix") String suffix)
{
	return bookingService.fetchTeamBySuffix(suffix);
}
//query
@GetMapping("/fetchByBooking/{team}/{name}")
public List<Booking> getBookingsByTeam(@PathVariable String team,@PathVariable String name)
{
	return bookingService.getBookingsByTeam(team,name);
}
@DeleteMapping("/deleteBookingByName/{name}")
public String deletePlayerByName(@PathVariable String name)
{
	int result=bookingService.deleteBookingByName(name);
	if(result>0)
		return "Booking record deleted";
	else
		return "Problem occured while deleting";
	
}
@PutMapping("/updateByName/{team}/{name}")
public String updateBookingByName(@PathVariable String team,@PathVariable String name)
{
	int result=bookingService.updateBookingByName(team,name);
	if(result>0)
		return "Booking record updated";
	else
		return "Problem occured while updating";
}
@GetMapping("/nquery/{team}") 
List<Booking>fetchPlayerByTeam(@PathVariable("team") String team)
{
	return bookingService.fetchBookingsByTeam(team);
}
}