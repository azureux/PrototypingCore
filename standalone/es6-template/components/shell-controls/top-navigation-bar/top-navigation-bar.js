/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
// "TopNavigationBar" control
"use strict";
class TopNavigationBar extends React.Component
{
    constructor(props)
    {
        super(props);
		this.ID = "top-nav-panel";
		this.Title = "Project Acuity";	//Top Navigation Bar";
        this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = "top-nav-panel-css";
        this.CssFile = "components/shell-controls/top-navigation-bar/top-navigation-bar.css";
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
        if (props.Application.props.TopNavigationBar.Title !== undefined) {
            this.Title = props.Application.props.TopNavigationBar.Title;
        }

		// preview banner
		this.Banner = React.createElement("div", { id: this.ID, className: this.Theme + " banner-panel",  key: Utilities.NewId() }, "preview");

        //App title (Azure)
        this.BrandTitle = React.createElement("a", { id: this.ID, className: this.Theme + " brand-title-panel", href: "https://portal.azure.com/", key: Utilities.NewId() }, `${this.Title}`);

		// search
		this.Search = React.createElement( "div", { id: "global-search", className: this.Theme + " global-search-panel", key: Utilities.NewId() }, "global search" );

		// portal buttons and button bar
        let _notiifications_btn = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Notifications', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });
        let _powershell_btn = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Cloud Shell', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Console, key: Utilities.NewId() });
        let _portal_settings_btn = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Settings', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });
        let _portal_feedback_btn = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Feedback', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Help, key: Utilities.NewId() });
        let _portal_help_btn = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Help', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.SubscriptionsAndDirectories, key: Utilities.NewId() });
        let _portal_switcher_btn = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Directory and Subscription folder', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });

		this.ShellControls = React.createElement( 'div', { className:  this.Theme + " shell-ctrls-panel", key: Utilities.NewId() },
			[
				_notiifications_btn,
				_powershell_btn,
				_portal_settings_btn,
				_portal_feedback_btn,
				_portal_help_btn,
				_portal_switcher_btn]
		);

		// user switcher
        this.UserCtrl = React.createElement(UserAccountSwitcher, { Application: this.props, key: Utilities.NewId()  });
		this.UserCtrlPanel = React.createElement("div", { id: "user-switcher-panel-id", className:  this.Theme + " user-switcher-panel",  key: Utilities.NewId() }, this.UserCtrl);

		Utilities.InjectControlCss( this.CssFileID, this.CssFile );
        return;
	};
	render() 
	{	//	console.debug( "TopNavigationBar.render()", this.props );
		let _ctrls = [
			this.Banner,
			this.BrandTitle,
			this.Search,
            this.ShellControls,
            this.UserCtrlPanel,
        ];
        
        let _e = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, _ctrls);
        return _e;
    };
};
