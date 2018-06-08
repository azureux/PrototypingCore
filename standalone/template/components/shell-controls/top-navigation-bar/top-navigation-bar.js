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

        function createMarkup(svgIcon) {
            return { __html: svgIcon };
        };

        let _plus = SVG.Add.SVG;
        let _notif = SVG.Shell.Notification.SVG;
        let _console = SVG.Shell.Console.SVG;
        let _gear = SVG.Navigation.settings.SVG;
        
        //references
        //buttonText: 'Jackie\'s Button'
        //React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_notif) });
        //React.createElement(ButtonCtrl, { className: 'icon', attributeTitle: 'Jackie\'s title attribute', buttonText: 'Jackie\'s Button', Application: this.props, dangerouslySetInnerHTML: createMarkup(_plus) });

        //App title (Azure)
        let _a = React.createElement('div', { id: this.ID, className: 'appTitle' }, `${this.Title}`);

        //button
        let _b = React.createElement(ButtonCtrl, { className: 'Jackie', Application: this.props }); //(ButtonCtrl, {}, undefined) 

        //btn ctrls

        let _c1 = React.createElement(ButtonCtrl, { className: 'TopNav', attributeTitle: 'Notifications', buttonText: 'Jackie\'s Button', Application: this.props, svgIcon: SVG.Shell.Notification });
        let _c2 = React.createElement(ButtonCtrl, { className: 'TopNav', attributeTitle: 'Cloud Shell', buttonText: 'Jackie\'s Button', Application: this.props, svgIcon: SVG.Shell.Console });
        let _c3 = React.createElement(ButtonCtrl, { className: 'TopNav', attributeTitle: 'Settings', buttonText: 'Populating', Application: this.props, svgIcon: SVG.Shell.Notification  });
        let _c4 = React.createElement(ButtonCtrl, { className: 'TopNav', attributeTitle: 'Feedback', buttonText: 'Jackie\'s Button', Application: this.props, svgIcon: SVG.Shell.Help });
        let _c5 = React.createElement(ButtonCtrl, { className: 'TopNav', attributeTitle: 'Help', buttonText: 'Jackie\'s Button', Application: this.props, svgIcon: SVG.Shell.SubscriptionsAndDirectories});
        let _c6 = React.createElement(ButtonCtrl, { className: 'TopNav', attributeTitle: 'Directory and Subscription folder', Application: this.props, svgIcon: SVG.Shell.Notification });

        //control container 
        var controlArray = [_c1, _c2, _c3, _c4, _c5, _c6];
        let _d = React.createElement('div', { className: 'controlContainer' }, controlArray);
        
        //topnav container
        let _e = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, _a, _b, _d);

        return _e;
	};
};
