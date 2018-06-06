﻿/// <reference path="../js/utilities.js" />
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
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);

        //var _buttons_array = [];
        //for (var i = 0; i < this.props.ButtonCtrl.length; i++) {
        //    //	console.debug( "this.props.RootLinks", this.props.RootLinks[i] );
        //    _buttons_array.push(
        //        React.createElement(ButtonCtrl)
        //    );
        //}

        function createMarkup(svgIcon) {
            return { __html: svgIcon };
        };

        let _plus = SVG.Add.SVG;

        //button
        let _a = React.createElement(ButtonCtrl, { className: 'Jackie', Application: this.props }); //(ButtonCtrl, {}, undefined) 

        //App title (Azure)
        let _b = React.createElement('div', { id: this.ID, className: 'appTitle' }, `${this.Title}`);

        //icon
        let _c = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_plus) } );

        //topnav container
        let _d = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, _b, _a, _c);

        return _d;

	};
};
