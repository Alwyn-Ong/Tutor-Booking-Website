package TutorBookingWebsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TutorBookingWebsite.service.UserService;

import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "${v1API}")
public class UserController {
	
	@Autowired
	private UserService service;

	@PostMapping("/verifytoken")
	public Map<String,String> getUserWithId(@RequestHeader("Authorization") String idToken) {
		return service.verifyToken(idToken);
	}
}
