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
        this.ID = Utilities.NewId("tnb");
        this.Title = "Top Navigation Bar";
        this.Theme = props.Application.state.CurrentTheme;
        this.CssFileID = this.ID;
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


        //App title (Azure)
        this.BrandTitle = React.createElement('div', { id: this.ID, className: 'appTitle', key: Utilities.NewId() }, `${this.Title}`);

        //btn ctrls
        //let _c1 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Notifications', buttonText: 'Jackie\'s Button', Application: this.props, svgIcon: SVG.Shell.Notification });
        let _c1 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Notifications', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });
        let _c2 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Cloud Shell', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Console, key: Utilities.NewId() });
        let _c3 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Settings', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });
        let _c4 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Feedback', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Help, key: Utilities.NewId() });
        let _c5 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Help', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.SubscriptionsAndDirectories, key: Utilities.NewId() });
        let _c6 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Directory and Subscription folder', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });

        //control container 
        let controlArray = [_c1, _c2, _c3, _c4, _c5, _c6];
        this.ShellControls = React.createElement('div', { className: 'controlContainer', key: Utilities.NewId() }, controlArray);
        this.MeCtrlDropDown = React.createElement(ContainerControl, { className: 'ContainerControl', key: Utilities.NewId(), Application: this.props.Application });

        this.UserAccountSwitcherCtrl = React.createElement(UserAccountSwitcher, { className: 'MeControl', Application: this.props.Application, key: Utilities.NewId() });

        return;
    };


    render() {	//	console.debug( "TopNavigationBar.render()", this.props );
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);

        function createMarkup(svgIcon) {
            return { __html: svgIcon };
        };

        //references
        //buttonText: 'Jackie\'s Button'
        //React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: createMarkup(_notif) });
        //React.createElement(ButtonCtrl, { className: 'icon', attributeTitle: 'Jackie\'s title attribute', buttonText: 'Jackie\'s Button', Application: this.props, dangerouslySetInnerHTML: createMarkup(_plus) });

        let _ctrls = [
            this.BrandTitle,
            this.ShellControls,
            this.UserAccountSwitcherCtrl,
            this.MeCtrlDropDown
        ];
        
        //topnav container
        let _e = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass, key: Utilities.NewId() }, _ctrls);
        return _e;
    };
};
