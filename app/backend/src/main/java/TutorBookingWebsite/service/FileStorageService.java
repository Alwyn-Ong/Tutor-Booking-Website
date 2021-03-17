package TutorBookingWebsite.service;

import java.io.IOException;
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
    FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes(), userId);

    return fileDBDao.save(FileDB);
  }

  public FileDB getFile(String id) {
    return fileDBDao.findById(id).get();
  }
  
  public Stream<FileDB> getAllFiles() {
    return fileDBDao.findAll().stream();
  }
}
