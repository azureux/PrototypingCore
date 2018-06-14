
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// <reference path="../js/utilities.js" />
"use strict";

//top right button, does not include drop down. Just provides event to open it. 
class UserAccountSwitcher extends React.Component {
    constructor(props) {
        super(props);

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
            Normal: this.Theme + " " + this.UserAccountStyle,
            Alerted: this.Theme + " RootLinkCssExtra " + this.UserAccountStyle,
        };
        this.ContainerCssClass = {
            Displayed: this.Theme + " ContainerDisplayed",
            Hidden: this.Theme + " ContainerHidden",
        };

        this.handleToggleClick = this.OnClick_ToggleMeControl.bind(this);

        this.state = {
            items: [],
            inner_text: this.props.InnerText,
            prev_text: this.props.InnerText,
            isClicked: false,
            currentCssClass: this.CssClassNames.Normal,
            currentContainerCssClass: this.ContainerCssClass.Hidden,
            AltTextTitle: this.props.attributeTitle,
            isHidden: false
        };

        let _1 = React.createElement("div", { className: 'user-name', key: Utilities.NewId() }, "Jackie Gaherity");
        let _2 = React.createElement("div", { className: 'user-company', key: Utilities.NewId }, "Microsoft");
        let _3 = React.createElement("div", { className: 'user-page-title', key: Utilities.NewId() }, _1, _2);
        let _4 = React.createElement("div", { className: 'user-img', key: Utilities.NewId(), dangerouslySetInnerHTML: this.createMarkup(SVG.Person.SVG) });
        this.UserButton = React.createElement("div", { className: 'me-control-btn', key: Utilities.NewId(),}, _3, _4);

        return;
    };

    createMarkup(svgIcon) {
        return { __html: svgIcon }
    };

    OnClick_ToggleMeControl(ev) {	
     
        ev.preventDefault();
        ev.stopPropagation();

        console.debug(this.state.isHidden, this._5);

        if (this.state.isHidden == true)
        {
            this.setState({ isHidden: false });
            this.setState({ ContainerCssClass: this.ContainerCssClass.Displayed });
        }
        else if (this.state.isHidden == false) {
            this.setState({ isHidden: true });
            this.setState({ ContainerCssClass: this.ContainerCssClass.Hidden });
        }
        return;    
    };

    render() {
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);

        this._5 = React.createElement(ContainerControl, { IsDisplayed: this.state.isHidden, className: 'drop-down', key: Utilities.NewId, Application: this.props }, "test");
        return React.createElement('div', {
            //id: Utilities.NewId("useraccount"),
            className: this.state.currentCssClass,
            key: Utilities.NewId(),
            onClick: this.handleToggleClick
        }, this.UserButton, this._5);
    };
};
