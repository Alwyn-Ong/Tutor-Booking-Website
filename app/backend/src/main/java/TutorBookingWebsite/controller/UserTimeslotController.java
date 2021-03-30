package TutorBookingWebsite.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TutorBookingWebsite.service.UserTimeslotService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "${v1API}")
public class UserTimeslotController {
	
	@Autowired
	private UserTimeslotService service;
	
	@GetMapping("/getallopentimeslot/{tutorId}")
	public List<String> getAllOpenTimeslot(@PathVariable("tutorId") int tutorId) {
		return service.getAllOpenTimeslot(tutorId);
	}
	
	@GetMapping("/getallclosedtimeslot/{tutorId}")
	public List<String> getAllClosedTimeslot(@PathVariable("tutorId") int tutorId) {
		return service.getAllClosedTimeslot(tutorId);
	}
}
