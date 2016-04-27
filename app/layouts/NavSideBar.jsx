import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavSideBar extends Component {

	render() {
	    if(this.props.navSideBarOn) {
	    	navSideBarClass = "";
	    } else {
	    	navSideBarClass = "navHide";
	    }

		return (

	      <nav id="nav" className={navSideBarClass}>         
	        <ul id="mainnav">
	          <li><a href="/">Home</a></li>
	          <li><a href="section_1">Vision</a></li>
	          <li><a href="section_2">Courses</a></li>
	          <li><a href="section_3">News</a></li>
	          <li><a href="section_4">Creativity</a></li>
	          <li><a href="section_5">Contact</a></li>
	          <li><a href="parent_signup">Sign Up</a></li> 
	        </ul>
	     </nav>

		)
	}
}