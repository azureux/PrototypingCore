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

		this.props = this.props.Dashboard;

		this.CssClassNames = {
			Normal: "topnav-main",
			Dirty: "topnav-main-dirty",
			Saved: "topnav-main-saved"
		};

		this.state = {
			IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal
		};

		return;
	};
	render()
	{
		console.debug( "TopNavigationBar", this.props);
		return React.createElement( 'div', {
			id: Utilities.NewId( "tnb" ),
			className: this.state.CurrentCssClass
		},`Top Nav` );
	};
};
