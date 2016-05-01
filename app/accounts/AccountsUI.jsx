import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class AccountsUI extends Component {

	constructor(props, context) {
		super(props, context);
		this._toggleLoginPanel = this._toggleLoginPanel.bind(this);
		this.state = {
			loginPanelOn: this.props.loginPanelOn
		};
	}

	componentDidMount() {
		this.view = Blaze.render(Template.LoginModal,
			ReactDOM.findDOMNode(this.refs.container));
	}

	compoentWillUnmount() {
		Blaze.remove(this.view);
	}


    _toggleLoginPanel() {
      var newState = !this.state.loginPanelOn;
      this.setState({
      	loginPanelOn: newState
      });
      
      this.props.callBackLogin(newState);

    }


	render() {
		console.log('State for LoginPanel in Account UI is :', this.state.loginPanelOn);
		if (this.state.loginPanelOn) {
			var loginPanelClass = "";
		} else {
			var loginPanelClass = "hidden";
		}


       return (
       	<div id="loginPanel" className={loginPanelClass}>
	       	<center>
	       	<span ref="container" />
	       	<button className="cancel_action input_style ghost-button red_back" onClick={this._toggleLoginPanel}>Cancel</button>
	       	</center>
       	</div>
       	)
	}

}