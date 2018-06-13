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
        this.SvgIcon = this.props.svgIcon || undefined;
		this.CssFile = "components/shell-controls/vertical-navigation-bar/vertical-navigation-bar.css";
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

    createMarkup(svgIcon) {
        return { __html: svgIcon }
    };
	render()
	{	//	console.debug( "VerticalNavigationBar.render()", this.props );
		Utilities.InjectControlCss( this.CssFileID, this.CssFile );

		//return React.createElement( 'div', {
		//	id: this.ID,
		//	className: this.state.CurrentCssClass
  //       }, `${this.Title}`);
    

        let _a = React.createElement(ButtonCtrl, { className: 'Jackie', Application: this.props }); //(ButtonCtrl, {}, undefined) 
        let _b = React.createElement('div', { id: this.ID, className: 'appTitle' }, `${this.Title}`);
        let _c = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass, }, _a, _b); //dangerouslySetInnerHTML: this.createMarkup(SVG.Person.SVG)
        let _d = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, ); // `${this.Title}`

        return _d;
	};
};
