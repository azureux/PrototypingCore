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
		this.ID = "vert-nav-panel";
		this.Title = "Dashboard";
		this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = "vert-nav-panel-css";
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

        //individual extensions 
        //let _a = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, );
        let _1 = React.createElement(ButtonCtrl, { className: 'extension minimize', attributeTitle: 'New', buttonText: ' ', Application: this.props, svgIcon: SVG.DoubleChevronLeft, key: Utilities.NewId() });
        let _a = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'New', buttonText: 'New', Application: this.props, svgIcon: SVG.Color.NewPlusSign, key: Utilities.NewId() });
        let _b = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Dashboard', buttonText: 'Dashboard', Application: this.props, svgIcon: SVG.Color.Dashboard, key: Utilities.NewId() });
        let _c = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Resource groups', buttonText: 'Resource groups', Application: this.props, svgIcon: SVG.Color.ResourceGroup, key: Utilities.NewId() });
        let _d = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'App Services', buttonText: 'App Services', Application: this.props, svgIcon: SVG.Color.Websites, key: Utilities.NewId() });
        let _e = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Function Apps', buttonText: 'Function Apps', Application: this.props, svgIcon: SVG.Color.Functions, key: Utilities.NewId() });
        let _f = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Databases', buttonText: 'Databases', Application: this.props, svgIcon: SVG.Color.SQLDatabases, key: Utilities.NewId() });
        let _g = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Azure Cosmos DB', buttonText: 'Azure Cosmos DB', Application: this.props, svgIcon: SVG.Color.CosmosDB, key: Utilities.NewId() });
        let _h = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Virtual Machines', buttonText: 'Virtual Machines', Application: this.props, svgIcon: SVG.Color.VirtualMachines, key: Utilities.NewId() });
        let _i = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Load Balancer', buttonText: 'Load Balancer', Application: this.props, svgIcon: SVG.Color.LoadBalancer, key: Utilities.NewId() });
        let _j = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Storage Account', buttonText: 'Storage Account', Application: this.props, svgIcon: SVG.Color.Storage, key: Utilities.NewId() });
        let _k = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Virtual Network', buttonText: 'Virtual Network', Application: this.props, svgIcon: SVG.Color.VirtualNetworks, key: Utilities.NewId() });
        let _l = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Azure Active Directory', buttonText: 'Azure Active Directory', Application: this.props, svgIcon: SVG.Color.ActiveDirectory, key: Utilities.NewId() });
        let _m = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Advisor', buttonText: 'Advisor', Application: this.props, svgIcon: SVG.Color.Advisor, key: Utilities.NewId() });
        let _n = React.createElement(ButtonCtrl, { className: 'extension', attributeTitle: 'Security Center', buttonText: 'Security Center', Application: this.props, svgIcon: SVG.Color.SecurityCenter, key: Utilities.NewId() });

        let extensionsArray = [_1, _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n];
        //left nav container for all extensions 
        this.vertnavbar = React.createElement('div', { id: this.ID, className: this.state.CurrentCssClass }, extensionsArray ); // `${this.Title}`

		if ( this.props.Application.props.VerticalNavigationBar.Title !== undefined )
		{
			this.Title = this.props.Application.props.VerticalNavigationBar.Title;
        }

		Utilities.InjectControlCss( this.CssFileID, this.CssFile );
		return;
    };
	render()
	{	//	console.debug( "VerticalNavigationBar.render()", this.props );
        return this.vertnavbar;
	};
};
