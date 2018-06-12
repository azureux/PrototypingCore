/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
// "TopNavigationBar" control
"use strict";
class TopNavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.ID = Utilities.NewId("tnb");
        this.Title = "Top Navigation Bar";
        this.Theme = props.Application.state.CurrentTheme;
        this.CssFileID = Utilities.NewId("tnb-css");
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

        //App title (Azure)
        let _a = React.createElement('div', { id: this.ID, className: 'appTitle', key: Utilities.NewId() }, `${this.Title}`);

        //button
        let _b = React.createElement(ButtonCtrl, { className: 'Jackie', Application: this.props }); //(ButtonCtrl, {}, undefined) 

        //btn ctrls
        //let _c1 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Notifications', buttonText: 'Jackie\'s Button', Application: this.props, svgIcon: SVG.Shell.Notification });
        let _c1 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Notifications', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });
        let _c2 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Cloud Shell', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Console, key: Utilities.NewId() });
        let _c3 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Settings', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });
        let _c4 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Feedback', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Help, key: Utilities.NewId() });
        let _c5 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Help', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.SubscriptionsAndDirectories, key: Utilities.NewId() });
        let _c6 = React.createElement(ButtonCtrl, { className: 'TopNavBtn', attributeTitle: 'Directory and Subscription folder', buttonText: ' ', Application: this.props, svgIcon: SVG.Shell.Notification, key: Utilities.NewId() });

        //control container 
        var controlArray = [_c1, _c2, _c3, _c4, _c5, _c6];
        let _d = React.createElement('div', { className: 'controlContainer', key: Utilities.NewId() }, controlArray);

        let _x = React.createElement(UserAccountSwitcher, { className: 'MeControl', Application: this.props.Application, key: Utilities.NewId() });

        //topnav container
        let _e = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass, key: Utilities.NewId() }, _a, _b, _d, _x);

        return _e;
    };
};
