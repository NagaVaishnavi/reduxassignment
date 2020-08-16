

const broadcastFirstNameClicked = function(firstname){
    return ({
        type:'FIRST_NAME_BUTTON_CLICKED',
        payload:firstname
    })

}

export default broadcastFirstNameClicked