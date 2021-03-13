package TutorBookingWebsite.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TutorBookingWebsite.model.Review;
import TutorBookingWebsite.service.ReviewService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "${v1API}")
public class ReviewController {

	@Autowired
	private ReviewService service;
	
	@GetMapping("/getreviewsbytutor/{userId}")
	public List<Review> getReviewsByTutorId(@PathVariable("userId") int userId) {
		return service.getReviewsByTutorId(userId);
	}
}
