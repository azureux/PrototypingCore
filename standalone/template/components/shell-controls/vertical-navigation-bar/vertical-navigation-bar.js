/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
//// "VerticalNavigationBar" control
"use strict";
class VerticalNavigationBar extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = Utilities.NewId( "vnb" ),
		this.Title = "Dashboard";
		this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = this.ID;
		this.CssFile = "components/shell-controls/vertical-navigation-bar/vertical-navigation-bar.css";
		//this.CssClassNames = {
		//	Normal: this.Theme + " vertnav-main",
		//	Dirty: this.Theme + " vertnav-main-dirty",
		//	Saved: this.Theme + " vertnav-main-saved"
		//};
		this.CssClassNames = {
			Normal: "vertnav-main " + this.Theme,
			Dirty: "vertnav-main-dirty " + this.Theme,
			Saved: "vertnav-main-saved " + this.Theme
		};

		this.state = {
			IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal
		};

		if ( this.props.Application.props.VerticalNavigationBar.Title !== undefined )
		{
			this.Title = this.props.Application.props.VerticalNavigationBar.Title;
		}
		return;
	};
	render()
	{	//	console.debug( "VerticalNavigationBar.render()", this.props );
		Utilities.InjectControlCss( this.CssFileID, this.CssFile );

		return React.createElement( 'div', {
			id: this.ID,
			className: this.state.CurrentCssClass
		},`${this.Title}`  );
	};
};
