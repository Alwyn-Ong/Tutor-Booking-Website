package TutorBookingWebsite.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Status;
import TutorBookingWebsite.model.UserTimeslot;

public interface UserTimeslotDao extends JpaRepository<UserTimeslot, Integer>{
	List<UserTimeslot> findByStatus(Status status);
	
	List<UserTimeslot> findByTutorId(int tutorId);
}