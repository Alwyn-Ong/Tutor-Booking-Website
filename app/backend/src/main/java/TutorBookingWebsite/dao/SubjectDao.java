package TutorBookingWebsite.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Subject;

public interface SubjectDao extends JpaRepository<Subject, Integer>{
	List<Subject> findByTutorId(int tutorId);
}
