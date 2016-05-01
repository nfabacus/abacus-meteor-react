import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavButton extends Component {
		constructor(props) {
			super(props);
			this._toggleNavSideBar = this._toggleNavSideBar.bind(this);
			this.state = {
				navButtonOn: this.props.initialNavOn
			};
		}

        _toggleNavSideBar(){
        	console.log('navkey clicked!', this.state.navButtonOn);
        	var newState = !this.state.navButtonOn;

        	this.setState({
            	navButtonOn: newState
        	});
        	this.props.callBack(newState);
        }        

	render() {
		if (this.state.navButtonOn) {
			var menuButtonClass = "";
		} else {
			var menuButtonClass = "menu-button-off";
		}

		return (

		        <div id="menu-button" className={menuButtonClass} onClick={this._toggleNavSideBar}>
		          <div id="line1" className="hamburger-lines1"></div>
		          <div id="line2" className="hamburger-lines2"></div>
		          <div id="line3" className="hamburger-lines3"></div>
		          <div id="line4" className="hamburger-lines4"></div>
		        </div>

		)
	}
}