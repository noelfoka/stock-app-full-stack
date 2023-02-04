# $tock App

This app provides users the ability to fetch and view current stock price by entering stock ticker symbol. The user can also save a list of stock data that is stored under the 'My Stocks' navigation tab.  

## Languages and Frameworks
This app uses the React.js framework and Redux library for programming in JavaScript. 
Other libraries have been imported and selectively used as well.

## Features
    1. A search bar that enables users to fetch current stock prices.
    2. A 'save' button that saves stock name and price to 'My Stocks' page as well as to the postgres database.
    5. A 'refech' button that refetches current stock prices for saved stock. 
    6. A 'delete' button that deletes stock from the 'My Stocks' page and the postgres database.
    7. A list of saved stocks in the 'My Stocks' page.

## Functionality
    1. Persists data via the redux-persist library by storing data in local storage.
    2. Persists data via postgres database if local storage is cleared from clearing history.
    3. Makes API calls to external 'Nasdaq stock pricing' API to get current stock price.
    4. Makes API calls to REST API located in the backend to GET, POST, PUT, DELETE stock
        data (name and price) from postgres database.
    5. Does not save duplicate data.
    6. Refetched stock prices are updated in app and in the postgres database.

### Upcoming Improved Funtionality 
    1. Improve security by protecting against SQL injections via checking and sanitizing inputed data.
  






