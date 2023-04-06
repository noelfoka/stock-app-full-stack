# $tock App Api

This REST API GETS, POSTS, PUTS, and DELETES stock data to a 
postgres database. It serves as the backend server for the stock-app react app by receiving API calls and sending back stock data as a response.

## Languages and Frameworks

This API uses a node.js/express.js server. 

## Features

    1. Gets all stock names and their respective price from
       postgres database. 
    2. Gets a single inputed stock name from database.
    3. Saves inputed stock name and price to database.
    4. Modifies price of stock in database.
    5. Deletes inputed stock from database.

