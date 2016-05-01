import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {
	
	setVar() {
		Session.set('loginToggle', "green_back");
	}

	render() {
		DocHead.setTitle('About | Abacus Learning Lab');
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>
				<h1>About us</h1>
				<p>Mustache typewriter tote bag lo-fi. Viral typewriter synth cray, listicle four dollar toast cardigan 90s ethical seitan fanny pack. Man bun small batch tote bag hella, health goth lumbersexual pitchfork pour-over banjo shabby chic DIY everyday carry banh mi skateboard. Hashtag viral pug typewriter ugh, stumptown vice church-key tote bag chartreuse thundercats jean shorts. Fashion axe flexitarian messenger bag paleo, microdosing small batch leggings marfa venmo shoreditch letterpress single-origin coffee waistcoat twee direct trade. Cred readymade echo park, bicycle rights paleo raw denim next level chia green juice. Jean shorts direct trade flexitarian yr gentrify.
				</p>
				<button onClick={this.setVar}>Sign Up</button>
			</ReactCSSTransitionGroup>
		)
	}
}