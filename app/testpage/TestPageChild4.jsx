import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class TestPageChild4 extends TrackerReact(React.Component) {
	constructor(props, context) {
		super(props, context);

		this.state = {
			myColor: "red_back"
		};
	}

	componentWillUnmount() {
	
	}


	myColor() {
		console.log('myColor is '.this.state.myColor);
		return this.state.myColor;
	}

	blueButton() {
		console.log('cicked blueButton');
		this.setState({myColor:"lightblue_back"});
	}
	greenButton() {
		console.log('cicked greenButton');
		this.setState({myColor:"green_back"});
	}

	render() {
        
	    // console.log('Session Color passed to rendering', );
	    console.log('SessionTestSection rendering', );

 
		return (
			<div className={this.state.myColor} >
				<h2>Test Child 4</h2>
				<p >I am Test Child 4.</p>
				<p >The current color is {this.state.myColor}</p>
	   			<button onClick={this.blueButton.bind(this)} > Make it blue</button>
	   			<button onClick={this.greenButton.bind(this)} > Make it green</button>
			</div>

		)
	}
}