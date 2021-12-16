package com.revature.cookbook.service;

import org.springframework.stereotype.Service;

import com.revature.cookbook.dao.UserDao;
import com.revature.cookbook.model.User;

import javax.security.auth.login.LoginException;


import com.revature.cookbook.exception.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;

	public List<User> getAllUsers() {
		List<User> users = userDao.getAllUsers();

		return users;
	}

	public void deleteUserById(int id) throws UserNotFoundException {
		User user = userDao.getUserById(id);
		
		if(user == null) {
			throw new UserNotFoundException("User with id " + id + "does not exist");
		}
		
		userDao.deleteUserById(id);
	}
	
	public User addNewUser(User user) {
		user.setUsername(user.getUsername().trim());
		user.setPassword(user.getPassword().trim());
		user.setFirstName(user.getFirstName().trim());
		user.setLastName(user.getLastName().trim());
		user.setPhoneNumber(user.getPhoneNumber().trim());
		user.setEmail(user.getEmail().trim());
		
		user.setAge(user.getAge());
		user.setLikedRecipe(user.getLikedRecipe());
		
		User newUser = userDao.addUser(user);
		
		return newUser;
			
		}
	
	public User getUserByUsernameAndPassword(String username, String password) throws LoginException {
		User user = userDao.getUserByUsernameAndPassword(username, password);
		
		if(user == null) {
			throw new LoginException("Failed to login, please check username and/or password");
		}
		return user;
	}
		
		
		
	}

