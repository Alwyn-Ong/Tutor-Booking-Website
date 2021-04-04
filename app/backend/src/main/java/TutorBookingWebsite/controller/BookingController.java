package TutorBookingWebsite.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TutorBookingWebsite.model.Review;
import TutorBookingWebsite.model.User;
import TutorBookingWebsite.service.BookingService;
import TutorBookingWebsite.service.ReviewService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "${v1API}")
public class BookingController {

	@Autowired
	private BookingService service;
	
	@GetMapping("/getalltutees/{userId}")
	public List<Optional<User>> getAllTuteesByID(@PathVariable("userId") int userId) {
		return service.getAllTutees(userId);
	}
	
	@PostMapping("/addbooking/{tutorId}/{studentId}")
	public String getAllTuteesByID(@PathVariable int tutorId, @PathVariable int studentId) {
		service.addTutee(tutorId, studentId);
		return "Success";
	}
}
