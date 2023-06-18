# FP News - Implementation Plan

This repository contains the implementation plan and process for the FP News application, which is a React Native news application utilizing the Free News API from RapidAPI. The application allows users to view news listings, read news details, sign up, and log in using their Google accounts. The application will be hosted on Firebase and an installable build will be distributed via Firebase App Distribution.

## Repository Setup
1. Create a GitHub repository named lendsqr-fp-news on your personal GitHub profile. It is important to save your projects in github cloud so this step is hghly recomended.

2. Clone the repository to your local development environment.

## Firebase Project Setup
1. Create a new Firebase project named lendsqr-fp-news using your personal Google profile.

2. Enable the necessary Firebase services for the project, including Firebase Authentication, Firebase Realtime Database, Firebase Analytics, crashlytics and Firebase Remote Configuration.

3. Set up the Firebase project configuration in the React Native application.

## Application Development
1. Set up a new React Native project using your preferred development environment with yarn or npm.

- Make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org

- Open your terminal or command prompt.
- Run the folowing command to install EXPO-CLI globally

```jsx
  npm install -g expo-cli
```
- Run the command to create an expo app
```jsx
expo init my-app
```
Replace "my-app" with your project name. This would initialize a new expo project for you


2. Install the required dependencies, including React Native, Redux Toolkit, Axios (or native fetch), React Navigation, CodePush, and Firebase libraries.

3. Configure Firebase in the React Native application using the project credentials obtained from the Firebase console.

## News Listing Screen
1. Create a React Native screen component for the news listing screen.

2. Fetch news data from the Free News API using Axios (or native fetch) and Redux Toolkit for state management.

3. Display the fetched news data on the news listing screen, including the title, image, topic, and publication date.

## News Details Screen
1. Create a React Native screen component for the news details screen.

2. Implement navigation using React Navigation from the news listing screen to the news details screen when a user taps on a specific news item.

3. Fetch the detailed information of the selected news item from the Free News API using Axios (or native fetch).

4. Display the fetched news details on the news details screen, including the summary, author, etc.

## Sign Up Screens
1. Create React Native screen components for the sign-up screens.

2. Implement navigation using React Navigation from the initial sign-up screen to the second screen for Google account sign-up.

3. Collect user information (full name, phone number, and email address) on the first sign-up screen.

4. Use Firebase Authentication to allow users to sign up with their Google accounts on the second screen.

## Login Screen
1. Create a React Native screen component for the login screen.

2. Implement Firebase Authentication to allow users to log in using their Google accounts.

## Firebase App Distribution
1. Build the React Native application for both iOS and Android platforms.

2. Set up Firebase App Distribution in the Firebase console for the lendsqr-fp-news project.

3. Distribute the installable build via Firebase App Distribution to the email addresses umar@lendsqr.com and afolabi@lendsqr.com.

### NOTE: 
Incase you run the application and you see an error regarding getting news, you would need an api key which i hid for security reasons. So you can reach me concerning api key.

## Conclusion
This implementation plan outlines the steps required to develop the FP News application using React Native, Redux Toolkit for state management, Axios (or native fetch) for API calls, React Navigation for navigation, CodePush for Over-The-Air updates, and various Firebase services such as Firebase Authentication, Firebase Realtime Database, Firebase Analytics, and Firebase Remote Configuration. By following this plan, you will be able to create a functional news application with news listing, news details, sign-up, and login features. The application will be hosted on Firebase, and an installable build will be distributed via Firebase App Distribution.
