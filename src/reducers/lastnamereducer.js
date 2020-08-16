const lastnamereducer = function person(state = null, action) {

    switch (action.type) {
           
        case "LAST_NAME_BUTTON_CLICKED":
            return action.payload;

        default:
            break;
    }
    return state
}



export default lastnamereducer