package TutorBookingWebsite.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import TutorBookingWebsite.model.FileDB;

public interface FileDBDao extends JpaRepository<FileDB, String> {
	Optional<FileDB> findByUserId(int userId);
}
