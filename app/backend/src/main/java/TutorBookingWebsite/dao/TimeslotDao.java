package TutorBookingWebsite.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Timeslot;

public interface TimeslotDao extends JpaRepository<Timeslot, Integer>{
	Optional<Timeslot> findByTimeslot(String timeslot);
}
