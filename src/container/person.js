import React from 'react'
import PersonDetail from './persondetail';
import { bindActionCreators } from 'redux';
import broadcastFirstNameClicked from '../actions/broadcastFirstnamebtn';
import broadcastLastNameClicked from '../actions/broadcastLastnamebtn';
import broadcastScoreClicked from '../actions/broadcastScorebtn';
import { connect } from 'react-redux';

class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            score: ''
        }
    }

    handleFirstName = (event) => {
        this.setState({ firstname: event.target.value })
    }

    handleLastName = (event) => {
        this.setState({ lastname: event.target.value })
    }

    handleScore = (event) => {
        this.setState({ score: event.target.value })
    }


    render() {
        return <div>
            <input type="text" name="firstname" placeholder="first name" onChange={this.handleFirstName}></input><button onClick={() => this.props.firstnameClicked(this.state.firstname)}>Add</button>
            &nbsp;&nbsp;&nbsp;
            <input type="text" name="lastname" placeholder="last name" onChange={this.handleLastName}></input><button onClick={() => this.props.lastnameClicked(this.state.lastname)}>Add</button>
            &nbsp;&nbsp;&nbsp;
            <input type="text" name="score" placeholder=" score" onChange={this.handleScore}></input><button onClick={() => this.props.scoreClicked(this.state.score)}>Add</button>
            <div>
                <PersonDetail></PersonDetail>
            </div>
        </div>;


    }
}



function convertEventToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        firstnameClicked: broadcastFirstNameClicked,
        lastnameClicked: broadcastLastNameClicked,
        scoreClicked: broadcastScoreClicked
    }, dispatch)
}
export default connect(null, convertEventToPropsAndDispatch)(Person);