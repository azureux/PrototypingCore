/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

// "Shell" control
//	1. constructor() & other React specific methods (if needed)
//	2. event handlers & other functions
//	3. render()
class TopNavigationBar extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = this.props.id;

		this.state = {};
		return;
	};
	render()
	{
		console.debug( "Shell", this.props, typeof Shell );
		return React.createElement( 'div', {
			id: Utilities.NewId( "shell" )
		},`Shell` );
	};
};
