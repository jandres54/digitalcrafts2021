const initialState = {
    names:  [],
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "CHANGE_NAMES": 
            return [...state, names: {name: "Joe"}, {name: "Mikael"}];
        default:
            return state
    }
}

export default rootReducer;