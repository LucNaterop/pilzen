
import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default class Details extends React.Component {
	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className='left'>
					<Ons.BackButton> back </Ons.BackButton>
				</div>
				<div className='center'>Details</div>
			</Ons.Toolbar>
		);
	}
	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
				<h2>Details</h2>
			</Ons.Page>
		);	
	}
}
