import React, { Component } from 'react';
import logo from './logo.svg';
import LeftNav from './components/left-nav/left-nav.js';
import './App.css';

class App extends Component
{
	constructor( props )
	{
		super( props );

		this.TEST_ButtonTest = "React";
		this.TEST_ProjectName = "Project \"Acuity\"";
		this.HandleClick = this.OnClick_TestingClicks.bind( this );
		//this.Logo = logo;
		return;
	};
	OnClick_TestingClicks( pe )
	{
		console.debug( "OnClick_TestingClicks" );
		return;
	};
	render()
	{
		return (
			<div className="App">
				<header>
					<div className="brand-panel">
						<div>Preview</div>
						<div>Microsoft Azure</div>
					</div>	
					<div className="search-panel">Search</div>
					<div className="tools-panel">
						<div>Console</div>
						<div>directory switcher</div>
						<div>Notifications</div>
						<div>help</div>
						<div>feedback</div>
					</div>
					<div className="users-panel">Acounts</div>
				</header>
				<main>
					<div className="nav-panel-default">
						<LeftNav />
					</div>
					<div className="extension-panel-default">
						<img className="test-logo" src={ logo } />
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