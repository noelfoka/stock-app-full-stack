const express = require('express');
var cors = require('cors');
const pg= require('pg');
require('dotenv').config();





//This is a API on an node.js/express.js server that can receive API calls 
//and send stock data. It serves as the backend server for the stock-app 
//react app. The REST API GETS, POSTS, PUTS, and DELETES data to the 
//postgres database located on localhost.
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
})

const config = {
  database: process.env.REACT_APP_DATABASE,
  host: process.env.REACT_APP_HOST,
  user: process.env.REACT_APP_USER,
  password: process.env.REACT_APP_PASSWORD,
  port: process.env.REACT_APP_PORT
};

var pool = new pg.Pool(config);

//Gets all stock ticker_symbols and their price from database.
app.get('/getAllStocks', (req, res)=>{

  if(pool){ 
    let data=req.params.getAllStocks;
    let text = 'SELECT ticker_symbol, price FROM stocks';

    let sendRequest= async function (){
      return new Promise((resolve, reject)=>{
        pool.query(text, async (err, res) => {
          if (err) {
            reject("error");
          } 
          else {
            if(res.rows.length!=0){
            let result=res.rows;
            let dbResponse= await JSON.stringify({"result": result});
            resolve(dbResponse);
            }
            else{
              let dbResponse= await JSON.stringify({"result": []});
              resolve(dbResponse);
            } 
          }
        });     
      });
    };  
    
    sendRequest().then((success)=>{res.send(success);}, (failure)=>{res.send(failure);});
  }
  else{
    throw error;
  } 

});

//Gets a single inputed stock ticker_symbol from database.
app.get('/getStock/:ticker', (req, res)=>{

  if(pool){ 
   
    let data=req.params.ticker;
    let text = 'SELECT ticker_symbol FROM stocks WHERE ticker_symbol = \''+data+'\';';

    let sendRequest= async function (){
      return new Promise((resolve, reject)=>{
        pool.query(text, async (err, res) => {
          if (err) {
            reject('error');
          } 
          else if(res.rows.length===0){
            let dbResponse= await JSON.stringify({"result": null});
            resolve(dbResponse);
          }
          else {
            let result=res.rows[0].ticker_symbol;
            let dbResponse= await JSON.stringify({"result": result});
            resolve(dbResponse);
          }
        });
      });
    };  

    sendRequest().then((success)=>{res.send(success);}, (failure)=>{res.send('failure');});
  }
  else{
    throw error;
  } 
});

//Saves inputed stock ticker_symbol and price to database.
app.post('/saveStock/:ticker', async (req, res, next) => {

  if(pool){ 
  
    let name=await req.body.Name;
    let price=await req.body.Price;
    let text= 'INSERT INTO stocks (ticker_symbol, price) VALUES (\''+name+'\','+price+');';
    let postRequest= async function (){
      return new Promise(async (resolve, reject)=>{
        await pool.query(text, async (err, res) => {
          if (err) {
            reject(err);
          } else{
            resolve('success');
          }
        });
      });
    }; 

    postRequest().then(async (success)=>{let result = await JSON.stringify({"result": "success"}); await res.status(200).send(result);}, (failure)=>{res.send(failure);});
  }
  else{
    throw error;
  }
});

//Modifies price of stock in database.
app.put('/saveStock/:ticker', async (req, res, next) => {

  if(pool){ 
  
    let name=await req.body.Name;
    let price=await req.body.Price;
    let text= 'UPDATE stocks set price ='+price+ ' WHERE ticker_symbol=\''+name+'\';';
    let postRequest= async function (){
      return new Promise(async (resolve, reject)=>{
        await pool.query(text, async (err, res) => {
          if (err) {
            reject(err);
          } else{
            resolve('success');
          }
        });
      });
    }; 

    postRequest().then(async (success)=>{let result = await JSON.stringify({"result": "success"}); await res.status(200).send(result);}, (failure)=>{res.send(failure);});
  }
  else{
    throw error;
  }
});

//Deletes inputed stock from database.
app.delete('/deleteStock', async (req, res, next) => {

  if(pool){ 

    let data=await req.body.Data;
    let text= 'DELETE FROM stocks WHERE ticker_symbol=\''+data+'\';';

    let sendRequest= async function (){
      return new Promise(async (resolve, reject)=>{
        await pool.query(text, async (err, res) => {
          if (err) {
            reject(err);
          } else{
            resolve('success');
          }
        });
      });
    }; 

    sendRequest().then(async (success)=>{let result = await JSON.stringify({"result": "success"}); await res.status(200).send(result);}, (failure)=>{res.send(failure);});
  }
  else{
    throw error;
  }
});





