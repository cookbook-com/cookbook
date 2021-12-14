package app;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import util.SessionFactorySingleton;

public class Application {

	public static void main(String[] args) {
		
	}
	public static void populateSampleData() {
		SessionFactory sf = SessionFactorySingleton.getSessionFactory();
	}
	
	Session session = sf.openSession();
}

