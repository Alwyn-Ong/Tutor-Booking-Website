package TutorBookingWebsite.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import TutorBookingWebsite.dao.FileDBDao;
import TutorBookingWebsite.exception.APIException;
import TutorBookingWebsite.model.FileDB;
import TutorBookingWebsite.model.ResponseFile;
import TutorBookingWebsite.model.ResponseMessage;
import TutorBookingWebsite.service.FileStorageService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "${v1API}")
public class FileController {
	@Autowired
	private FileStorageService storageService;
	
	@Autowired
	private FileDBDao fileDBDao;

	@PostMapping("/upload/{userId}")
	public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file,
			@PathVariable int userId) {
		String message = "";
		try {
			storageService.store(file, userId);

			message = "Uploaded the file successfully: " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Could not upload the file: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}

	@GetMapping("/files")
	public ResponseEntity<List<ResponseFile>> getListFiles() {
		List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
			String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("api/files/")
					.path(dbFile.getId()).toUriString();

			return new ResponseFile(dbFile.getName(), fileDownloadUri, dbFile.getType(), dbFile.getData().length);
		}).collect(Collectors.toList());

		return ResponseEntity.status(HttpStatus.OK).body(files);
	}

	@GetMapping("/files/{userId}")
	  public ResponseEntity<byte[]> getFile(@PathVariable int userId) {
		Optional<FileDB> existingFile = fileDBDao.findByUserId(userId);
		try {
		    FileDB fileDB = storageService.getFile(existingFile.get().getId());

		    return ResponseEntity.ok()
		        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
		        .body(fileDB.getData());	
		} catch (Exception e) {
			throw new APIException("No profile image");
		}
	  }
}
