# ReactMasterclass

## Description
This project is built for Advanced React course at SoftUni. Interesting Star Wars data is fetched from GraphQL Server, provided by ST6 and located at: https://swapp.st6.io/graphql.

## Authorisation

For Login, use the following credentials:

+ Email: demo@st6.io 
+ Password: demo1234

## Features

### 1. Dark Mode
The user can choose between light and dark theme.

### 2. Error handling
If there is some kind of an error during login, an appropriate info message is shown on the frontend (‘Invalid Credentials’)

### 3. Responsive design
The app is fully responsive. Custom mobile menu toggle functionality is implemented

### 4. Pagination 
The app has pagination that loads more data wherever applicable (List characters page and in Single episode page)

## Testing

The components are unit-tested with jest and enzyme.

## Routes

Routes are implemented via react-router-dom.

### 1. Routes that don't require authentication

If the user is not registered, he is always redirected to the login page.

### 2. Routes that require authentication
If the user has been registered, he can see the following pages:

+ :/episodes 
+ :/episodes/id, 
+ :/characters, 
+ :/characters/id
+ :/starships/id
