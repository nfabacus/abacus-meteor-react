import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MainContentSection extends Component {

	render() {
	    if(this.props.navSideBarOn) {
	     	contentNavClass = "";
	    } else {
	    	contentNavClass = "contentNoNav";
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
			  <section id="content" className={contentNavClass}>
		        <div id="content_inner">
		          <div id="spinner" className="spinner1"></div>
		          <div id="content_inner_actual_content"> {this.props.content} </div>
		           
		          <div className="sub_menu"></div>
		          <div id="sub_content"><div id="sub_spinner" className="sub_spinner1"></div></div>
		          
		        </div>
		      </section>

			</ReactCSSTransitionGroup>
		)
	}
}