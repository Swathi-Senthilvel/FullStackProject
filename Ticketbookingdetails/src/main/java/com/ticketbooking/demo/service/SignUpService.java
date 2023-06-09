package com.ticketbooking.demo.service;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service; 
import com.ticketbooking.demo.model.SignUp; 
import com.ticketbooking.demo.repository.SignUpRepo; 
@Service 
public class SignUpService { 
        @Autowired  
        SignUpRepo repo; 
//        public Iterable<SignUp> GetUserPassService(String username){ 
//                return repo.findAllUsernamePassword(username); 
//        } 
        public Iterable<SignUp> GetAll(){ 
                return repo.findAll(); 
        } 
//        public String forgetData(String username, String password)  {
//      	  SignUp user = repo.findByusername(username);
//            if (user == null) {
//                return "No User Found\nPlease Try Again!!!!";
//            } else {
//                // Check if the usernames match in a case-sensitive manner
//                if (user.getUsername().equals(username)) {
//              	  
////                    if (user.getPassword().equals(password)) {
////                        return "Login Successful";
////                    } else {
////                        return "Login Failed";
////                    }
//              	  user.setPassword(password);
//                    repo.save(user);
//              	  return "password has changed sucessfully";
//                } else {
//                    return "Login Failed";
//                }
//            }
//      }
}