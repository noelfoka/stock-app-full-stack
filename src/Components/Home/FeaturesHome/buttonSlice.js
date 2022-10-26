
const initialState={toggle: false};

export const buttonReducer=(state=initialState, action)=>{

    switch(action.type){
        case 'RENDER_BUTTON':
            return {...state, toggle: action.payload};
            break;
        
        default:
            return state;
            break;
    }

}

export function toggleButton(toggle){
    return(
    {
        type: 'RENDER_BUTTON',
        payload: {toggle}
    }
    )
}
