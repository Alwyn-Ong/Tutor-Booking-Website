package TutorBookingWebsite.model;

import javax.persistence.Entity;
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
@Table(name="requests")
@ApiModel(description = "Request class ")
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes= "unique id of request")
	private int requestId;
	@ApiModelProperty(notes= "requested timeslot from interested student")
	private String requestedTimeslot;
	@ApiModelProperty(notes= "remarks from interested student")
	private String remarks;
	@ApiModelProperty(notes= "user id of tutor")
	private int tutorId;
	@ApiModelProperty(notes= "user id of student")
	private int studentId;
	
	public Request() {
		
	}
	
	public int getRequestId() {
		return requestId;
	}
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}
	public String getRequestedTimeslot() {
		return requestedTimeslot;
	}
	public void setRequestedTimeslot(String requestedTimeslot) {
		this.requestedTimeslot = requestedTimeslot;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
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
