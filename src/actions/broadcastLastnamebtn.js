

const broadcastLastNameClicked = function(lastname){

    return ({
        type:'LAST_NAME_BUTTON_CLICKED',
        payload:lastname
    })

}

export default broadcastLastNameClicked