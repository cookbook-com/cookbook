package com.revature.cookbook.model;

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

@Column(name ="user_name", nullable = false)
private String username;

@Column(name ="password", nullable = false)
private String password;

@Column(name = "first_name", nullable = false)
private String firstName;

@Column( name = "last_name", nullable = false)
private String lastName;

@Column(name = "phone_number")
private String phoneNumber;

@Column(name ="email")
private String email;

@Column(name = "age")
private int age;

@Column(name = "likedRecipe")
private int likedRecipe;

public User() {
	super();
}

public User(int id, String username, String password, String firstName, String lastName, String phoneNumber,
		String email, int age, int likedRecipe) {
	super();
	this.id = id;
	this.username = username;
	this.password = password;
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.email = email;
	this.age = age;
	this.likedRecipe = likedRecipe;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
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

public String getPhoneNumber() {
	return phoneNumber;
}

public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public int getAge() {
	return age;
}

public void setAge(int age) {
	this.age = age;
}

public int getLikedRecipe() {
	return likedRecipe;
}

public void setLikedRecipe(int likedRecipe) {
	this.likedRecipe = likedRecipe;
}

@Override
public int hashCode() {
	return Objects.hash(age, email, firstName, id, lastName, likedRecipe, password, phoneNumber, username);
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
			&& id == other.id && Objects.equals(lastName, other.lastName) && likedRecipe == other.likedRecipe
			&& Objects.equals(password, other.password) && Objects.equals(phoneNumber, other.phoneNumber)
			&& Objects.equals(username, other.username);
}

@Override
public String toString() {
	return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
			+ ", lastName=" + lastName + ", phoneNumber=" + phoneNumber + ", email=" + email + ", age=" + age
			+ ", likedRecipe=" + likedRecipe + "]";
}


}
