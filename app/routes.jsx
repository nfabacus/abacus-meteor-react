import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import Welcome from './Welcome.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';
import TestPage from './testpage/Testpage.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Welcome />)
		})
	}
});

FlowRouter.route('/resolutions', {
	action() {
		mount(MainLayout, {
			content: (<ResolutionsWrapper />)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (<About />)
		})
	}

});

FlowRouter.route('/testpage', {
	action() {
		mount(MainLayout, {
			content: (<TestPage />)
		})
	}

});

FlowRouter.route('/resolutions/:id', {
	action(params) {
		console.log("hello, params id is:"+params.id);
		mount(MainLayout, {
			content: (<ResolutionDetail id={params.id} />)
		})
	}
});

