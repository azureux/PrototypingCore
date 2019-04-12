/// "TopNavigationBar" control
"use strict";

import { Utilities as Utils, DataEnums as Data } from "../../../js/utilities.js";
import { SVG as AzSvgs } from "../../../js/svg-assets.js";
import { UserAccountSwitcher as UAS } from "../../src/components/user-logon/user-logon.js";
import { ButtonControl as BtnCtrl } from "../../standard-controls/button/button.js";
import { SearchBox as SearchCtrl } from "../../standard-controls/search-box/search-box.js";

export class TopNavigationBar extends React.Component
{
	constructor( props )
	{	//	console.debug( "TopNavigationBar.props", props );
		super( props );

		this.ID = "top-nav-panel";
		this.Title = props.appTitle || "MICROSOFT 2020";
		this.Theme = "";	//props.Application.state.CurrentThemeName;
		this.CssFileID = "top-nav-panel-css";
        this.CssFile = "components/shell-controls/top-navigation-bar/top-navigation-bar.css";
        this.CssClassNames = {
            Normal: "topnav-main " + this.Theme,
            Dirty: "topnav-main-dirty " + this.Theme,
            Saved: "topnav-main-saved " + this.Theme,
		};

        this.state = {
            IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal,
        };

		// preview banner
		this.Banner = React.createElement("div", { id: this.ID, className: this.Theme + " banner-panel",  key: Utils.NewId() }, "Preview");

        //App title (Azure)
        this.BrandTitle = React.createElement("a", { id: this.ID, className: this.Theme + " brand-title-panel", /*href: "https://portal.azure.com/",*/ key: Utils.NewId() }, `${this.Title}`);

		// search
		const _test = Data.ResourceNames.data;
		const _data_set = Utils.GetData_SearchSamples();
		this.Search = React.createElement( SearchCtrl, { key: Utils.NewId(), HasResultsPanel: true, DataSet: _data_set } );

		// portal buttons and button bar
		let _powershell_btn = React.createElement( BtnCtrl, { className: 'TopNavBtn', attributeTitle: 'Cloud Shell', buttonText: ' ', Application: this.props, svgIcon: AzSvgs.Shell.Console, key: Utils.NewId() } );
		let _directory_switcher_btn = React.createElement( BtnCtrl, { className: 'TopNavBtn', attributeTitle: 'Directory and Subscription folder', buttonText: ' ', Application: this.props, svgIcon: AzSvgs.Shell.SubscriptionsAndDirectories, key: Utils.NewId() } );
		let _notifications_btn = React.createElement( BtnCtrl, { className: 'TopNavBtn', attributeTitle: 'Notifications', buttonText: ' ', Application: this.props, svgIcon: AzSvgs.Shell.Notification, key: Utils.NewId() } );
		let _portal_settings_btn = React.createElement( BtnCtrl, { className: 'TopNavBtn', attributeTitle: 'Settings', buttonText: ' ', Application: this.props, svgIcon: AzSvgs.Gear, key: Utils.NewId() } );
		let _portal_help_btn = React.createElement( BtnCtrl, { className: 'TopNavBtn', attributeTitle: 'Help', buttonText: ' ', Application: this.props, svgIcon: AzSvgs.Shell.Help, key: Utils.NewId() } );
		let _portal_feedback_btn = React.createElement( BtnCtrl, { className: 'TopNavBtn', attributeTitle: 'Feedback', buttonText: ' ', Application: this.props, svgIcon: AzSvgs.Shell.Feedback, key: Utils.NewId() } );

		this.ShellControls = React.createElement( 'div', { className:  this.Theme + " shell-ctrls-panel", key: Utils.NewId() },
			[
				_powershell_btn,
				_directory_switcher_btn,
				_notifications_btn,
				_portal_settings_btn,
				_portal_help_btn,
				_portal_feedback_btn,
			]
		);

		// user switcher
        this.UserCtrl = React.createElement( UAS, { state: props.stateTest, currentTheme: props.Application.state.CurrentThemeName, key: Utils.NewId(), IsOpen: this.props.userPanelState, attributeTitle: 'Testing User Account Control'  });
		this.UserCtrlPanel = React.createElement("div", { id: "user-switcher-panel-id", className:  this.Theme + " user-switcher-panel",  key: Utils.NewId() }, this.UserCtrl);

		this.ShellControls = [
			this.Banner,
			this.BrandTitle,
			this.Search,
            this.ShellControls,
            this.UserCtrlPanel,
        ];

		Utils.InjectControlCss( this.CssFileID, this.CssFile );
        return;
	};
	render() 
	{	//	console.debug( "TopNavigationBar.render()", this.props );       
        return React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, this.ShellControls);
    };
};
