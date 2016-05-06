import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LoginPanelCancelButton extends Component {

	constructor(props, context) {

		super(props, context);
		this.state = {
			loginPanelOn: this.props.loginPanelOn
		};
	}

    _cancelLoginPanel(e) {
      e.preventDefault();
      var newState = false;
      this.setState({
      	loginPanelOn: newState
      });
      
      this.props.callBackLoginPanel(newState);

    }

	render() {
 		
    if (this.props.loginPanelOn) {
			var loginPanelClass = "";
		} else {
			var loginPanelClass = "hidden";
		}

       return (          
         	<button className="cancel_action input_style ghost-button red_back" onClick={this._cancelLoginPanel.bind(this)}>Cancel</button>
       	)
	}

}