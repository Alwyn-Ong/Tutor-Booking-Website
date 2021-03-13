package TutorBookingWebsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TutorBookingWebsite.model.User;
import TutorBookingWebsite.service.UserService;

import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "${v1API}")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PutMapping("/becometutor")
	public ResponseEntity becomeTutor(@RequestBody User user) {
		return service.becomeTutor(user);
	}
	
	@PutMapping("/updateprofile")
	public ResponseEntity updateUser(@RequestBody User user) {
		return service.updateUser(user);
	}

	@PostMapping("/verifytoken")
	public Map<String,String> getUserWithId(@RequestHeader("Authorization") String idToken) {
		return service.verifyToken(idToken);
	}
}