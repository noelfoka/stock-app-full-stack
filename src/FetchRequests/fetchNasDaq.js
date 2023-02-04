//This function sends a GET request to an external Nasdaq stock pricing API.

export async function fetchNasDaq(stockName){

    const url= 'https://nasdaq-stock-pricing.p.rapidapi.com/Stock/GetPrice/' + stockName;
    
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '31c543575cmsh55786b255aeaad9p1ae1c8jsn747eaf40d71d',
          'X-RapidAPI-Host': 'nasdaq-stock-pricing.p.rapidapi.com'
        }
    };

   try{
        const response= await fetch(url, options);
        try{
            if (response.ok){
                let data= await response.json();
                data=data.toFixed(2);
                return data;
            }
        }
        //To catch http errors.
        catch(error) {
            throw error;
            return undefined;
        }
    }
    //To catch network errors.
    catch (error){
        throw error;
        return undefined;
    } 
}

