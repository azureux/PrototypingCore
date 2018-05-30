/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

class VerticalNavigation extends React.Component
{
	render()
	{	//	console.debug( "VerticalNavigation", this.props );
		return React.createElement( 'div', { className: 'VerticalNavigationPanel' }, `Users: ${this.props.InnerText}` );
	};
};