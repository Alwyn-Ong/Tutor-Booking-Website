package TutorBookingWebsite.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Request;

public interface RequestDao extends JpaRepository<Request, Integer>{

}
