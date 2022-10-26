
const initialState={
    stockInfo:{Name: '',
               Price: ''
              }
};

export const addStockReducer= (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_STOCK':
            return {...state, stockInfo:{Name: action.payload.name, Price: action.payload.price}};
            break;

        default: 
            return state;
        break;
    }
}

export function addStock(name, price) {
    return (
            {
            type: 'ADD_STOCK',
            payload: {name: name, price: price}
            }
    )
}
