const initialState = {
    userName: "Jorge",
    
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "CHANGE_JORGE_TO_JOE": 
            return {userName: "Joe"};
        default:
            return state
    }
}

export default rootReducer;