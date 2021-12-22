package com.revature.cookbook.daounittests;

import javax.persistence.EntityManager;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.transaction.annotation.Transactional;

import com.revature.cookbook.dao.CookbookDao;

@SpringBootTest
@DirtiesContext(classMode = ClassMode.AFTER_EACH_TEST_METHOD)
public class CookbookDaoTests {

	
	@Autowired 
	private EntityManager em;
	
	@Autowired
	private CookbookDao cookbookDaoSut; 
	
	@Test
	@Transactional
	public void createCookbookPositive() {
		
		
		
	}
	
	@Test
	@Transactional
	public void getCookbookByIdPositive() {
		
		
		
	}
	
	@Test
	@Transactional
	public void getCookbookByIdNoCookbookWithIdNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void addRecipeToCookbookPositive() {
		
		
		
	}
	
	@Test
	@Transactional
	public void addRecipeToCookbookNoCookbookWithIdNegative() {
		
		
		
	}
	
}
