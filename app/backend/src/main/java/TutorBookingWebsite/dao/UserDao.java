package TutorBookingWebsite.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.User;

public interface UserDao extends JpaRepository<User, Integer>{

	Optional<User> findByEmail(String email);
}
