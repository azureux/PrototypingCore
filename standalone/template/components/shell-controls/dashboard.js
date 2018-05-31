/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

// "Shell" control
//	1. constructor() & other React specific methods (if needed)
//	2. event handlers & other functions
//	3. render()
class Dashboard extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = Utilities.NewId( "dashboard" );
		this.props = this.props.Dashboard;

		this.CssClassNames = {
			Normal: "dashboard-main",
			Dirty: "dashboard-main-dirty",
			Saved: "dashboard-main-saved"
		};

		this.state = {
			IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal
		};

		return;
	};
	render()
	{
		console.debug( "Dashboard.render()", this.props );
		return React.createElement( 'div', {
			id: this.ID,
			className: this.state.CurrentCssClass
		},`Dashboard` );
	};
};
