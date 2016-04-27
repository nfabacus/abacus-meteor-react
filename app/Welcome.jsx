import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Welcome extends Component {
	
	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}

	render() {
		DocHead.setTitle('Welcome | Abacus Learing Lab');
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>

<header id="big_header">
<center>
  <h1 id="big_title">ABACUS LEARNING LAB</h1>

<nav className="hide_onclick sub_menu">
<p><a className="strapline" className="fadein">Place to learn & practice abacus and maths!</a></p>

  <div className="block_connector">
  <p> <a href="/about" className="page_link ghost-button lightblue_back introButtonWidth">Learn more</a></p>
  <p> <a href="signup" className="sub_option ghost-button red_back introButtonWidth">Sign up</a></p>
  <p> <a href="" className="ghost-button lime_back introButtonWidth">Find us</a></p>
  </div>
  <div className="block_connector">
  <p> <a href="" className="ghost-button purple_back introButtonWidth">Chat with us</a></p>
  <p> <a href="" className="ghost-button orange_back introButtonWidth">Call us</a></p>
  <p> <a href="" className="ghost-button green_back introButtonWidth">Email us</a></p>
  </div> 
  <p> <a className="sub_option ghost-button lightblue_back introButtonWidth" onClick={this.setVar}>Log in</a></p>
</nav>


</center>
</header>


			</ReactCSSTransitionGroup>
		)
	}
}