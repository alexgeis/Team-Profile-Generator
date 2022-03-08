# 10 Object-Oriented Programming: Team Profile Generator

## Your Task

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

> **Note**: There is no starter code for this assignment.

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

To begin this project we evaluated available APIs and decided to build an application that was not only aware of a user's emotional state, but tailored incoming API information to match this state. Each team member separately tested the viability of certain APIs, and after bringing ideas together in discussion we were able to priortize our MVP features.

Visuals, relevant quotes, and a media player were decided to be included in the MVP mood-tailored experience, and on top of this we added a chart to track the history of the user's moods. Our team found success in having each team member be responsible for a certain feature, with constant communication to solve any merge conflicts or design considerations.

Regarding APIs, we used Pexels for our images, YouTube for our media player, and FavQuotes for our quote API. Chart JS was used to populate/design the mood history and Moment.js was used to determine when the user was accessing the application.

Once the user selects a mood button the information is captured in local storage, which we used to populate our API fetches and the chart of mood history.

Finally, we applied a modern, responsive design to the website and arranged the elements onscreen into a polished UI.

## Deployment Details

Repo: [Team Profile Generator](https://github.com/alexgeis/Team-Profile-Generator/)

Walkthrough Video: [Team Profile Generator Video](https://drive.google.com/file/d/1Ao60mJxqBKMgWG_2F1oszoYDCJvpQAag/view)

Sample HTML File: [Team Profile HTML - example](https://github.com/alexgeis/Team-Profile-Generator/blob/main/dist/output.html)
