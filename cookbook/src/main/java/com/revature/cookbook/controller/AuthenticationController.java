package com.revature.cookbook.controller;

import javax.security.auth.login.LoginException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.cookbook.dto.LoginDTO;
import com.revature.cookbook.model.User;
import com.revature.cookbook.service.UserService;

@RestController
public class AuthenticationController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private HttpSession session;
	
	@PostMapping(path = "/login")
	public ResponseEntity<Object> login(@RequestBody LoginDTO dto) {
		try {
			User user = userService.getUserByUsernameAndPassword(dto.getUsername(), dto.getPassword());
			
			this.session.setAttribute("currentuser", user);
			
			return ResponseEntity.status(200).body(user);
		}catch (LoginException e) {
			return ResponseEntity.status(400).body(e.getMessage());
		}
	}
	
	@GetMapping(path = "/currentuser")
	public ResponseEntity<Object> getCurrentlyLoggedInUser() {
		User user = (User) this.session.getAttribute("currentuser");
		
		if (user == null) {
			return ResponseEntity.status(401).body("You are not currently logged in");
		}
		
		return ResponseEntity.status(200).body(user);
	}
	
}
