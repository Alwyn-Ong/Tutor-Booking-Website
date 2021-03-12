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
@Table(name="timeslot")
@ApiModel(description = "Timeslot class ")
public class Timeslot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes= "unique id of timeslot")
	private int timesloId;
	@ApiModelProperty(notes= "available timeslot")
	private String timeslot;	
	
	public Timeslot() {
		
	}

	public int getTimesloId() {
		return timesloId;
	}

	public void setTimesloId(int timesloId) {
		this.timesloId = timesloId;
	}

	public String getTimeslot() {
		return timeslot;
	}

	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}
}