package TutorBookingWebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

import java.io.IOException;
import java.security.GeneralSecurityException;

import TutorBookingWebsite.dao.LevelsTaughtDao;
import TutorBookingWebsite.dao.ReviewDao;
import TutorBookingWebsite.dao.SubjectDao;
import TutorBookingWebsite.dao.TimeslotDao;
import TutorBookingWebsite.dao.UserDao;
import TutorBookingWebsite.dao.UserTimeslotDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.LevelsTaught;
import TutorBookingWebsite.model.ResponseDetails;
import TutorBookingWebsite.model.Subject;
import TutorBookingWebsite.model.Timeslot;
import TutorBookingWebsite.model.User;
import TutorBookingWebsite.model.UserTimeslot;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

import java.util.*;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ReviewDao reviewDao;
	
	@Autowired
	private SubjectDao subjectDao;
	
	@Autowired
	private LevelsTaughtDao levelsTaughtDao;
	
	@Autowired
	private UserTimeslotDao userTimeslotDao;
	
	@Autowired
	private TimeslotDao timeslotDao;
		
	public Map<String, Object> getTutorById(int userId){
		try {
			Map<String, Object> result = new HashMap<>();
			Optional<User> user = userDao.findById(userId);
			if (user.get().getIsTutor() != 1) {
				throw new APIException("no such tutor");
			} else {
				result.put("userid", "" + user.get().getUserId());
				result.put("decription", user.get().getDescription());
				result.put("email", user.get().getEmail());
				result.put("gender", user.get().getGender());
				result.put("isTutor", "" + user.get().getIsTutor());
				result.put("name", user.get().getName());
				result.put("nearestMRT", user.get().getNearestMRT());
				result.put("phoneNumber", user.get().getPhoneNumber());
				result.put("price", user.get().getPrice());
				result.put("qualification", "" + user.get().getQualification());
				result.put("reviews", reviewDao.findByTutorId(userId));
				
				List<Subject> subjectsTaught = subjectDao.findByTutorId(user.get().getUserId());
				List<String> subjectTemp = new ArrayList<>();
				for (Subject x:subjectsTaught) {
					subjectTemp.add(x.getSubjectTaught());
				}
				result.put("subjectsTaught", subjectTemp);
				
				List<LevelsTaught> levelsTaught = levelsTaughtDao.findByTutorId(user.get().getUserId());
				List<String> levelsTaughtTemp = new ArrayList<>();
				for (LevelsTaught x:levelsTaught) {
					levelsTaughtTemp.add(x.getLevelsTaught());
				}
				result.put("levelsTaught", levelsTaughtTemp);
				
				List<UserTimeslot> userTimeslot = userTimeslotDao.findByTutorId(user.get().getUserId());
				List<String> timeslotTemp = new ArrayList<>();
				for (UserTimeslot x:userTimeslot) {
					if (x.getStatus() == TutorBookingWebsite.model.Status.OPEN) {
						int timeslotId = x.getTimeslotId();
						Optional<Timeslot> timeslot = timeslotDao.findById(timeslotId);
						timeslotTemp.add(timeslot.get().getTimeslot());
					}
				}
				result.put("openTimeslot", timeslotTemp);
			}
			
			return result;
		} catch (Throwable e) {
			throw new APIException("no such tutor");
		}
	}
	
	public List<Map<String, Object>> getAllTutors() {
		List<Map<String, Object>> result= new ArrayList<>();
		List<User> allTutors = userDao.findByIsTutor(1);
		
		for (User temp:allTutors) {
			Map<String, Object> placeHolder = new HashMap<>();
			placeHolder.put("userid", temp.getUserId());
			placeHolder.put("description", temp.getDescription());
			placeHolder.put("email", temp.getEmail());
			placeHolder.put("gender", temp.getGender());
			placeHolder.put("isTutor", temp.getIsTutor());
			placeHolder.put("name", temp.getName());
			placeHolder.put("nearestMRT", temp.getNearestMRT());
			placeHolder.put("phoneNumber", temp.getPhoneNumber());
			placeHolder.put("price", temp.getPrice());
			placeHolder.put("qualification", temp.getQualification());
			placeHolder.put("reviews", reviewDao.findByTutorId(temp.getUserId()));
			
			List<Subject> subjectsTaught = subjectDao.findByTutorId(temp.getUserId());
			List<String> subjectTemp = new ArrayList<>();
			for (Subject x:subjectsTaught) {
				subjectTemp.add(x.getSubjectTaught());
			}
			placeHolder.put("subjectsTaught", subjectTemp);
			
			List<LevelsTaught> levelsTaught = levelsTaughtDao.findByTutorId(temp.getUserId());
			List<String> levelsTaughtTemp = new ArrayList<>();
			for (LevelsTaught x:levelsTaught) {
				levelsTaughtTemp.add(x.getLevelsTaught());
			}
			placeHolder.put("levelsTaught", levelsTaughtTemp);
			
			List<UserTimeslot> userTimeslot = userTimeslotDao.findByTutorId(temp.getUserId());
			List<String> timeslotTemp = new ArrayList<>();
			for (UserTimeslot x:userTimeslot) {
				if (x.getStatus() == TutorBookingWebsite.model.Status.OPEN) {
					int timeslotId = x.getTimeslotId();
					Optional<Timeslot> timeslot = timeslotDao.findById(timeslotId);
					timeslotTemp.add(timeslot.get().getTimeslot());
				}
			}
			placeHolder.put("openTimeslot", timeslotTemp);
			
			result.add(placeHolder);
		}

		return result;
	}
	
	public ResponseEntity becomeTutor(User user) {
		try {
			User existingUser = userDao.findById(user.getUserId()).orElse(null);
			existingUser.setIsTutor(1);
			userDao.save(existingUser);
			ResponseDetails responseDetails = new ResponseDetails(new Date(), "Successfully updated details",
					"query success");
			return new ResponseEntity(responseDetails, HttpStatus.OK);
		} catch (Throwable e) {
			throw new APIException("user unable to become a tutor");
		}
	}
	
	public ResponseEntity updateUser(User user) {
		User existingUser = userDao.findById(user.getUserId()).orElse(null);
		
		try {
			existingUser.setName(user.getName());
			existingUser.setEmail(user.getEmail());
			existingUser.setPhoneNumber(user.getPhoneNumber());
			existingUser.setNearestMRT(user.getNearestMRT());
			existingUser.setDescription(user.getDescription());
			existingUser.setQualification(user.getQualification());
			existingUser.setGender(user.getGender());
			existingUser.setPrice(user.getPrice());

			userDao.save(existingUser);

			ResponseDetails responseDetails = new ResponseDetails(new Date(), "user updated", "query success");
			return new ResponseEntity(responseDetails, HttpStatus.OK);
		} catch (Throwable e) {
			throw new APIException("user unable to be updated");
		}
	}
	
	public ResponseEntity updateTutorProfile(User user, List<String> subject, List<String> userTimeslot) {
		User existingUser = userDao.findById(user.getUserId()).orElse(null);
	
		for (String temp:subject) {
			subjectDao.save(new Subject(temp, user.getUserId()));
		}
		
		for (String temp:userTimeslot) {
			int timeslotId = timeslotDao.findByTimeslot(temp).get().getTimeslotId();
			userTimeslotDao.save(new UserTimeslot(timeslotId, user.getUserId(), TutorBookingWebsite.model.Status.OPEN));
		}
		
		try {
			existingUser.setQualification(user.getQualification());
			existingUser.setPrice(user.getPrice());
			existingUser.setNearestMRT(user.getNearestMRT());
			userDao.save(existingUser);
			

			ResponseDetails responseDetails = new ResponseDetails(new Date(), "user updated", "query success");
			return new ResponseEntity(responseDetails, HttpStatus.OK);
		} catch (Throwable e) {
			throw new APIException("user unable to be updated");
		}
	}
	
	public Map<String, String> verifyToken(String idToken) {
		Map<String, String> result = new HashMap<>();
		NetHttpTransport transport = new NetHttpTransport();
		JsonFactory jsonFactory = new JacksonFactory();
		String CLIENT_ID = "896425254856-9gq8100and6qe33dgfkpmema41jcq7c3.apps.googleusercontent.com";
		GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
				.setAudience(Collections.singletonList(CLIENT_ID)).build();
		try {
			GoogleIdToken googleToken = GoogleIdToken.parse(verifier.getJsonFactory(), idToken);
			if (googleToken == null) {
				throw new APIException("No token found!");
			}
			boolean tokenIsValid = (googleToken != null) && verifier.verify(googleToken);
			if (tokenIsValid) {
				GoogleIdToken.Payload payload = googleToken.getPayload();
				// Get profile information from payload
				String userId = payload.getSubject();
				String email = payload.getEmail();
				String name = (String) payload.get("name");
				User user = userDao.findByEmail(email).orElse(null);
				if (user == null) {
					User newUser = new User(email, name);
					userDao.save(newUser);
				} else {
					result.put("userid", "" + user.getUserId());
					result.put("name", user.getName());
					result.put("email", user.getEmail());
				}
				return result;
			} else {
				throw new APIException("Token is invalid!");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (GeneralSecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		throw new APIException("An error occured in verfiying the token!");
	}
}
