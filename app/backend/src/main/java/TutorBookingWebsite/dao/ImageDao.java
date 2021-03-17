package TutorBookingWebsite.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.Image;

public interface ImageDao extends JpaRepository<Image, Integer>{
	Optional<Image> findByUserId(int userId);
}
