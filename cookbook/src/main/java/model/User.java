package model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")

public class User {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "user_id")

private int id;

@Column(name = "first_name", nullable = false)
private String firstName;

@Column(name = "last_name", nullable = false)
private String lastName;

@Column(name = "username", nullable = false, length = 40, unique = true)
private String userName;

@Column(name = "password", nullable = false)
private String password;

@Column(name = "email", nullable = false, unique = true)
private String email;

@Column(name = "phone_number", nullable = true)
private String phoneNumber;

@Column(name = "location", nullable = true)
private String location;

@Column(name = "age", nullable = false)
private int age;

public User() {}

public User(int id, String firstName, String lastName, String userName, String password, String email,
		String phoneNumber, String location, int age) {
	super();
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.userName = userName;
	this.password = password;
	this.email = email;
	this.phoneNumber = phoneNumber;
	this.location = location;
	this.age = age;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public String getUserName() {
	return userName;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPhoneNumber() {
	return phoneNumber;
}

public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

public int getAge() {
	return age;
}

public void setAge(int age) {
	this.age = age;
}

@Override
public int hashCode() {
	return Objects.hash(age, email, firstName, id, lastName, location, password, phoneNumber, userName);
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	User other = (User) obj;
	return age == other.age && Objects.equals(email, other.email) && Objects.equals(firstName, other.firstName)
			&& id == other.id && Objects.equals(lastName, other.lastName) && Objects.equals(location, other.location)
			&& Objects.equals(password, other.password) && Objects.equals(phoneNumber, other.phoneNumber)
			&& Objects.equals(userName, other.userName);
}

@Override
public String toString() {
	return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", userName=" + userName
			+ ", password=" + password + ", email=" + email + ", phoneNumber=" + phoneNumber + ", location=" + location
			+ ", age=" + age + "]";
}



}
