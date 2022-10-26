
export async function fetchNasDaq(stockName){

    const url= 'https://nasdaq-stock-pricing.p.rapidapi.com/Stock/GetPrice/' + stockName;
    
    const options = {
        method: 'GET',
        url: 'https://nasdaq-stock-pricing.p.rapidapi.com/Stock/GetPrice/AAPL',
        headers: {
          'X-RapidAPI-Key': '31c543575cmsh55786b255aeaad9p1ae1c8jsn747eaf40d71d',
          'X-RapidAPI-Host': 'nasdaq-stock-pricing.p.rapidapi.com'
        }
      };

   try{
        const response= await fetch(url, options);
        if (response.ok){
            const data= await response.json();
            return data;
        }
        else {
            console.log('Failure. Error: ' + response.status);
            throw Error;
        }
    }
    catch (error){
        window.alert('The request for the stock data has failed!');
        return undefined;
    } 
}

