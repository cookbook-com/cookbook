package com.revature.cookbook.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.hibernate.Session;
import javax.persistence.NoResultException;

import org.springframework.stereotype.Repository;

import com.revature.cookbook.model.User;

@Repository
public class UserDao {

	@PersistenceContext
	private EntityManager em;
	
	@Transactional
	public List<User> getAllUsers(){
		Session session = em.unwrap(Session.class);
		
		List<User> users =  session.createQuery("SELECT usr FROM USer usr").getResultList();
		
		return users;
	}
	
	@Transactional
	public void deleteUserById(int id) {
		Session session = em.unwrap(Session.class);
		
		User deletedUser = session.get(User.class, id);
		session.remove(deletedUser);
	}
	
	@Transactional
	public User getUserById(int id) {
		Session session = em.unwrap(Session.class);
		
		User user = session.get(User.class, session);
		
		return user;
	
	}
	
	@Transactional
	public User addUser(User user) {
		em.persist(user);
		
		return user;
	}
	
	@Transactional()
	public User getUserByUsernameAndPassword(String username, String password) {
		try {
			User user = (User) em.createQuery("FROM User u WHERE u.username = :user AND u.password = :pass")
					.setParameter("user", password)
					.setParameter("pass", password)
					.getSingleResult();
			
			return user;
		}catch(NoResultException e) {
			return null;
		}
	}
	
}
