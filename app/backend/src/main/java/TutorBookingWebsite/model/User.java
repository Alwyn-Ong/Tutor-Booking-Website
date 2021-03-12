package TutorBookingWebsite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="users", uniqueConstraints={@UniqueConstraint(columnNames={"email"})})
@ApiModel(description = "User class ")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes= "unique id of user")
	private int userId;
	@Column(name = "email")
	@ApiModelProperty(notes= "unique email of user")
	private String email;
	@ApiModelProperty(notes= "name of user")
	private String name;
	@ApiModelProperty(notes= "check if user is a tutor")
	private boolean isTutor;	
	@ApiModelProperty(notes= "nearest MRT from user")
	private String nearestMRT;
	@ApiModelProperty(notes= "short description of user")
	private String description;	
	
	public User() {
		
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isTutor() {
		return isTutor;
	}
	public void setTutor(boolean isTutor) {
		this.isTutor = isTutor;
	}
	public String getNearestMRT() {
		return nearestMRT;
	}
	public void setNearestMRT(String nearestMRT) {
		this.nearestMRT = nearestMRT;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}	
}
