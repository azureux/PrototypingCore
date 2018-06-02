/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
// "TopNavigationBar" control
"use strict";
class TopNavigationBar extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = Utilities.NewId( "tnb" );
		this.Title = "Top Navigation Bar";
		this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = Utilities.NewId( "tnb-css" );
		this.CssFile = "components/shell-controls/top-navigation-bar/top-navigation-bar.css";
		//this.CssClassNames = {
		//	Normal: this.Theme + " topnav-main",
		//	Dirty: this.Theme + " topnav-main-dirty",
		//	Saved: this.Theme + "topnav-main-saved",
		//};
		this.CssClassNames = {
			Normal: "topnav-main " + this.Theme,
			Dirty: "topnav-main-dirty " + this.Theme,
			Saved: "topnav-main-saved " + this.Theme,
		};
		this.state = {
			IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal
		};

		// set overrives
		if ( props.Application.props.TopNavigationBar.Title !== undefined )
		{
			this.Title = props.Application.props.TopNavigationBar.Title;
		}
		return;
	};
	render()
	{	//	console.debug( "TopNavigationBar.render()", this.props );
		Utilities.InjectControlCss( this.CssFileID, this.CssFile );

		let _top_nav = React.createElement( 'div', {
			id: this.ID,	
			className: this.state.CurrentCssClass
		},`${this.Title}` );
		return _top_nav;
	};
};
