import React from 'react'
import { connect } from 'react-redux';

class PersonDetail extends React.Component {
    
    render() { 
        return <div>
            <h3>First Name : {this.props.firstname}</h3>
            <h3>Last Name : {this.props.lastname}</h3>
            <h3>Score : {this.props.score}</h3>
        </div>
        
    }
}

function convertStoreToProps(store){
    return {
        firstname: store.firstnamered,
        lastname: store.lastnamered,
        score:store.scorered
    }
}
 
export default connect(convertStoreToProps)(PersonDetail);