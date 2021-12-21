package com.revature.cookbook.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.cookbook.dao.CookbookDao;
import com.revature.cookbook.dao.UserDao;
import com.revature.cookbook.model.Cookbook;
import com.revature.cookbook.model.User;


@Service
public class CookbookService {
	
	@Autowired
	private CookbookDao cookbookDao;
	
	@Autowired
	private UserDao userDao; 
	
	private Logger logger = LoggerFactory.getLogger(CookbookService.class);

	public Cookbook createNewCookbook(Cookbook newCookbook, int userId) throws IllegalArgumentException{
		
		//check to see user we are trying to create a cookbook for actually exists; 
		
		User user = userDao.getUserById(userId);
		
		if( user == null) {	//uh oh, user we are trying to create cookbook for doesnt exist!
			
			
			throw new IllegalArgumentException("Cannot create cookbook for user with id of " + userId + ". User does not exist");
			
		}
		
		Cookbook createdCookbook = new Cookbook();
		createdCookbook.setName(newCookbook.getName());
		createdCookbook.setUser(user);
		
		createdCookbook = cookbookDao.createNewCookbook(createdCookbook);
		
		if(createdCookbook.getUser().getId() != userId) {
			
			
		}
		
		
		return null;
	}

	public Cookbook addRecipeToCookbook(int cookbookId, int recipeId) {
		// TODO Auto-generated method stub
		return null;
	}

	public Cookbook getCookbook(int cookbookId) {
		// TODO Auto-generated method stub
		return null;
	}

}
