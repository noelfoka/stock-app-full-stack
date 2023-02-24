//This function sends a DELETE request to the stockAppAPI on the 
//backend node.js/express.js server and deletes a stock from the postgres database.

export async function deleteStockDB(stockName){

    const url= process.env.REACT_APP_API_URL+'/deleteStock';
    
    const options = {
        method: 'DELETE',
        body: JSON.stringify({"Data": stockName}),
        headers:{Accept: 'application.json', 'Content-Type': 'application/json'}
    };

    try{
        const response= await fetch(url, options);
        try{ 
            if (response.ok){
                    const data= await response.json();
                    return data;
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