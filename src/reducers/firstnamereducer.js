const firstnamereducer = function person(state = null, action) {

    switch (action.type) {
        case "FIRST_NAME_BUTTON_CLICKED":
            return action.payload;
           
        default:
            break;
    }
    return state
}



export default firstnamereducer