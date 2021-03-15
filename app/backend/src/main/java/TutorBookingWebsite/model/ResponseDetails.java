package TutorBookingWebsite.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(description = "Response details class that provides response to client")
public class ResponseDetails {
	private Date timestamp;
	private String message;
	private String details;
	
	public ResponseDetails(Date timestamp, String message, String details) {
		super();
		this.timestamp = timestamp;
		this.message = message;
		this.details = details;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
}
