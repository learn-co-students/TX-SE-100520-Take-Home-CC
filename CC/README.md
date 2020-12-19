# Bayside High Attendance Tracker

## Demo

Use this gif as an example of how the app should work.

![example project](public/app.gif)

## Instructions

For this project, you’ll be building out a React application that displays a list of student attendance per course.

Part of what this code challenge is testing is your ability to follow given instructions. While you will have some freedom in how you implement the features, be sure to carefully read the directions and follow the steps in order to build the application. **It would be better to deliver 3 working and 2 not-working deliverables rather 5 half-working deliverables.**

## Setup

1. Fork and clone this repository.

2. Run `npm start`: This will open both your React page on port `6002` and your backend on port `6001`.

3. The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

## Endpoints

The base URL for your backend is: `http://localhost:6001`

These are the endpoints you might need:

- GET: `/courses`
- GET: `/students`
- PATCH: `/students/:id`

## Core Deliverables

Below are the deliverables you should create.

As a user:

1. When the app starts, I can see and select a list of courses.
2. When I select a course, I can see all students currently enlisted to it.
3. I can toggle whether a student is attending or not, and I can see the changes on the screen immediately.
4. When I refresh my app, I can still see any changes I made previously.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user:

1. I can sort students by name or attending status.
2. I can change which course a student is enlisted to.

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-4.md).
