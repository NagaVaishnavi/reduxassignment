

const broadcastScoreClicked = function(score){

    return ({
        type:'SCORE_BUTTON_CLICKED',
        payload:score
    })

}

export default broadcastScoreClicked