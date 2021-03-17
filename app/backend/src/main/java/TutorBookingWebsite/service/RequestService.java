package TutorBookingWebsite.service;

import java.util.Date;
import java.util.Optional;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import TutorBookingWebsite.dao.RequestDao;
import TutorBookingWebsite.dao.TimeslotDao;
import TutorBookingWebsite.dao.UserDao;
import TutorBookingWebsite.dao.UserTimeslotDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.Request;
import TutorBookingWebsite.model.ResponseDetails;
import TutorBookingWebsite.model.UserTimeslot;

@Service
public class RequestService {
	
	@Autowired
	private RequestDao requestDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private TimeslotDao timeslotDao;
	
	@Autowired
	private UserTimeslotDao userTimeslotDao;
	
	public ResponseEntity acceptRequest(int requestId) {
		Optional<Request> request = requestDao.findById(requestId);
		String requestTimeslot = request.get().getRequestedTimeslot();
		int studentId = request.get().getStudentId();
		int tutorId = request.get().getTutorId();
		
		int timeslotId = timeslotDao.findByTimeslot(requestTimeslot).get().getTimeslotId();
		
		UserTimeslot acceptedTimeslot = new UserTimeslot(studentId, timeslotId, tutorId, TutorBookingWebsite.model.Status.CLOSED);
		userTimeslotDao.save(acceptedTimeslot);
		requestDao.deleteById(requestId);
		
		ResponseDetails responseDetails = new ResponseDetails(new Date(), "request have been accepted",
				"query success");
		return new ResponseEntity(responseDetails, HttpStatus.OK);
	}
	
	public List<Request> getAllRequestForStudent(int studentId){
		List<Request> result = requestDao.findByStudentId(studentId);
		return result;
	}
	
	public List<Request> getAllRequestForStudent(int studentId, int tutorId){
		List<Request> studentRequests = requestDao.findByStudentId(studentId);
		List<Request> result = new ArrayList<>();
		
		if (userDao.findById(tutorId).get().getIsTutor() != 1) throw new APIException("no such tutor");
		
		for (Request placeHolder:studentRequests) {
			if (placeHolder.getTutorId() == tutorId) result.add(placeHolder);
		}
		
		return result;
	}
	
	public List<Request> getAllRequestForTutor(int userId){
		if (userDao.findById(userId).get().getIsTutor() != 1) throw new APIException("no such tutor");
		
		List<Request> result = requestDao.findByTutorId(userId);
		return result;
	}
	
	public ResponseEntity saveRequest(Request request) {
		try {
			Request newRequest = new Request(request.getRemarks(), request.getRequestedTimeslot(), request.getStudentId(), request.getTutorId());
			requestDao.save(newRequest);
			ResponseDetails responseDetails = new ResponseDetails(new Date(), "request has been saved",
					"query success");
			return new ResponseEntity(responseDetails, HttpStatus.OK);	
		} catch (Exception e) {
			throw new APIException("error in saving");
		}
	}
	
	public ResponseEntity deleteRequest(int requestId) {
		try {
			requestDao.deleteById(requestId);
			ResponseDetails responseDetails = new ResponseDetails(new Date(), "request removed from database" + requestId,
					"query success");
			return new ResponseEntity(responseDetails, HttpStatus.OK);
		} catch (Throwable e) {
			throw new APIException("user unable to be deleted");
		}
	}
}
