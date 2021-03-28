package TutorBookingWebsite.service;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import TutorBookingWebsite.model.User;

@Service
public class NotificationService {
	private static JavaMailSender javaMailSender;
	
	@Value("${spring.mail.username}")
	private String hostEmail;
	
	@Autowired
	public NotificationService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendNotificationToAdmin(User user, String studentName, String requestedTimeslot) throws MailException{
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(user.getEmail());
		mail.setFrom(hostEmail);
		mail.setSubject("Pending Request");
		String emailText = "Dear Tutor, \n\nPlease note that " + studentName + " has requested a timeslot at " + requestedTimeslot + " for your tuition service! " 
							+  " \n\nYou may wish to login to view the specifics of the request. " 
							+ " \n\nPlease do not reply to "+ "this automated email.\n\n" 
							+ "Regards,\nTutorBooking Team";
		mail.setText(emailText);
	
		javaMailSender.send(mail);
	}
}
