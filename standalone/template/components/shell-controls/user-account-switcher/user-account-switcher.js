
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// <reference path="../js/utilities.js" />
"use strict";

// "Shell" control
//	1. constructor() & other React specific methods (if needed)
//	2. event handlers & other functions
//	3. render()
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
        this.UserAccountStyle = this.props.className;
        this.CssFileID = "useraccount-css"; //Utilities.NewId("useraccount-css");
        this.CssFile = "components/shell-controls/user-account-switcher/user-account-switcher.css";
        this.CssClassNames = {
            //Normal: this.Theme + " UserAccount " + this.UserAccountStyle,
            //Alerted: this.Theme + " RootLinkCssExtra " + this.UserAccountStyle,
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
	render()
    {
        //	console.debug( "TopNavigationBar.render()", this.props );
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);

        console.debug( "useraccount", this.props, typeof Shell );
		return React.createElement( 'div', {
            id: Utilities.NewId("useraccount"),
            className: this.state.currentCssClass,
		},`DropDown` );
	};
};
