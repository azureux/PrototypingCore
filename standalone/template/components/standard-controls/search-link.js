/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

// simple controls
class SearchLink extends React.Component
{
	render()
	{	//	console.debug( "SearchLink", this.props );
		return React.createElement( 'div', { className: 'SearchPanel' }, `Search: ${this.props.InnerText}` );
	};
};
