package com.ticketbooking.demo.repository;


import org.springframework.data.jpa.repository.Query; 
import org.springframework.data.repository.CrudRepository; 
import org.springframework.stereotype.Repository; 
 
import com.ticketbooking.demo.model.SignUp;
//import com.ticketbooking.demo.service.forgetData; 
@Repository 
public interface SignUpRepo extends CrudRepository<SignUp,Integer>
{ 
        @Query("select cre.password from SignUp cre where cre.username=?1") 
        Iterable<SignUp> findAllUsernamePassword( String username);

		//forgetData findByusername(String username); 
        //SignUp findByusername(String username);
}