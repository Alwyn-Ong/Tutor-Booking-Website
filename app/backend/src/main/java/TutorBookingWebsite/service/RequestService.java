package TutorBookingWebsite.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import TutorBookingWebsite.dao.RequestDao;
import TutorBookingWebsite.model.Request;
import TutorBookingWebsite.model.ResponseDetails;

@Service
public class RequestService {
	
	@Autowired
	private RequestDao requestDao;
	
	public ResponseEntity saveRequest(Request request) {
		Request newRequest = new Request(request.getRemarks(), request.getRequestedTimeslot(), request.getStudentId(), request.getTutorId());
		requestDao.save(newRequest);
		ResponseDetails responseDetails = new ResponseDetails(new Date(), "request has been saved",
				"query success");
		return new ResponseEntity(responseDetails, HttpStatus.OK);
	}
}
