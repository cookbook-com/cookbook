package com.revature.cookbook.serviceunittests;

import static org.mockito.Mockito.when;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.security.auth.login.LoginException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.transaction.annotation.Transactional;

import com.revature.cookbook.dao.UserDao;
import com.revature.cookbook.exception.UserNotFoundException;
import com.revature.cookbook.model.User;
import com.revature.cookbook.service.UserService;

@SpringBootTest
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)
public class UserServiceTests {


	@Mock
	private UserDao mockUserDao;
	
	@InjectMocks
	@Resource
	private UserService userServiceSut;
	
	
	private String hashedUsername = "16f78a7d6317f102bbd95fc9a4f3ff2e3249287690b8bdad6b7810f82b34ace3";	//From input "username"
	private String hashedSaltedPassword = "a7574a42198b7d7eee2c037703a0b95558f195457908d6975e681e2055fd5eb9"; //password should be "password" and email should be "test"
	
	@BeforeEach
	public void setup() {
		
		MockitoAnnotations.openMocks(this);
		
	}
	
	
	@Test
	@Transactional
	public void getAllUsersPositive() {
	
		ArrayList<User> expectedList = new ArrayList<>();
		
		User user1 = new User();
		
		user1.setUsername("username1");
		user1.setPassword("password");
		user1.setEmail("test");
		
		User user2 = new User();
		user2.setUsername("username2");
		user2.setPassword("password");
		user2.setEmail("test2");
		
		expectedList.add(user1);
		expectedList.add(user2);
		
		when(mockUserDao.getAllUsers()).thenReturn(expectedList);
		
		Assertions.assertEquals(expectedList, userServiceSut.getAllUsers());
		
		
	}
	
	@Test
	@Transactional
	public void deleteUserWithIdPositive() throws UserNotFoundException {
		
		User user = new User();
		
		when(mockUserDao.getUserById(1)).thenReturn(user);
		
		userServiceSut.deleteUserById(1);
		
	}
	
	@Test
	@Transactional
	public void deleteUserWithIdUserDoesNotExistNegative() {
		
		when(mockUserDao.getUserById(1)).thenThrow(IllegalArgumentException.class);
		
		Assertions.assertThrows(IllegalArgumentException.class, () -> {
			
			userServiceSut.deleteUserById(1);
			
		});
		
	}
	
	@Test
	@Transactional
	public void getUserByUsernameAndPasswordPositive() throws LoginException, NoSuchAlgorithmException {
		
		User user = new User();
		user.setUsername(hashedUsername);
		user.setPassword(hashedSaltedPassword);
		user.setEmail("test");
		
		when(mockUserDao.getUserByUsername(hashedUsername)).thenReturn(user);
		when(mockUserDao.getUserByUsernameAndPassword(hashedUsername, hashedSaltedPassword)).thenReturn(user);
		
		Assertions.assertEquals(user, userServiceSut.getUserByUsernameAndPassword("username", "password"));	
		
	}
	
	@Test
	@Transactional
	public void getUserByUsernameAndPasswordUsernameDoesntMatchNegative() {
		
		when(mockUserDao.getUserByUsername("username")).thenReturn(null);
		
		Assertions.assertThrows(LoginException.class, () -> {
			
			userServiceSut.getUserByUsernameAndPassword("username", "password");
			
		});
		
	}
	
	@Test
	@Transactional
	public void getUserByUsernameAndPasswordPasswordDoesntMatchNegative() {
		
		User user = new User();
		
		user.setUsername(hashedUsername);
		user.setPassword("Not the right password");
		user.setEmail("test");
		
		when(mockUserDao.getUserByUsername(hashedUsername)).thenReturn(user);
		when(mockUserDao.getUserByUsernameAndPassword(hashedUsername, hashedSaltedPassword)).thenThrow(LoginException.class);
		
		Assertions.assertThrows(LoginException.class, () -> {
			
			userServiceSut.getUserByUsernameAndPassword("username", "password");
			
		});
	}
	
	@Test
	@Transactional
	public void getUserByUsernameAndPasswordUsernameNullNegative() {
		
		when(mockUserDao.getUserByUsername(null)).thenReturn(null);
		
	}
	
	@Test
	@Transactional
	public void getUserByUsernameAndPasswordPasswordNullNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void getUserByUsernameAndPasswordUsernameEmptyNegative() { 
		
		
	}
	
	@Test
	@Transactional
	public void getUserByUsernameAndPasswordPasswordEmptyNegative() {
		
		
		
	}
	
	@Test
	@Transactional 
	public void newUserPositive() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserFirstnameTooLongNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserLastnameTooLongNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserPhonenumberTooLongNegative() {
		
		
		
	}
	
	
	@Test
	@Transactional
	public void newUserEmailTooLongNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserUsernameTakenNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserEmailTakenNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserUsernameEmptyNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserUsernameNullNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserPasswordEmptyNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserPasswordNullNegative() {
		
		
		
	}
	
	@Test
	@Transactional
	public void newUserEmailEmptyNegative() {
		
	
		
	}
	
	@Test
	@Transactional
	public void newUserEmailNullNegative() {
		
		
		
	}
	
	
	
	
}
