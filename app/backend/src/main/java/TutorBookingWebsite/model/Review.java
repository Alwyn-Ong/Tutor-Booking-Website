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
@Entity
@Table(name="reviews")
@ApiModel(description = "Review class ")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes= "unique id of review")
	private int reviewId;
	@ApiModelProperty(notes= "number of stars")
	private int numberOfStars;
	@ApiModelProperty(notes= "review from the student")
	private String message;
	@ApiModelProperty(notes= "user id of tutor")
	private int tutorId;	
	@ApiModelProperty(notes= "user id of student")
	private int studentId;
	@ApiModelProperty(notes= "date of review")
	private String reviewDate;
	@ApiModelProperty(notes= "initial of student")
	private String initial;
	@ApiModelProperty(notes= "subject type of tuition in review")
	private String tuitionType;
	
	
	
	public Review() {
		
	}

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public int getNumberOfStars() {
		return numberOfStars;
	}

	public void setNumberOfStars(int numberOfStars) {
		this.numberOfStars = numberOfStars;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
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

	public String getReviewDate() {
		return reviewDate;
	}

	public void setReviewDate(String reviewDate) {
		this.reviewDate = reviewDate;
	}

	public String getInitial() {
		return initial;
	}

	public void setInitial(String initial) {
		this.initial = initial;
	}

	public String getTuitionType() {
		return tuitionType;
	}

	public void setTuitionType(String tuitionType) {
		this.tuitionType = tuitionType;
	}
	
	
}
