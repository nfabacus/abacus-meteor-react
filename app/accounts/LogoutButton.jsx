import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LogoutButton extends Component {
		constructor(props) {
			super(props);
			if(Meteor.user()) {
					var loggedIn = true;
			} else {
					var loggedIn = false;
			}
			this.state = {
				loggedIn: loggedIn
			};
		}
	    _logout(){
	    	var newState = false;
    		this.setState({
            	loggedIn: newState
        	});
         	console.log('loggedIn still?', this.state.loggedIn);
    		this.props.callBackLoggedIn(newState);
    		       	
	     	AccountsTemplates.logout(function(){
	    	console.log('You are logged out!');

    		});
    		

    	}

	render() {
		var loggedIn = this.state.loggedIn;
		console.log('loggedIn', loggedIn);
		if(loggedIn) {
	      logoutButtonClass = "input_style ghost-button red_back";
	    } else {
	      logoutButtonClass = "hidden";
	    }
	    return (
			<button className={logoutButtonClass} onClick={this._logout.bind(this)}>Logout</button>
	    )
	}
}