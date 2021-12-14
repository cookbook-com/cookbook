package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import service.UserService;

@RestController
public class Controller {

	@Autowired
	private UserService userService;
	
	@GetMapping(path = "/demo")
	public String test() {
		return "It's working";
	}
}
