package TutorBookingWebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

import java.io.IOException;
import java.security.GeneralSecurityException;

import TutorBookingWebsite.controller.FileController;
import TutorBookingWebsite.dao.FileDBDao;
import TutorBookingWebsite.dao.LevelsTaughtDao;
import TutorBookingWebsite.dao.ReviewDao;
import TutorBookingWebsite.dao.TimeslotDao;
import TutorBookingWebsite.dao.UserDao;
import TutorBookingWebsite.dao.UserTimeslotDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.FileDB;
import TutorBookingWebsite.model.LevelsTaught;
import TutorBookingWebsite.model.ResponseDetails;
import TutorBookingWebsite.model.Review;
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
	private LevelsTaughtDao levelsTaughtDao;
	
	@Autowired
	private UserTimeslotDao userTimeslotDao;
	
	@Autowired
	private TimeslotDao timeslotDao;
	
	@Autowired
	private FileDBDao fileDBDao;
	
	@Autowired
	private FileController fileController;
		
	public Map<String, Object> getTutorById(int userId){
		try {
			Map<String, Object> result = new HashMap<>();
			Optional<User> user = userDao.findById(userId);
			if (user.get().getIsTutor() != 1) {
				throw new APIException("no such tutor");
			} else {
				result.put("userid", "" + user.get().getUserId());
				result.put("description", user.get().getDescription());
				result.put("email", user.get().getEmail());
				result.put("gender", user.get().getGender());
				result.put("isTutor", "" + user.get().getIsTutor());
				result.put("name", user.get().getName());
				result.put("nearestMRT", user.get().getNearestMRT());
				result.put("phoneNumber", user.get().getPhoneNumber());
				result.put("price", user.get().getPrice());
				result.put("qualification", "" + user.get().getQualification());
				result.put("reviews", reviewDao.findByTutorId(userId));
				
				List<LevelsTaught> levelsTaught = levelsTaughtDao.findByTutorId(user.get().getUserId());
				Map<String,List<String>> levelsTaughtTemp = new HashMap<>();
				
				for (LevelsTaught x:levelsTaught) {
					if (!levelsTaughtTemp.containsKey(x.getLevelsTaught())) {
						List<String> z = new ArrayList<>();
						z.add(x.getSubject());
						levelsTaughtTemp.put(x.getLevelsTaught(), z);
					} else {
						List<String> placeHolder = levelsTaughtTemp.get(x.getLevelsTaught());
						if (!placeHolder.contains(x.getSubject())) {
							placeHolder.add(x.getSubject());
							levelsTaughtTemp.put(x.getLevelsTaught(), placeHolder);	
						}
					}
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
				
				result.put("imageURL", "http://localhost:8080/api/files/" + user.get().getUserId());
				
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
//			placeHolder.put("email", temp.getEmail());
			placeHolder.put("gender", temp.getGender());
//			placeHolder.put("isTutor", temp.getIsTutor());
			placeHolder.put("name", temp.getName());
			placeHolder.put("nearestMRT", temp.getNearestMRT());
//			placeHolder.put("phoneNumber", temp.getPhoneNumber());
			placeHolder.put("price", temp.getPrice());
			placeHolder.put("qualification", temp.getQualification());
//			placeHolder.put("reviews", reviewDao.findByTutorId(temp.getUserId()));
			
			
			List<Review> reviews = reviewDao.findByTutorId(temp.getUserId());
			if (reviews.size() != 0) {
				// Calculate average review score
				int totalRating = 0;
				for (Review review: reviews) {
					totalRating += review.getNumberOfStars();
				}
				double overallRating = totalRating / reviews.size();
				placeHolder.put("rating", overallRating);
				placeHolder.put("reviews", reviews.size());
				
			}
			
			
			List<LevelsTaught> levelsTaught = levelsTaughtDao.findByTutorId(temp.getUserId());
			Map<String,List<String>> levelsTaughtTemp = new HashMap<>();	
			for (LevelsTaught x:levelsTaught) {
				if (!levelsTaughtTemp.containsKey(x.getLevelsTaught())) {
					List<String> z = new ArrayList<>();
					z.add(x.getSubject());
					levelsTaughtTemp.put(x.getLevelsTaught(), z);
				} else {
					List<String> placeHolder1 = levelsTaughtTemp.get(x.getLevelsTaught());
					if (!placeHolder1.contains(x.getSubject())) {
						placeHolder1.add(x.getSubject());
						levelsTaughtTemp.put(x.getLevelsTaught(), placeHolder1);	
					}
				}
			}
			
			placeHolder.put("levelsTaught", levelsTaughtTemp);
			
//			List<UserTimeslot> userTimeslot = userTimeslotDao.findByTutorId(temp.getUserId());
//			List<String> timeslotTemp = new ArrayList<>();
//			for (UserTimeslot x:userTimeslot) {
//				if (x.getStatus() == TutorBookingWebsite.model.Status.OPEN) {
//					int timeslotId = x.getTimeslotId();
//					Optional<Timeslot> timeslot = timeslotDao.findById(timeslotId);
//					timeslotTemp.add(timeslot.get().getTimeslot());
//				}
//			}
//			placeHolder.put("openTimeslot", timeslotTemp);
			placeHolder.put("imageURL", "http://localhost:8080/api/files/" + temp.getUserId());
			
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
	
	public ResponseEntity updateTutorProfile(Map<String, Object> data) {
		Map<String,Object> tempUser = (Map<String, Object>) data.get("user");
		User user = userDao.findById(Integer.parseInt(tempUser.get("userId").toString())).orElse(null);
		
		List<Object> subjects = (List<Object>)data.get("subjects");
		List<String> subject = new ArrayList<>();
		List<String> levelsTaught = new ArrayList<>();
		
		for (Object x: subjects) {
			Map<String,Object> tempSubject = (Map<String, Object>) x;
			subject.add(tempSubject.get("subjectTaught").toString());	
			levelsTaught.add(tempSubject.get("levelsTaught").toString());
		}
			
		List<Object> timeslots = (List<Object>)data.get("timeslots");
		List<String> userTimeslot = new ArrayList<>();
		
		for (Object y:timeslots) {
			Map<String,Object> tempTimeslot = (Map<String, Object>) y;
			userTimeslot.add(tempTimeslot.get("timeslot").toString());
		}
	
		User existingUser = userDao.findById(user.getUserId()).orElse(null);
	
		int index = 0;
		for (String temp:subject) {
			List<LevelsTaught> temp2 = levelsTaughtDao.findByTutorId(user.getUserId());
			
			levelsTaughtDao.save(new LevelsTaught(levelsTaught.get(index),temp,user.getUserId()));
			index++;
		}
		
		for (String temp:userTimeslot) {
			int timeslotId = timeslotDao.findByTimeslot(temp).get().getTimeslotId();
			userTimeslotDao.save(new UserTimeslot(timeslotId, user.getUserId(), TutorBookingWebsite.model.Status.OPEN));
		}
		
		try {
			existingUser.setQualification(tempUser.get("qualification").toString());
			existingUser.setPrice(Integer.parseInt(tempUser.get("price").toString()));
			existingUser.setNearestMRT(tempUser.get("nearestMRT").toString());
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
				}
				
				result.put("userid", "" + user.getUserId());
				result.put("name", user.getName());
				result.put("email", user.getEmail());
				result.put("isTutor", "" + user.getIsTutor());
				
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
