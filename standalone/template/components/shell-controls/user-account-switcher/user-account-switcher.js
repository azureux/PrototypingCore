/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// <reference path="../js/utilities.js" />
/// top right button, does not include drop down. Just provides event to open it. 
"use strict";

import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as AzureSvgs } from "../../../js/svg-assets.js";
import { ButtonControl as BtnCtrl } from "../../standard-controls/button/button.js";

export class UserAccountSwitcher extends React.Component
{
	constructor( props )
	{	//	console.debug( "UserAccountSwitcher.props", props.IsOpen );
        super(props);

        //properties
		this.ID = this.props.id;

        this.CssFileID = "useraccount-css"; //Utilities.NewId("useraccount-css");
		this.CssFile = "components/shell-controls/user-account-switcher/user-account-switcher.css";

		this.Application = this.props.Application;
		this.Theme = "";// this.Application.Application.Theme;
		this.Title = "Me Control";
        this.SvgIcon = this.props.svgIcon || undefined;
        this.UserAccountStyle = this.props.className;

        this.CssClassNames = {
            Normal: this.Theme + " user-switcher " + this.UserAccountStyle,
            Alerted: this.Theme + " user-switcher-alerted " + this.UserAccountStyle,
        };
        this.ContainerCssClass = {
            Displayed: this.Theme + " me-control-container ContainerDisplayed",
            Hidden: this.Theme + " me-control-container ContainerHidden",
		};
		this.CurrentPanelCss = this.ContainerCssClass.Hidden;

        this.state = {
            currentCssClass: this.CssClassNames.Normal,
            currentContainerCssClass: this.ContainerCssClass.Hidden,
            AltTextTitle: this.props.attributeTitle,
            isHidden: this.props.IsOpen
		};

		// event handlers
		this.handleClick = this.OnClick_HideShowPanel.bind( this );

		// top button
		let _user_name = React.createElement( "div", { className: 'user-name', key: Utils.NewId() }, "Jackie Gaherity" );
		let _user_company = React.createElement( "div", { className: 'user-company', key: Utils.NewId }, "Microsoft" );
		let _user_info = React.createElement( "div", { className: 'user-page-title', key: Utils.NewId() }, [_user_name, _user_company] );
		let _user_avatar = React.createElement( "div", { className: 'user-img', key: Utils.NewId(), dangerouslySetInnerHTML: Utils.CreateSvgMarkup( AzureSvgs.Person.SVG ) } );
		this.UserButton = React.createElement( "div",
			{
				key: Utils.NewId(),
				className: 'me-control-btn',
				onClick: this.handleClick
			}, [_user_info, _user_avatar] );

		Utils.InjectControlCss( this.CssFileID, this.CssFile );
        return;
	};
	OnClick_HideShowPanel( ev )
	{	//	console.debug( "UserAccountSwitcher::OnClick_HideShowPanel" );
		//	console.debug( "UserAccountSwitcher::OnClick_HideShowPanel::this.state.isHidden::", this.state.isHidden );
		//	console.debug( "OnClick_HideShowPanel::this.state.currentContainerCssClass::", this.state.currentContainerCssClass );

		if ( this.state.isHidden == true )
        {
			this.setState( { isHidden: false } );
			this.CurrentPanelCss = this.Theme + " " + this.ContainerCssClass.Hidden;
        }
		else if ( this.state.isHidden == false )
		{
			this.setState( { isHidden: true } );
			this.CurrentPanelCss = this.Theme + " " + this.ContainerCssClass.Displayed;
		}

		ev.preventDefault();
		ev.stopPropagation();
		//	HideShowPanel( ev );
        return;    
	};
	render()
	{
        // drop down container
        let _a = React.createElement(BtnCtrl, { className: 'mecontrol-topnav', attributeTitle: 'Sign In', Application: this.props, svgIcon: AzureSvgs.PersonAdd, key: Utils.NewId(), buttonText: 'Sign In', });
        let _b = React.createElement(BtnCtrl, { className: 'mecontrol-topnav', attributeTitle: 'Microsoft ', Application: this.props, svgIcon: AzureSvgs.Shell.MicrosoftLogo, key: Utils.NewId(), buttonText: 'Microsoft', });
        let _c = React.createElement(BtnCtrl, { className: 'mecontrol-topnav', attributeTitle: 'Sign Out', Application: this.props, svgIcon: AzureSvgs.Release, key: Utils.NewId(), buttonText: 'Sign Out' });
        let cntrlArray = [_a, _b, _c];

		let _d = React.createElement( "div", { className: 'top-controls-container', key: Utils.NewId() }, cntrlArray );
		let _left = React.createElement( "div", { className: 'left', key: Utils.NewId(), dangerouslySetInnerHTML: Utils.CreateSvgMarkup( AzureSvgs.Person.SVG ) } );

		let _7a = React.createElement( "div", { className: 'current-user-title', key: Utils.NewId(), }, "John Vanerbloom" );
		let _7b = React.createElement( "div", { className: 'current-user-email', key: Utils.NewId() }, "john123@outlook.com" );
		let _7c = React.createElement( "div", { className: 'view-ms-acct', key: Utils.NewId() }, "View Microsoft Account" );
		let _7d = React.createElement( "div", { className: 'change-info', key: Utils.NewId() }, "Change contact info" );
		let currentUserArray = [_7a, _7b, _7c, _7d];

		let _middle = React.createElement( "div", { className: 'middle', key: Utils.NewId() }, currentUserArray );
		let _8a = React.createElement( BtnCtrl, { className: '', Application: this.props, buttonText: ' ', svgIcon: AzureSvgs.Ellipsis, } );

		let _right = React.createElement( "div", { className: 'right', key: Utils.NewId() }, _8a );
		let _e = React.createElement( "div", { className: 'current-user', key: Utils.NewId() }, _left, _middle, _right );

		let _image1 = React.createElement( "div", { className: 'img', key: Utils.NewId(), dangerouslySetInnerHTML: Utils.CreateSvgMarkup( AzureSvgs.Person.SVG ) } );
		let _image2 = React.createElement( "div", { className: 'img', key: Utils.NewId(), dangerouslySetInnerHTML: Utils.CreateSvgMarkup( AzureSvgs.Person.SVG ) } );
		let _image3 = React.createElement( "div", { className: 'img', key: Utils.NewId(), dangerouslySetInnerHTML: Utils.CreateSvgMarkup( AzureSvgs.Person.SVG ) } );
	
		let _9a = React.createElement( "div", { className: 'left', key: Utils.NewId() }, _image1 );
		let _9b = React.createElement( "div", { className: 'left', key: Utils.NewId() }, _image2 );
		let _9c = React.createElement( "div", { className: 'left', key: Utils.NewId() }, _image3 );
		let _9d = React.createElement( "span", { className: 'company', key: Utils.NewId() }, "Contoso" );
		let _9e = React.createElement( "span", { className: 'company', key: Utils.NewId() }, "Fabrikam" );
		let _9f = React.createElement( "span", { className: 'company', key: Utils.NewId() }, "Jonathon Vanderbloom" );
		let _9g = React.createElement( "span", { className: 'acct-email', key: Utils.NewId() }, "johnvan@contoso.com" );
		let _9h = React.createElement( "span", { className: 'acct-email', key: Utils.NewId() }, "johnvan@Fabrikam.com" );
		let _9i = React.createElement( "span", { className: 'acct-email', key: Utils.NewId() }, "johnvan12@live.com" );
		let _9j = React.createElement( "div", { className: 'right', key: Utils.NewId() }, _9d, _9g );
		let _9k = React.createElement( "div", { className: 'right', key: Utils.NewId() }, _9e, _9h );
		let _9l = React.createElement( "div", { className: 'right', key: Utils.NewId() }, _9f, _9i );	
		let _f = React.createElement( "div", { className: 'user', key: Utils.NewId() }, _9a, _9j );
		let _g = React.createElement( "div", { className: 'user', key: Utils.NewId() }, _9b, _9k );
		let _h = React.createElement( "div", { className: 'user', key: Utils.NewId() }, _9c, _9l );
	
		let userArray = [_f, _g, _h];
		let _i = React.createElement( "div", { className: 'potential-logins', key: Utils.NewId() }, userArray );

		//	console.debug( "this.state.isHidden::", this.state.isHidden );
		if ( this.state.isHidden == true )
        {
			this.CurrentPanelCss = this.Theme + " " + this.ContainerCssClass.Displayed;
        }
		else if ( this.state.isHidden == false )
		{
			this.CurrentPanelCss = this.Theme + " " + this.ContainerCssClass.Hidden;
		}
		//	console.debug( "this.CurrentPanelCss", this.CurrentPanelCss);

		this.UserContainer = React.createElement( "div", { className: this.CurrentPanelCss, key: Utils.NewId() }, _d, _e, _i );	
		return React.createElement( 'div', { id: "container-ctrl", className: "container-ctrl" }, [this.UserButton, this.UserContainer] );
	};
};
