//This is a collection of Redux reducers and actions used to update one 
//slice of global state. 
//More specifically, it stores an array of all saved stocks and deletes 
//specified stocks.
//The global state is saved in a Redux store object in the store.js file.

const initialState={savedStocks: []};

export const stockReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'SAVE_STOCK':
            //If stock details are already found in state, return same state without modifications.
            if (state.savedStocks.find(element => element.name===action.payload.name && element.price===action.payload.price )){
                return state;
            }
            //If stock exists in state but has a different price, replace stock with new details.
            else if(state.savedStocks.find(element => element.name===action.payload.name && element.price!=action.payload.price )){
                let replace=state.savedStocks.find(element => element.name===action.payload.name)
                let filteredStocks= state.savedStocks.filter((element)=>element.name!=replace.name);
                return {...state, savedStocks: [...filteredStocks, {name: action.payload.name, price: action.payload.price}]}
            }
            //If stock doesn't exist in state, add stock to state.
            else{
                return {...state, savedStocks: [...state.savedStocks, {name: action.payload.name, price: action.payload.price}]};
            }
            break;
        case 'DELETE_STOCK': 
            //Deletes stock from state.
            let filteredStocks= state.savedStocks.filter((element)=>element.name!=action.payload.name);
            return {...state, savedStocks: filteredStocks};
            break;
        default:
            return state;
            break;
    }
}

export function saveStock(name, price){
    return (
            {
            type: 'SAVE_STOCK',
            payload: {name: name, price: price} 
            }
    )
}

export function deleteStock(name){
    return (
            {
            type: 'DELETE_STOCK',
            payload: {name: name}
            }
    )
}


