# Team Profile Generator

## App Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

Because this application won’t be deployed, below is a link to a walkthrough video that demonstrates its functionality.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Description

To begin this process I constructed the designs for individal cards in the HTML/CSS. After the format was looking good, I moved to the javascript to request the proper info from the user to populate this HTML page. After establishing the flow trees for user decisions, I connected the loose ends and used the user input to dynamically update the HTML file being produced.

## Deployment Details

Repo: [Team Profile Generator](https://github.com/alexgeis/Team-Profile-Generator/)

Walkthrough Video: [Team Profile Generator Video](https://drive.google.com/file/d/1Ao60mJxqBKMgWG_2F1oszoYDCJvpQAag/view)

Sample HTML File: [Team Profile HTML - example](https://github.com/alexgeis/Team-Profile-Generator/blob/main/dist/output.html)
