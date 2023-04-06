//This sends a GET request to the stockAppAPI on the node.js/express.js backend server 
//to get a single stock name.

export async function getStockDB(stockName){

    const url= process.env.REACT_APP_API_URL+'/getStock/'+stockName;
    
    const options = {
        method: 'GET',
        headers:{Accept: 'application.json', 'Content-Type': 'application/json'}
    };

    try{
    const response= await fetch(url, options);
        try{
            if (response.ok){
                const data= await response.json();
                return data.result;
            }
        }
        catch(error) {
            throw error;
        }
    }
    catch (error){
        throw error;
    } 
}