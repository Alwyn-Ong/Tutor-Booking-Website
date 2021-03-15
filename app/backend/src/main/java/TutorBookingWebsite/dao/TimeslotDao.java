package TutorBookingWebsite.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Timeslot;

public interface TimeslotDao extends JpaRepository<Timeslot, Integer>{

}
