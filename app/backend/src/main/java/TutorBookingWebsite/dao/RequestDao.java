package TutorBookingWebsite.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Request;

public interface RequestDao extends JpaRepository<Request, Integer>{
	List<Request> findByTutorId(int tutorId);
	
	List<Request> findByStudentId(int studentId);
}
