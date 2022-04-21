# StudentCash
StudentCash Project for Summer 2021 Software Engineering Course

## Introduction

This student-centered budgeting app helps those in school, particularly low-income individuals or those who do not have the ability to work for consistent income during the semester. It is a free service for students to manage their monthly expenses, so they do not fall further behind due to the rising tuition costs. 

## Features

1. Manage user account
	* Create a new account
	* Login to account
	* Reset password
	* Delete account

2. Track Budget
	* Create expense
	* Create income
	* View all

3. See Reports
	* View dashboard
	* View charts
	* See transactions
	* View total balance


## Getting Started

### Installation and Setup

1. Install [Node.js](https://nodejs.org/).
2. Clone this repository and install its dependencies.
		
		> git clone git@github.com:moreauowen/StudentCash.git
		> cd StudentCash
		> yarn install

3. Create a .env file in the root directory, and add the following line.

		> DBURI=<mongodb_url (from Atlas or local)>

		
### Run

1. From within the directory start the server and frontend in seperate shells.

		> yarn start
		> node server.js
		
2. Open a browser window and navigate to: [http://localhost:3000](http://localhost:3000)

## Demo video

LINK TO DEMO VIDEO HERE

## Contributors

* Owen Moreau
* Andrew Galvin
* Parker Dowdy
* Duoduo Xu


