package TutorBookingWebsite.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TutorBookingWebsite.dao.ReviewDao;
import TutorBookingWebsite.dao.UserDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.Review;
import TutorBookingWebsite.model.User;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewDao reviewDao;
	
	@Autowired
	private UserDao userDao;
	
	public List<Review> getReviewsByTutorId(int tutorId){
		try {
			Optional<User> user = userDao.findById(tutorId);
			if (user.get().getIsTutor() != 1) {
				throw new APIException("no such tutor");
			} else {
				return reviewDao.findByTutorId(tutorId);	
			}
		} catch (Throwable e) {
			throw new APIException("no such tutor");
		}
	}
}
