﻿
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// <reference path="../js/utilities.js" />
"use strict";

class UserAccountSwitcher extends React.Component
{
	constructor( props )
	{
		super( props );
        
        //properties
        this.ID = this.props.id;
        this.Application = this.props.Application;
        this.Title = "Me Control";
        this.Theme = this.props.Application.state.CurrentTheme;
        this.SvgIcon = this.props.svgIcon || undefined;
        this.UserAccountStyle = this.props.className;
        this.CssFileID = "useraccount-css"; //Utilities.NewId("useraccount-css");
        this.CssFile = "components/shell-controls/user-account-switcher/user-account-switcher.css";
        this.CssClassNames = {
            Normal: this.Theme + " UserAccount " + this.UserAccountStyle,
            Alerted: this.Theme + " RootLinkCssExtra " + this.UserAccountStyle,
        };
        
		this.state = {};
		this.CssClassNames = {
			Normal: "UserAccount",
			Alerted: "UserAccountExtra"
        };

        this.state = {
            items: [],
            inner_text: this.props.InnerText,
            prev_text: this.props.InnerText,
            isClicked: false,
            currentCssClass: this.CssClassNames.Normal,
            AltTextTitle: this.props.attributeTitle
        };
		return;
    };

    createMarkup(svgIcon) {
        return { __html: svgIcon }
    };

	render()
    {
        //	console.debug( "TopNavigationBar.render()", this.props );
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);

        //function createMarkup(svgIcon) {
        //    return { __html: svgIcon };
        //};
        //let _c1 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Notifications', buttonText: 'Jackie\'s Button', Application: this.props, svgIcon: SVG.Shell.Notification });


        let _1 = React.createElement("div", { className: 'user-name', key: Utilities.NewId()}, "Jackie Gaherity");
        let _2 = React.createElement("div", { className: 'user-company', key: Utilities.NewId }, "Microsoft");
        let _3 = React.createElement("div", { className: 'credentials-container', key: Utilities.NewId()}, _1, _2 );
        let _4 = React.createElement("div", { className: 'user-img', key: Utilities.NewId(), dangerouslySetInnerHTML: this.createMarkup(SVG.Shell.Notification.SVG) }  ); // , svgIcon: SVG.Shell.Notification, this.SvgIcon.SVG

        let _5 = React.createElement("div", { className: 'me-control-btn', key: Utilities.NewId()}, _3, _4); //4

        
        let _a = React.createElement(ButtonCtrl, { className: 'sign-in', Application: this.props });
        let _b = React.createElement(ButtonCtrl, { className: 'microsoft', Application: this.props });
        let _c = React.createElement(ButtonCtrl, { className: 'sign-out', Application: this.props });
        var cntrlArray = [_a, _b, _c];

        let _d = React.createElement("div", { className: 'top-controls-container', key: Utilities.NewId()}, cntrlArray );
        let _e = React.createElement("div", { className: 'current-user', key: Utilities.NewId()});

        let _f = React.createElement(ButtonCtrl, { className: 'user1' });
        let _g = React.createElement(ButtonCtrl, { className: 'user2' });
        let _h = React.createElement(ButtonCtrl, { className: 'user3' }); 

        var userArray = [_f, _g, _h];
        let _i = React.createElement("div", { className: 'potential-logins', key: Utilities.NewId() });


        let _x = React.createElement("div", { className: 'me-control-container', key: Utilities.NewId() }, _d, _e, _i);
        //let _y = React.createElement("div", { className: 'user-acct-container', key: Utilities.NewId() }, );


        console.debug( "useraccount", this.props, typeof Shell );
		return React.createElement( 'div', {
            id: Utilities.NewId("useraccount"),
            className: this.state.currentCssClass,
            key: Utilities.NewId()
        }, _5, _x );
	};
};
