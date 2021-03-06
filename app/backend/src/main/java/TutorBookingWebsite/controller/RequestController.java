package TutorBookingWebsite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TutorBookingWebsite.model.Request;
import TutorBookingWebsite.service.RequestService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "${v1API}")
public class RequestController {
	
	@Autowired
	private RequestService service;
	
	@PutMapping("/acceptrequest/{requestId}")
	public ResponseEntity acceptRequest(@PathVariable int requestId) {
		return service.acceptRequest(requestId);
	}
	
	@GetMapping("/getallrequestforstudent/{studentId}")
	public List<Request> getAllRequestForStudent(@PathVariable int studentId){
		return service.getAllRequestForStudent(studentId);
	}
	
	@GetMapping("/getallrequestforstudent/{studentId}/{tutorId}")
	public List<Request> getAllRequestForStudent(@PathVariable int studentId, @PathVariable int tutorId){
		return service.getAllRequestForStudent(studentId, tutorId);
	}
	
	@GetMapping("/getallrequestfortutor/{userId}")
	public List<Request> getAllRequestForTutor(@PathVariable int userId){
		return service.getAllRequestForTutor(userId);
	}
	
	@PutMapping("/saverequest")
	public ResponseEntity saveRequest(@RequestBody Request request) {
		return service.saveRequest(request);
	}
	
	@DeleteMapping("/deleterequest/{requestId}")
	public ResponseEntity deleteUser(@PathVariable int requestId) {
		return service.deleteRequest(requestId);
	}
}
