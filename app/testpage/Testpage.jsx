import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TestPageChild1 from './TestPageChild1.jsx';
import TestPageChild2 from './TestPageChild2.jsx';
import TestPageChild3 from './TestPageChild3.jsx';
import SessionTestSection from './SessionTestSection.jsx';
export default class TestPage extends Component {
	constructor(props) {
		super(props);
		this._callBackFunc = this._callBackFunc.bind(this);
		this._callBack2Func = this._callBack2Func.bind(this);
		this.state = {
			panelOn: false,
			panel2On: false
		};
	}

	_callBackFunc(data){
		this.setState({
			panelOn: data
		});
	}
	_callBack2Func(data){
		this.setState({
			panel2On: data
		});
	}

	render() {
        if (this.state.panelOn) {
        	var switchResponse = "lightblue_back";
        } else {
        	var switchResponse = "red_back";
        }
        if (this.state.panel2On) {
        	var switchResponse2 = "lightblue_back";
        } else {
        	var switchResponse2 = "red_back";
        }
		return (
			<div>
				<div className={switchResponse}>
					<h1>Test Page (Panel1)</h1>
					<p>Mustache typewriter tote bag lo-fi. Viral typewriter synth cray, listicle four dollar toast cardigan 90s ethical seitan fanny pack. Man bun small batch tote bag hella, health goth lumbersexual pitchfork pour-over banjo shabby chic DIY everyday carry banh mi skateboard. Hashtag 
					</p>
				</div>
				<div className={switchResponse2}>
					<h1>Test Page (Panel2)</h1>
					<p>Mustache typewriter tote bag lo-fi. Viral typewriter synth cray, listicle four dollar toast cardigan 90s ethical seitan fanny pack. Man bun small batch tote bag hella, health goth lumbersexual pitchfork pour-over banjo shabby chic DIY everyday carry banh mi skateboard. Hashtag 
					</p>
				</div>

				<TestPageChild1 initialPanelState = {this.state.panelOn} callBack = {this._callBackFunc}/>
				<TestPageChild2 initialPanelState = {this.state.panel2On} callBack2 = {this._callBack2Func}/>
				<TestPageChild3 initialPanelState = {this.state.panel2On} />
				<SessionTestSection initialPanelState = {this.state.panel2On} />
				<SessionTestSection />
			</div>

		)
	}
}