package TutorBookingWebsite.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Role;
import TutorBookingWebsite.model.User;

public interface UserDao extends JpaRepository<User, Integer>{

	Optional<User> findByEmail(String email);
	
	List<User> findByIsTutor(int isTutor);
}
