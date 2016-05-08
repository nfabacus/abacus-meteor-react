import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SessionTestSection extends TrackerReact(React.Component) {
	constructor(props, context) {
		super(props, context);
				
	}


	blueButton() {
		console.log('cicked');
		Session.set('myColor', "lightblue_back" );
		console.log('Session set to: ', Session.get('myColor') ) ;
	}
	greenButton() {
		Session.set('myColor', "green_back");
		console.log('cicked');
		console.log('Session set to: ', Session.get('myColor') ) ;
	}

	render() {
	Session.setDefault('myColor', 'red_back');
        
    console.log('Session Color passed to rendering', Session.get('myColor'));

 
		return (
			<div className={Session.get('myColor')} >
				<h2>SessionTestSection</h2>
				<p >I am SessionTestSection.</p>
				<p >The current color is {Session.get('myColor')}</p>
	   			<button onClick={this.blueButton} > Make it blue</button>
	   			<button onClick={this.greenButton} > Make it green</button>
			</div>

		)
	}
}