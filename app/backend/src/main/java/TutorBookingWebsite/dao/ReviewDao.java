package TutorBookingWebsite.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Review;

public interface ReviewDao extends JpaRepository<Review, Integer>{
	List<Review> findByTutorId(int tutorId);
}
