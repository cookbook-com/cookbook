package com.revature.cookbook;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.hibernate.Session;

import org.hibernate.Transaction;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.cookbook.dto.LoginDTO;
import com.revature.cookbook.model.User;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)

public class AuthenticationControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private EntityManagerFactory emf;
	
	@Autowired
	private ObjectMapper mapper;
	
	@BeforeEach
	public void setUp() {
		
		EntityManager em = emf.createEntityManager();
		Session session = em.unwrap(Session.class);
		Transaction tx = session.beginTransaction();
		
		User Rober = new User(1,"bob21","test","Robert","Smith","717-123-3456","bob@gmail.com",24,0);
		User Jenn = new User(2,"jenn20","test","Jennifer","Elaine","535-456-4581","jen@gmail.com",30,0);
		
		tx.commit();
		session.close();
	}
	
	@Test
	public void testLoginAsUser() throws Exception {
		LoginDTO dto = new LoginDTO("bob21","test");
		String jsonToSend = mapper.writeValueAsString(dto);
	//Act and Assert
		MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.post("/login").content(jsonToSend)
				.contentType(MediaType.APPLICATION_JSON);
		User expectedUser = new User(2,"jenn20","test","Jennifer","Elaine","535-456-4581","jen@gmail.com",30,0);
		expectedUser.setId(2);
		
		String expectedJsonUser = mapper.writeValueAsString(expectedUser);
		
		this.mvc.perform(builder)
		.andExpect(MockMvcResultMatchers.status().is(200))
		.andExpect(MockMvcResultMatchers.content().json(expectedJsonUser));
	
	}


}
