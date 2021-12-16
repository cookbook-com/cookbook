# cookbook
Repo for holding Revature project 2 cookbook application 

* When first setting up
	- git clone git@github.com:cookbook-com/cookbook.git
	- Only need to do this once
	- this will automatically set up remote and call git init
	
* When starting a work session
	- git pull origin main
	- If it opens up vim because of a merge conflict, just type ":wq" and press enter and it should work
	
* When finishing a work session
	- git pull origin main
	- If it opens up vim because of a merge conflict, just type ":wq" and press enter and it should work
	- git add .
	- git commit -m "Message summarizing what you did"
	- git push origin main <= this will actually push it up to the remote repository
	
* AWS RDS (Database) info
	- URL database-1.cwiwtzs5wenw.us-east-2.rds.amazonaws.com:5432/postgres
	- Username postgres
	- Password panzergrenadier! ```Password all lowercase```
	- For setting up your enviroment variables: db_url = jdbc:database-1.cwiwtzs5wenw.us-east-2.rds.amazonaws.com:5432/postgres
												db_password = panzergrenadier!
												db_username = postgres
	