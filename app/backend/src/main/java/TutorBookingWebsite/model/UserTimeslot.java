package TutorBookingWebsite.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="usertimeslot")
@ApiModel(description = "UserTimeslot class ")
public class UserTimeslot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes= "unique id of usertimeslot")
	private int userTimeslotId;
	@Enumerated(EnumType.STRING)
	@ApiModelProperty(notes= "status of timeslot")
	private Status status;
	@ApiModelProperty(notes= "timeslot id")
	private int timeslotId;
	@ApiModelProperty(notes= "user id of tutor")
	private int tutorId;
	@ApiModelProperty(notes= "user id of student")
	private int studentId;
	
	public UserTimeslot() {
		
	}
	
	public UserTimeslot(int timeslotId, int tutorId, Status status) {
		this.timeslotId = timeslotId;
		this.tutorId = tutorId;
		this.status = status;
	}
	
	public UserTimeslot(int studentId, int timeslotId, int tutorId, Status status) {
		this.studentId = studentId;
		this.timeslotId = timeslotId;
		this.tutorId = tutorId;
		this.status = status;
	}
	
	public int getUserTimeslotId() {
		return userTimeslotId;
	}
	public void setUserTimeslotId(int userTimeslotId) {
		this.userTimeslotId = userTimeslotId;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public int getTimeslotId() {
		return timeslotId;
	}
	public void setTimeslotId(int timeslotId) {
		this.timeslotId = timeslotId;
	}
	public int getTutorId() {
		return tutorId;
	}
	public void setTutorId(int tutorId) {
		this.tutorId = tutorId;
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
}
