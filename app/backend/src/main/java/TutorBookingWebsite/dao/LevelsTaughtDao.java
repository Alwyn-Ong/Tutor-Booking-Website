package TutorBookingWebsite.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.LevelsTaught;

public interface LevelsTaughtDao extends JpaRepository<LevelsTaught, Integer>{
	List<LevelsTaught> findByTutorId(int tutorId);
}
