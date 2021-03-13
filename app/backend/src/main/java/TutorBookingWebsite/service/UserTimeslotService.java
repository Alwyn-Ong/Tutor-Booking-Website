package TutorBookingWebsite.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TutorBookingWebsite.dao.TimeslotDao;
import TutorBookingWebsite.dao.UserDao;
import TutorBookingWebsite.dao.UserTimeslotDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.Timeslot;
import TutorBookingWebsite.model.User;
import TutorBookingWebsite.model.UserTimeslot;

@Service
public class UserTimeslotService {
	
	@Autowired
	private UserTimeslotDao userTimeslotDao;
	
	@Autowired
	private TimeslotDao timeslotDao;
	
	@Autowired
	private UserDao userDao;
	
	public List<String> getAllOpenTimeslot(int userId){
		List<String> result = new ArrayList<>();
		
		Optional<User> existingUser = userDao.findById(userId);
		
		if (existingUser.isEmpty() || existingUser.get().getIsTutor() != 1) {
			throw new APIException("no such tutor");
		}
		
		List<UserTimeslot> userTimeslotData = userTimeslotDao.findByTutorId(userId);
		
		for (UserTimeslot placeHolder:userTimeslotData) {
			if (placeHolder.getStatus() == TutorBookingWebsite.model.Status.OPEN) {
				int timeslotId = placeHolder.getTimeslotId();
				Optional<Timeslot> timeslot = timeslotDao.findById(timeslotId);
				result.add(timeslot.get().getTimeslot());
			}
		}
		
		return result;
	}
}
