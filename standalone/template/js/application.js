/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
///	"MAIN" application

"use strict";
class Application extends React.Component
{
	constructor( props )
	{
		super( props );
		// properties
		this.ID = Utilities.NewId( "cds-app" );
        this.Theme = "default-theme";
		this.state = {
			CurrentUser: {},
			CurrentExtension: {},
			CurrentTheme: this.Theme,
			CurrentThemeName: this.Theme,
			VerticalNavigationIsOpen: ( this.props.VerticalNavigationBar.IsCollapsed || false)
		};
		this.Data = [];
		this.Notifications = [];
		this.Configuration = props;
		this.DebugMessage = this.props.VerticalNavigationBar.Title + " : " +  this.props.VerticalNavigationBar.IsCollapsed;

		// event handlers
		this.handleClick = this.OnClick_HandleBodyElementClick.bind( this );
		this.handle_OnClick_ToggleThemes = this.OnClick_ToggleThemes.bind( this );
		this.Handle_CurrentExtension = this.OnClick_VerticalNavigation_SelectNavigationItem.bind( this );
		// set overrides
		if ( this.props.Application.Theme !== undefined )
		{
			this.Theme = this.props.Application.Theme;
		}

		return;
	};

	// app level menthods
	// event handlers
	//OnClick_OpenClose_LeftNav( ev )
	//{
	//	console.debug( "App::OnClick_OpenClose_LeftNav", ev );
	//	return;
	//};
	// toggle themes, just for an example of how to
	OnClick_ToggleThemes( ev )
	{
		ev.preventDefault();
		ev.stopPropagation();
		//	console.debug( "OnClick_ToggleThemes", this.state );
		if ( this.state.CurrentTheme == "dark-theme" )
		{
            this.setState({ CurrentTheme: "default-theme" } );
            this.setState({ CurrentThemeName: "default-theme" } );
		}
        else if (this.state.CurrentTheme == "default-theme" )
		{
            this.setState({ CurrentTheme: "dark-theme" } );
            this.setState({ CurrentThemeName: "dark-theme" } );
		}
		//	console.debug( "OnClick_ToggleThemes", this.state );
		return;
	};

	OnClick_HandleBodyElementClick( ev )
	{	//	
		//  console.debug( "Application::OnClick_HandleBodyElementClick", ev, this.props, this.state );
        console.debug("Application::OnClick_HandleBodyElementClick", this.TopNav);
        this.setState({ CurrentUser: [] });
		ev.preventDefault();
		ev.stopPropagation();
		return;
	};

	OnClick_VerticalNavigation_SelectNavigationItem(extension)
	{
		console.debug( "HACK: Application.OnClick_VerticalNavigation_SelectNavigationItem: RESET TO ONLY THE CURRENTLY SELECTED NAV ITEM/EXTENSION. ALSO CALL THE CHAINED EVENT FROM THE APPPLICATION LEVEL", extension);
		return;
	};

	//  React.createElement() params
	//	1. output html element type
	//	2. output html element attributes
	//	3. array of child controls
	render()
	{	//	console.debug( "Application::render", this.state, this.props );
		console.debug( "Application::NavExpanded: this.state.VerticalNavigationIsOpen", this.state.VerticalNavigationIsOpen );
		// layout contruction
		this.TopNav = React.createElement( TopNavigationBar, { key: Utilities.NewKey(), Application: this } );

		this.LeftNav = React.createElement( VerticalNavigationBar, { key: Utilities.NewKey(), Application: this, NavExpanded: this.state.VerticalNavigationIsOpen, ExtensionHandler: this.Handle_CurrentExtension } );

		this.Dashboard = React.createElement( Dashboard, { key: Utilities.NewKey(), Application: this, NavExpanded: this.state.VerticalNavigationIsOpen } );

		this.ContextPanel = React.createElement( ContextPanel, { key: Utilities.NewKey(), Application: this } );
		this.ThemeButton = React.createElement( "button", { key: Utilities.NewKey(), id: "tog-switch", onClick: this.handle_OnClick_ToggleThemes, className: "myBtn theme"}, this.state.CurrentThemeName );

		this.Layout = [
			this.TopNav,
			this.LeftNav,
			this.Dashboard,
			this.ContextPanel,
			this.ThemeButton
		];

		let _app = React.createElement( "div",
			{
				id: this.ID,
				className: this.state.CurrentTheme + " cds-react-app",
                //	onClick: this.handleClick,
                key: Utilities.NewId()
			},
			this.Layout
		);
		return _app;
	};
};