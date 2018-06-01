/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

// "Shell" control
//	1. constructor() & other React specific methods (if needed)
//	2. event handlers & other functions
//	3. render()
class VerticalNavigationBar extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = Utilities.NewId( "vnb" ),
			this.props = props;	//.Application.props.VerticalNavigationBar;

		this.CssClassNames = {
			Normal: "vertnav-main",
			Dirty: "vertnav-main-dirty",
			Saved: "vertnav-main-saved"
		};

		this.state = {
			IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal
		};

		return;
	};
	render()
	{
		console.debug( "VerticalNavigationBar", this.props);
		return React.createElement( 'div', {
			id: this.ID,
			className: this.state.CurrentCssClass
		},`Left Nav` );
	};
};
