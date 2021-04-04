package TutorBookingWebsite.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Booking;
import TutorBookingWebsite.model.LevelsTaught;
import TutorBookingWebsite.model.Request;

public interface BookingDao extends JpaRepository<Booking, Integer>{
	List<Booking> findByTutorId(int tutorId);
}
