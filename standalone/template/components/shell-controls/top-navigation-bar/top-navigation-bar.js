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
        let _notif = SVG.Shell.Notification.SVG;
        let _console = SVG.Shell.Console.SVG;
        let _gear = SVG.Navigation.settings.SVG;

        


        //App title (Azure)
        let _a = React.createElement('div', { id: this.ID, className: 'appTitle' }, `${this.Title}`);

        //button
        let _b = React.createElement(ButtonCtrl, { className: 'Jackie', Application: this.props }); //(ButtonCtrl, {}, undefined) 

        //icons
        let _c1 = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_notif) });
        let _c2 = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_console) });
        let _c3 = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_gear) });
        let _c4 = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_plus) });
        let _c5 = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_plus) });
        let _c6 = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_plus) });

        var controlArray = [_c1, _c2, _c3, _c4, _c5, _c6];

        //icon container 
        let _d = React.createElement('div', { className: 'controlContainer' }, controlArray);
        
        //topnav container
        let _e = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, _a, _b, _d);

        return _e;

	};
};
