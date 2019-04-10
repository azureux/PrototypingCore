import React from 'react';
import { Utilities as Utils } from './js/utilities';
import { AzureLinks, FaveLinks } from './extensions/extensions-list.js';
import SearchBox from './components/search-box/search-box.js';
import LeftNav from './components/left-nav/left-nav.js';
import ButtonControl3 from './components/button/button3';
import SvgIcon from './components/svg-icons/svg-icon';

import logo from './css/logo.svg';
import './css/fonts.css';
import './css/index.css';
import './css/App.css';

//	import Button from './components/button/button2';
//	import { Button, ButtonAppearance } from "@microsoft/fast-components-react-msft";

export default class App extends React.Component
{
	constructor( props )
	{
		super( props );

		// default properties, needs more research
		App.defaultProps = {
			Application: this,
			ID: Utils.NewId( "cds-azure-proto-app" ),
			PreviewText: "Preview",
			PrototypeText: "Protoype",
			AppName: "Microsoft Azure Acuity",
			Theme: "default-theme",
			CurrentExtension: AzureLinks[1]
		};

		// state, hate it, but it seems to be useful to kick off a re-render
		this.state = {
			AllFlyoutsClosed: true,
			ExtensionChanged: App.defaultProps.CurrentExtension.name
		};

		// props
		this.LeftNavOpen = true;
		this.MeControlOpen = false;
		this.SearchPanelOpen = false;
		this.ContextBladeOpen = false;
	
		// event handler bindings
		this.OnClick_ToggleMenus = this.ResetAllMenus.bind( this );

		// parsing paths for routing???
		this.BreadCrumbs = [];
		this.Extensions = [];
		this.CurrentLeftNavExtension = App.defaultProps.CurrentExtension;
		this.CurrentExtension = App.defaultProps.CurrentExtension;

		this.Handle_SelectExtension = this.OnClick_SelectExtension.bind( this );

		this.AppProcessRoutes();
		return;
	};
	//	1. Determine if the first path matches anything in the left nav.
	//	Last one in wins.
	//	Because the path array could be formed to include mutliple items in the left nav,
	//	and we want this to mimic standard path behavior, we are only looking at "_paths[0]"
	//	
	//	2. Anything that comes after "_path[0]" is will just define the breadcrumbs & flow
	AppProcessRoutes()
	{
		//	console.debug( "ProcessRoutes", Utils.ProcessRoutes() );
		let _paths = Utils.ProcessRoutes();

		if ( _paths[0] !== undefined )
		{
			let _found = undefined;
			AzureLinks.forEach( function ( v, i, a )
			{	//	console.debug( i, _paths[0], v.PropertyBag._path );
				if ( _paths[0] === v.PropertyBag._path )
				{
					_found = v;
				}
				return;
			} );

			FaveLinks.forEach( function ( v, i, a )
			{	//	console.debug( i, v.Title(), v.Path(), v.Selected );
				if ( _paths[0] === v.PropertyBag._path )
				{
					_found = v;
				}
				return;
			} );

			//	console.debug( "_found", _found.name, _found.PropertyBag );
			//	console.debug( "this.CurrentExtension", this.CurrentExtension.name );
			if ( _found !== undefined )
			{
				this.CurrentExtension = _found;
			}
		}

		this.CurrentExtension.PropertyBag._selected = true;
		//	console.debug( "this.CurrentExtension", this.CurrentExtension.name );
		//	console.debug( "this.CurrentExtension.PropertyBag", this.CurrentExtension.PropertyBag._selected);
		return;
	};
	ResolveConfig()
	{
		console.debug( "resolve config overrides, including theme changes" );
		return;
	};
	ResetAllMenus( pe )
	{	//	console.debug( "App.ResetAllMenus-1", this.LeftNavOpen );
		this.setState( { AllFlyoutsClosed: !this.state.AllFlyoutsClosed } );
		return;
	};
	OnClick_TestTopNavBar_ContextBlade( pe )
	{	console.debug( "OnClick_TestTopNavBar_ContextBlade, testing passing this as a prop" );
		return;
	};
	OnClick_LogoTestClick( pe )
	{
		console.debug( "OnClick_LogoTestClick. TESTING" );
		return;
	};

	ResetExtensionSelectionState()
	{
		AzureLinks.forEach( function ( v, i, a )
		{
			v.PropertyBag._selected = false;
			return;
		} );

		FaveLinks.forEach( function ( v, i, a )
		{
			v.PropertyBag._selected = false;
			return;
		} );

		return;
	};
	OnClick_SelectExtension(extension)
	{
		//console.debug( "extension", extension );
		//console.debug( "this.CurrentExtension", this.CurrentExtension );

		this.ResetExtensionSelectionState();
		if ( extension === this.CurrentExtension )
		{
			this.CurrentExtension = AzureLinks[1];
			this.CurrentExtension.PropertyBag._selected = true;
			this.setState( { ExtensionChanged: this.CurrentExtension.name } );
		}
		else
		{
			this.CurrentExtension = extension;
			this.CurrentExtension.PropertyBag._selected = true;
			this.setState( { ExtensionChanged: this.CurrentExtension.name } );
		}

		return;
	};
	render()
	{
		//console.debug( "App.render()",
		//	this.CurrentExtension.name,
		//	this.CurrentExtension.PropertyBag._selected
		//);
		//	FAST-DNA button
		//	<Button appearance={ButtonAppearance.primary} onClick={this.HandleClick}>Click me!</Button>
		//	console.debug( "App.Render()::this.CurrentExtension", this.CurrentExtension.Title(), this.CurrentExtension.Selected );
		//	{this.CurrentExtension !== undefined && <this.CurrentExtension {...this.CurrentExtension.PropertyBag()} />}
		//	<this.CurrentExtension {...this.CurrentExtension.PropertyBag()} />
		//	<div className={this.props.config.Debug === true ? 'preview-panel-2' : 'preview-panel'}>Prototype</div>
		return ( <div className="App">
			<header>
				<div className="brand-panel" onClick={this.OnClick_ToggleMenus}>
					{this.props.config.Debug === true && <div className="prototype-panel">{App.defaultProps.PrototypeText}</div>}
					{this.props.config.Debug === false && <div className="preview-panel">{App.defaultProps.PreviewText}</div>}
					<div className="ms-az-brand">Microsoft Azure</div>
				</div>
				<div className="search-panel">
					<SearchBox />
				</div>
				<div className="tools-panel">
					<ButtonControl3 text="Console" css={ButtonControl3.Styles.TopNav} onClick={this.OnClick_TestTopNavBar_ContextBlade}>
						<SvgIcon icon={SvgIcon.ShellIcons.DevConsole} />
					</ButtonControl3>
					<ButtonControl3 text="Directory" css={ButtonControl3.Styles.TopNav}>
						<SvgIcon icon={SvgIcon.ShellIcons.DirectorySwitcher} />
					</ButtonControl3>
					<ButtonControl3 text="Notifcations" css={ButtonControl3.Styles.TopNav}>
						<SvgIcon icon={SvgIcon.ShellIcons.Notifications} />
					</ButtonControl3>
					<ButtonControl3 text="Settings" css={ButtonControl3.Styles.TopNav}>
						<SvgIcon icon={SvgIcon.ShellIcons.PortalSettings} />
					</ButtonControl3>
					<ButtonControl3 text="Help" css={ButtonControl3.Styles.TopNav}>
						<SvgIcon icon={SvgIcon.ShellIcons.PortalHelp} />
					</ButtonControl3>
					<ButtonControl3 text="Feedback" css={ButtonControl3.Styles.TopNav}>
						<SvgIcon icon={SvgIcon.ShellIcons.PortalFeedback} />
					</ButtonControl3>
				</div>
				<div className="users-panel">Me Control</div>
			</header>
			<main>
				<div className="nav-panel-default">
					<LeftNav
						opened={this.LeftNavOpen}
						standardLinks={AzureLinks}
						favoriteLinks={FaveLinks}
						clickSelect={this.Handle_SelectExtension}
					/>
				</div>
				<div className="extension-panel-default">
					<this.CurrentExtension {...this.CurrentExtension.PropertyBag} />
				</div>
				<div className="context-panel-default" opened={this.ContextBladeOpen.toString()}>
					<div>context blade</div>
					<img className="test-logo" src={logo} alt={logo} />
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p> <p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p> <p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p> <p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p> <p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p> <p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p> <p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p> <p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p> <p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p> <p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p> <p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p> <p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p> <p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p> <p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p> <p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p> <p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p> <p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p> <p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p> <p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p> <p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p> <p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p> <p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p> <p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p> <p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p> <p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p> <p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p> <p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p> <p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
				</div>
			</main>
		</div> );
	}
}