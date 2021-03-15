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
@Table(name="subject")
@ApiModel(description = "Subject class ")
public class Subject {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes= "unique id of subject")
	private int subjectId;
	@ApiModelProperty(notes= "subject taught")
	private String subjectTaught;
	@ApiModelProperty(notes= "tutor id")
	private int tutorId;
	
	public Subject() {
		
	}

	public int getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}

	public String getSubjectTaught() {
		return subjectTaught;
	}

	public void setSubjectTaught(String subjectTaught) {
		this.subjectTaught = subjectTaught;
	}

	public int getTutorId() {
		return tutorId;
	}

	public void setTutorId(int tutorId) {
		this.tutorId = tutorId;
	}
}
