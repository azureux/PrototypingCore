
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// <reference path="../js/utilities.js" />
"use strict";

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
            Normal: this.Theme + " UserAccount " + this.UserAccountStyle,
            Alerted: this.Theme + " RootLinkCssExtra " + this.UserAccountStyle,
        };
        this.ContainerCssClass = {
            Displayed: this.Theme + " ContainerDisplayed",
            Hidden: this.Theme + " ContainerHidden",
        };
        // event handlers
        this.handleToggleClick = this.OnClick_ToggleMeControl.bind(this);

        this.state = {
            items: [],
            inner_text: this.props.InnerText,
            prev_text: this.props.InnerText,
            isClicked: false,
            currentCssClass: this.CssClassNames.Normal,
            currentContainerCssClass: this.ContainerCssClass.Hidden,
            AltTextTitle: this.props.attributeTitle,
            isHidden: true
        };

        //top button
        let _1 = React.createElement("div", { className: 'user-name', key: Utilities.NewId() }, "Jackie Gaherity");
        let _2 = React.createElement("div", { className: 'user-company', key: Utilities.NewId }, "Microsoft");
        let _3 = React.createElement("div", { className: 'credentials-container', key: Utilities.NewId() }, _1, _2);
        let _4 = React.createElement("div", { className: 'user-img', key: Utilities.NewId(), dangerouslySetInnerHTML: this.createMarkup(SVG.Person.SVG) }); // , svgIcon: SVG.Shell.Notification, this.SvgIcon.SVG
        this.UserButton = React.createElement("div", { className: 'me-control-btn', key: Utilities.NewId(), onClick: this.handleToggleClick }, _3, _4);

        // container
        let _a = React.createElement(ButtonCtrl, { className: 'mecontrol-topnav', attributeTitle: 'Sign In', Application: this.props, svgIcon: SVG.PersonAdd, key: Utilities.NewId(), buttonText: 'Sign In', });
        let _b = React.createElement(ButtonCtrl, { className: 'mecontrol-topnav', attributeTitle: 'Microsoft ', Application: this.props, svgIcon: SVG.Shell.MicrosoftLogo, key: Utilities.NewId(), buttonText: 'Microsoft', });
        let _c = React.createElement(ButtonCtrl, { className: 'mecontrol-topnav', attributeTitle: 'Sign Out', Application: this.props, svgIcon: SVG.Release, key: Utilities.NewId(), buttonText: 'Sign Out' });
        var cntrlArray = [_a, _b, _c];

        this._d = React.createElement("div", { className: 'top-controls-container', key: Utilities.NewId() }, cntrlArray);
        let _left = React.createElement("div", { className: 'left', key: Utilities.NewId(), dangerouslySetInnerHTML: this.createMarkup(SVG.Person.SVG) });

        let _7a = React.createElement("div", { className: 'current-user-title', key: Utilities.NewId(), }, "John Vanerbloom");
        let _7b = React.createElement("div", { className: 'current-user-email', key: Utilities.NewId() }, "john123@outlook.com");
        let _7c = React.createElement("div", { className: 'view-ms-acct', key: Utilities.NewId() }, "View Microsoft Account");
        let _7d = React.createElement("div", { className: 'change-info', key: Utilities.NewId() }, "Change contact info");
        var currentUserArray = [_7a, _7b, _7c, _7d];
        let _middle = React.createElement("div", { className: 'middle', key: Utilities.NewId() }, currentUserArray);

        let _8a = React.createElement(ButtonCtrl, { className: '', Application: this.props, buttonText: ' ', svgIcon: SVG.Ellipsis, }, );
        let _right = React.createElement("div", { className: 'right', key: Utilities.NewId() }, _8a);
        this._e = React.createElement("div", { className: 'current-user', key: Utilities.NewId() }, _left, _middle, _right);


        let _image1 = React.createElement("div", { className: 'img', key: Utilities.NewId(), dangerouslySetInnerHTML: this.createMarkup(SVG.Person.SVG) });
        let _image2 = React.createElement("div", { className: 'img', key: Utilities.NewId(), dangerouslySetInnerHTML: this.createMarkup(SVG.Person.SVG) });
        let _image3 = React.createElement("div", { className: 'img', key: Utilities.NewId(), dangerouslySetInnerHTML: this.createMarkup(SVG.Person.SVG) });


        let _9a = React.createElement("div", { className: 'left', key: Utilities.NewId() }, _image1);
        let _9b = React.createElement("div", { className: 'left', key: Utilities.NewId() }, _image2);
        let _9c = React.createElement("div", { className: 'left', key: Utilities.NewId() }, _image3);

        let _9d = React.createElement("span", { className: 'company', key: Utilities.NewId() }, "Contoso");
        let _9e = React.createElement("span", { className: 'company', key: Utilities.NewId() }, "Fabrikam");
        let _9f = React.createElement("span", { className: 'company', key: Utilities.NewId() }, "Jonathon Vanderbloom");
        let _9g = React.createElement("span", { className: 'acct-email', key: Utilities.NewId() }, "johnvan@contoso.com");
        let _9h = React.createElement("span", { className: 'acct-email', key: Utilities.NewId() }, "johnvan@Fabrikam.com");
        let _9i = React.createElement("span", { className: 'acct-email', key: Utilities.NewId() }, "johnvan12@live.com");
        let _9j = React.createElement("div", { className: 'right', key: Utilities.NewId() }, _9d, _9g);
        let _9k = React.createElement("div", { className: 'right', key: Utilities.NewId() }, _9e, _9h);
        let _9l = React.createElement("div", { className: 'right', key: Utilities.NewId() }, _9f, _9i);
        let _f = React.createElement("div", { className: 'user', key: Utilities.NewId() }, _9a, _9j);
        let _g = React.createElement("div", { className: 'user', key: Utilities.NewId() }, _9b, _9k);
        let _h = React.createElement("div", { className: 'user', key: Utilities.NewId() }, _9c, _9l);
        var userArray = [_f, _g, _h];
        this._i = React.createElement("div", { className: 'potential-logins', key: Utilities.NewId() }, userArray);

        //  console.debug(this.state.currentContainerCssClass);
        this.UserContainer = React.createElement("div", { className: 'me-control-container ' + this.state.currentContainerCssClass, key: Utilities.NewId() }, this._d, this._e, this._i);

        this.finalArray = [this.UserButton, this.UserContainer]
        //this.UserButton, this.UserContainer

        return;
    };

    createMarkup(svgIcon) {
        return { __html: svgIcon }
    };

    OnClick_ToggleMeControl(ev) {	
     
        ev.preventDefault();
        ev.stopPropagation();
        //  let _changed = Utilities.ReverseString(this.state.prev_text);
        //  console.debug(this.UserContainer, this.state.isHidden);

        if (this.state.isHidden == true) {
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
        //	console.debug( "TopNavigationBar.render()", this.props );
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);

        //console.debug("useraccount", this.props, typeof Shell);
        return React.createElement('div', {
            id: Utilities.NewId("useraccount"),
            className: this.state.currentCssClass,
            key: Utilities.NewId()
        }, this.finalArray);
    };
};
