import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AccountsUI from '../accounts/AccountsUI.jsx';

export default class MainContentSection extends Component {
	constructor(props, content) {
		super(props, content);
			
		this.state = {
			navSideBarOn: this.props.navSideBarOn,
			loginPanelOn: this.props.loginPanelOn
		};
		
	}

    _callBackLoginPanel(data) {
    	var newState = data;
        this.setState({ loginPanelOn: newState });
    	this.props.callBackLoginPanel(newState);
    }

	render() {
		var contentClass;
		var content_inner_actual_class;

	    if(this.props.navSideBarOn) {
	     	contentClass = "";
	    } else {
	    	contentClass = "contentNoNav";
	    }

	    if(this.props.loginPanelOn) {
	     	content_inner_actual_class = "hidden";
	    } else {
	    	content_inner_actual_class = "";
	    }

		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>

		{/* Main Content Section */}
			<section id="content" className={ contentClass }>


	        <div id="content_inner">
				<AccountsUI 
					navSideBarOn = {this.state.navButtonOn}
					loginPanelOn = {this.props.loginPanelOn} 
					callBackLoginPanel = {this._callBackLoginPanel.bind(this)} />
				
				<div id="spinner" className="spinner1"></div>
				<div id="content_inner_actual_content" className = { content_inner_actual_class }> {this.props.content} </div>

				<div className="sub_menu"></div>
				<div id="sub_content"><div id="sub_spinner" className="sub_spinner1"></div></div>

	        </div>

		      </section>

			</ReactCSSTransitionGroup>
		)
	}
}