package TutorBookingWebsite.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TutorBookingWebsite.dao.BookingDao;
import TutorBookingWebsite.dao.ReviewDao;
import TutorBookingWebsite.dao.UserDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.Booking;
import TutorBookingWebsite.model.Review;
import TutorBookingWebsite.model.User;

@Service
public class BookingService {
	
	@Autowired
	private BookingDao bDao;
	
	@Autowired
	private UserDao userDao;
	

	
	public List<Optional<User>> getAllTutees(int tutorId) {
		List<Optional<User>> result = new ArrayList<>();
		List<Booking> currBookings = bDao.findByTutorId(tutorId);
		for(int i = 0; i < currBookings.size(); i++) {
			int studentId = currBookings.get(i).getStudentId();
			Optional<User> currStudent = userDao.findById(studentId);
			result.add(currStudent);
		}
		
		return result;
	}
	
	public void addTutee(int tutorId, int studentId) {
		List<Booking> currBookings = bDao.findByTutorId(tutorId);
//		boolean status = true;
		for(int i = 0; i < currBookings.size(); i++) {
			int currStudentId = currBookings.get(i).getStudentId();
			if(studentId == currStudentId) {
				return;
			}
		}
		// only create new if doesnt exist.
		Booking newBooking = new Booking(tutorId, studentId);
		bDao.save(newBooking);
	}
}
