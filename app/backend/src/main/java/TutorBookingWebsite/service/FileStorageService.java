package TutorBookingWebsite.service;

import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import TutorBookingWebsite.dao.FileDBDao;
import TutorBookingWebsite.model.FileDB;

@Service
public class FileStorageService {

  @Autowired
  private FileDBDao fileDBDao;

  public FileDB store(MultipartFile file, int userId) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    
    Optional <FileDB> temp = fileDBDao.findByUserId(userId);
    FileDB fileDB;
    if (temp == null) {
    	fileDB = new FileDB(fileName, file.getContentType(), file.getBytes(), userId);    	
    } else {
    	fileDB = temp.get();
    	fileDB.setData(file.getBytes());
    	fileDB.setName(fileName);
    }

    return fileDBDao.save(fileDB);
  }

  public FileDB getFile(String id) {
    return fileDBDao.findById(id).get();
  }
  
  public Stream<FileDB> getAllFiles() {
    return fileDBDao.findAll().stream();
  }
}
