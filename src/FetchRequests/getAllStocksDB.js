//This function makes a GET request to the stockAppAPI on the backend node.js/express.js
// server. It returns the names and prices of all stocks saved in the postgres database.

export async function getAllStocksDB(){
    
    const url= process.env.REACT_APP_API_URL+'/getAllStocks';

    const options = {
        method: 'GET',
        headers:{Accept: 'application.json', 'Content-Type': 'application/json'}
    };

    try{
    const response= await fetch(url, options);
        try{
            if (response.ok){
                const data= await response.json();
                if(data.length!=0){
                    return data.result;
                }
                else{
                    return data;
                }
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