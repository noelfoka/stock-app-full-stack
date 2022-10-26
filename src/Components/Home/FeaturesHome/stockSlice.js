
const initialState={savedStocks: []};

export const stockReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'SAVE_STOCK':
            return {...state, savedStocks: [...state.savedStocks, {name: action.payload.name, price: action.payload.price}]};
            break;
        default:
            return state;
            break;
    }
}

export function saveStock (name, price){
    return (
            {
            type: 'SAVE_STOCK',
            payload: {name: name, price: price} 
            }
    )
}


