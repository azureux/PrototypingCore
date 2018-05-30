/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

class UserSwitch extends React.Component
{
	render()
	{	//	console.debug( "UserSwitch", this.props );
		return React.createElement( 'div', { className: 'UserSwitchPanel' }, `Users: ${this.props.InnerText}` );
	};
};