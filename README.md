# cookbook 
Repo for holding Revature project 2 cookbook application 

## Project description

A website that users can look up recipes for meals on, and if they create an account can save recipes for later. They can look up specific recipes by
keyword, or they can click a button that presents them a random recipe. Recipe information includes the name of the recipe, ingredients required, steps required
and a small picture accompanying it. Users that are logged on may also like other recipes, add recipes to their cookbooks and follow other users or cookbooks.
Users may also create their own recipes. 



## Setup

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
	- For setting up your enviroment variables: 
	- `db_url = jdbc:postgresql://database-1.cwiwtzs5wenw.us-east-2.rds.amazonaws.com:5432/postgres`
	- `db_password = panzergrenadier!`
	- `db_username = postgres`
	
