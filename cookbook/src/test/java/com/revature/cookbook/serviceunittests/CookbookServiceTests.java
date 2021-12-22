package com.revature.cookbook.serviceunittests;

import javax.annotation.Resource;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.transaction.annotation.Transactional;

import com.revature.cookbook.dao.CookbookDao;
import com.revature.cookbook.service.CookbookService;

@SpringBootTest
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)
public class CookbookServiceTests {

	@Mock
	private CookbookDao mockCookbookDao; 
	
	@InjectMocks
	@Resource
	private CookbookService cookbookServiceSut;
	
	@BeforeEach
	public void setup() {
		
		MockitoAnnotations.openMocks(this);
		
	}
	
	@Test
	@Transactional
	public void getCookbookWithIdPositive() {
		
		
		
	}
	
	@Test
	@Transactional
	public void getCookbookWithIdCookbookDoesntExistNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void addRecipeToCookbookPositive() {
		
		
		
	}
	
	
	@Test
	@Transactional
	public void addRecipeToCookbookCookbookDoesntExistNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void createCookbookPositive() {
		
		
		
	}
	
	@Test
	@Transactional
	public void createCookbookNameTooLongNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void createCookbookUserDoesntExist() {
		
		
		
	}
}
