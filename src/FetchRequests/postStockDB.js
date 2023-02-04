//This function sends a POST request to the stockAppAPI on the node.js/express.js
//backend server. The API then saves the stock name and price to a postgres database.

export async function postStockDB(stockName, price){

    const url= 'http://localhost:8080/saveStock/:ticker';
    
    const options = {
        method: 'POST',
        body: JSON.stringify({"Name": stockName, "Price": price}),
        headers:{Accept: 'application.json', 'Content-Type': 'application/json'}
    };

   try{
        let response= await fetch(url, options);
        try{
            if (response.ok){
                const data= await response.json();
                return data.Data;
            }
        }
        //To catch http errors. 
        catch(error) {
            throw error;
        }
    }
    //To catch network errors.
    catch (error){
        throw error;
    } 
}