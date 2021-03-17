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
@Table(name="levelstaught")
@ApiModel(description = "Levels taught class ")
public class LevelsTaught {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes= "unique id of levelstaught")
	private int levelsTaughtId;
	@ApiModelProperty(notes= "levels taught")
	private String levelsTaught;
	@ApiModelProperty(notes= "tutor id")
	private int tutorId;
	@ApiModelProperty(notes= "subject")
	private String subject;
	
	
	public LevelsTaught() {
		
	}
	
	public LevelsTaught(String subject, int tutorId) {
		this.subject = subject;
		this.tutorId = tutorId;
	}
	
	public LevelsTaught(String levelsTaught, String subject, int tutorId) {
		this.levelsTaught = levelsTaught;
		this.subject = subject;
		this.tutorId = tutorId;
	}
	
	public int getLevelsTaughtId() {
		return levelsTaughtId;
	}
	public void setLevelsTaughtId(int levelsTaughtId) {
		this.levelsTaughtId = levelsTaughtId;
	}
	public String getLevelsTaught() {
		return levelsTaught;
	}
	public void setLevelsTaught(String levelsTaught) {
		this.levelsTaught = levelsTaught;
	}
	public int getTutorId() {
		return tutorId;
	}
	public void setTutorId(int tutorId) {
		this.tutorId = tutorId;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}
}
