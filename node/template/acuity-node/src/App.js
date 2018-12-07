import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
	constructor( props )
	{
		super( props );

		this.TEST_ButtonTest = "React";
		this.TEST_ProjectName = "Project \"Acuity\"";
		this.HandleClick = this.OnClick_TestingClicks.bind( this );
		return;
	};
	OnClick_TestingClicks( pe )
	{
		console.debug( "OnClick_TestingClicks" );
		return;
	};
	render()
	{
		//	<p>Edit <code>src/App.js</code> and save to reload.</p>
		return (
			<div className="App">
				<header>
					<div>Preview</div>
					<div>Microsoft Azure</div>
					<div>Search</div>
					<div>Console</div>
					<div>directory switcher</div>
					<div>Notifications</div>
					<div>help</div>
					<div>feedback</div>
					<div>Acounts</div>
				</header>
				<main>
					<div className="nav-panel-default">
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
						<div>left nav</div>
					</div>
					<div className="extension-panel-default">
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>
						<div>extensions content</div>

					</div>
					<div className="context-panel-default">
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
						<div>context blade</div>
					</div>
				</main>
			</div>
		);
	}
}
export default App;