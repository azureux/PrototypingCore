/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// "Dashboard" control
"use strict";
class Dashboard extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = Utilities.NewId( "dshbrd" );
		this.Title = "Dashboard";
		this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = this.ID;
		this.CssFile = "components/shell-controls/dashboard/dashboard.css";
		this.CssClassNames = {
			Normal: this.Theme + " dsh-brd-main",
			Dirty: this.Theme + " dsh-brd-main-dirty",
			Saved: this.Theme + " dsh-brd-main-saved"
		};
		this.state = {
			IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal
		};

		if ( this.props.Application.props.Dashboard.Title !== undefined )
		{
			this.Title = this.props.Application.props.Dashboard.Title;
		}
		return;
	};
	render()
	{	//	console.debug( "Dashboard.render()", this.props );
		Utilities.InjectControlCss( this.CssFileID, this.CssFile );

		return React.createElement( 'div', {
			id: this.ID,
			className: this.state.CurrentCssClass
		},`${this.Title}` );
	};
};
