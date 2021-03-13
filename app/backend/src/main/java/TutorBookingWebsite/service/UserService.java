package TutorBookingWebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

import java.io.IOException;
import java.security.GeneralSecurityException;

import TutorBookingWebsite.dao.ReviewDao;
import TutorBookingWebsite.dao.UserDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.ResponseDetails;
import TutorBookingWebsite.model.User;

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
	
	String[] columnName = { "userId", "email", "name", "gender", "phoneNumber", "description", "nearestMRT", "isTutor", "qualification"};
	
	public Map<String, Object> getTutorById(int userId){
		try {
			Map<String, Object> result = new HashMap<>();
			Optional<User> user = userDao.findById(userId);
			if (user.get().getIsTutor() != 1) {
				throw new APIException("no such tutor");
			} else {
				result.put("userid", "" + user.get().getUserId());
				result.put("name", user.get().getName());
				result.put("gender", user.get().getGender());
				result.put("gender", user.get().getPhoneNumber());
				result.put("email", user.get().getEmail());
				result.put("decription", user.get().getDescription());
				result.put("nearestMRT", user.get().getNearestMRT());
				result.put("isTutor", "" + user.get().getIsTutor());
				result.put("reviews", reviewDao.findByTutorId(userId));
				result.put("qualification", "" + user.get().getQualification());
			}
			
			return result;
		} catch (Throwable e) {
			throw new APIException("no such tutor");
		}
	}
	
	public Map<String, Object> getAllTutors() {
		Map<String, Object> result = new HashMap<>();
		result.put("columns", columnName);

		List<User> tutors = userDao.findByIsTutor(1);
		Object[] temp = new Object[tutors.size()];

		int index = 0;

		for (User placeHolder : tutors) {
			Map<String, Object> result2 = new HashMap<>();
			result2.put("userId", placeHolder.getUserId());
			result2.put("email", placeHolder.getEmail());
			result2.put("name", placeHolder.getName());
			result2.put("phoneNumber", placeHolder.getPhoneNumber());
			result2.put("description", placeHolder.getDescription());
			result2.put("nearestMRT", placeHolder.getNearestMRT());
			result2.put("role", placeHolder.getIsTutor());
			result2.put("reviws", reviewDao.findByTutorId(placeHolder.getUserId()));
			temp[index] = result2;
			index++;
		}

		result.put("users", temp);
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
			existingUser.setDescription(user.getQualification());

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
