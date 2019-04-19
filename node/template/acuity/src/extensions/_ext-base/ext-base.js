import React from 'react';
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import ExtensionHeader from "./../../components/extension-header/extension-header.js";
import './ext-base.css';
import logo from './../../css/logo.svg';

export class ExtensionBase extends React.Component
{	
	constructor( props )
	{
		//	console.debug( "ExtensionBase.props", props );
		super( props );

		this.state = { IsDirty: false };

		this.Utils = Utils;
		this.ID = Utils.NewId( this._ext_name );

		this.ExtensionName = this.constructor.name;
		this.PropertyBag = this.props;
		this.Path = ( this.props._path || "/" );
		this.Title = ( this.props._title || this.ExtensionName);
		this.SubTitle = ( this.props._subtitle || "ExtensionBase Subtitle");
		this.BreadCrumbTitle = ( this.props._breadcrumb_title || "ExtensionBase breadcrumb" );
		this.SvgIcon = ( this.props._icon || SvgIcon.Icons.Default );
		this.BreadCrumbData = ( this.props.breadcrumbs );

		// string boolean for render() hacks
		this.IsSelected = ( this.props._selected || false );

		this.DefaultCssClass = "ExtensionBase " + this.ExtensionName;
		this.DefaultCssClassNoBreadCrumb = "ExtensionBase-NoBreadCrumb  " + this.ExtensionName;
		this.HasBreadCrumb = (this.props.HasBreadCrumb || false);
		if ( this.HasBreadCrumb === false )
		{
			this.DefaultCssClass = this.DefaultCssClassNoBreadCrumb;
		}
		return;
	};
	static PropertyBag =
	{
		_title: "Extension Base Component",
		_subtitle: "The javascript base class for \"ExtensionBase\" ",
		_path: Utils.FormatPathFromTitle( "Extension Base Component" ),
		_breadcrumb_title: "breadcrumb short title",
		_icon: SvgIcon.Icons.Default,
		_selected: "false",
		_data : []
	};
	static Ext_Key() { return Utils.NewKey(); };
	static Ext_Name() { return this.ExtensionName; };
	static Ext_Title() { return this.PropertyBag._title; };
	static Ext_SubTitle() { return this.PropertyBag._subtitle; };
	static Ext_Path() { return this.PropertyBag._path; };	
	static Ext_BreadCrumbTitle() { return this.PropertyBag._breadcrumb_title; };
	static Ext_Icon() { return this.PropertyBag._icon; };
	static Ext_Data() { return this.PropertyBag._data; };
	static Ext_IsSelected() { return this.PropertyBag._selected; };
	componentWillMount()
	{
		//	console.debug( "componentWillMount" );
		return;
	};
	componentDidMount()
	{
		//	console.debug( "componentDidMount" );
		//	this.Init( ExtensionBase_PropertyBag );
		//	this.Init();
		//this.Utils.InjectControlCss( this.BaseCssId, this.BaseCssPath );
		//this.Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	componentWillUnmount()
	{
		//	console.debug( "componentWillUnmount--REMOVE CSS" );
		//this.Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "ExtBase.render.this.Selected", this.Selected );
		//<SvgIcon icon={this.SvgIcon} />
		//<div>ID: {this.ID}</div>
		//<div>ExtensionName: {this.ExtensionName}</div>
		//<div>Title: {this.Title}</div>
		//<div>SubTitle: {this.SubTitle}</div>
		//<div>BreadCrumbTitle: {this.BreadCrumbTitle}</div>
		//<div>Selected: {this.IsSelected}</div>
		return (
			<div className="ext-base">
				<ExtensionHeader
					extBag={this.PropertyBag}
					pinEvent={this.props.handlePin}
					closeEvent={this.props.handleClose}></ExtensionHeader>
				<div className="ext-base-content-area">
					<img className="test-logo" src={logo} alt={logo} />
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p>
					<p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p>
					<p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p>
					<p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p>
					<p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p>
					<p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p>
					<p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p>
					<p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p>
					<p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p>
					<p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p>
					<p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p>
					<p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p>
					<p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p>
					<p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p>
					<p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p>
					<p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p>
					<p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p>
					<p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p>
					<p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus, mollis platea pharetra venenatis mauris enim parturient ornare, diam lacinia sollicitudin nascetur lobortis sociis cras. Eleifend venenatis sagittis leo accumsan hendrerit a, fames facilisis metus feugiat quam, faucibus dictumst interdum posuere class. Magna feugiat sem cum tellus etiam inceptos sapien cubilia rhoncus vehicula, mus ligula imperdiet sagittis pharetra tempus placerat viverra class habitasse risus, auctor ut duis hendrerit aptent pretium justo felis nulla.</p>
					<p>Class mus purus auctor pellentesque lacus varius habitasse nec, mauris bibendum facilisi malesuada inceptos egestas potenti phasellus penatibus, ligula leo curae sodales nostra placerat porta. Lectus suspendisse diam malesuada per sapien ultrices libero tempus dignissim, tempor platea vivamus phasellus sem montes a eget aptent mollis, parturient congue dui commodo habitant sagittis erat dapibus. Lacus nostra eget turpis suspendisse nascetur at etiam quis dignissim iaculis neque, gravida taciti id sapien ligula eleifend fames ridiculus litora vehicula. Mauris eu pretium et fames vivamus sollicitudin magnis iaculis consequat ligula mattis, massa faucibus vestibulum at penatibus interdum dui ornare hendrerit vehicula. Duis aenean nam euismod risus pulvinar neque lacinia pellentesque habitant venenatis, in dictum eros a convallis parturient potenti placerat penatibus nisl sagittis, congue ac dui mauris facilisi dictumst urna taciti diam.</p>
					<p>Mi aliquet magnis posuere eget vehicula vitae, ultrices augue pulvinar iaculis montes luctus ut, eros primis neque justo scelerisque. Eget volutpat parturient risus montes cum arcu lobortis velit, est ridiculus nec neque eros lacus accumsan semper, sem diam commodo ullamcorper magna quam nunc. Tincidunt tortor nullam sollicitudin proin ac erat aliquet fusce tempus nibh pulvinar ultrices habitasse, imperdiet habitant laoreet ut eros integer quisque facilisis fames iaculis neque natoque. Cubilia morbi est facilisi scelerisque orci egestas mattis laoreet sed iaculis maecenas sollicitudin sociis parturient venenatis, fusce condimentum augue lacinia etiam ridiculus sociosqu pulvinar tortor erat odio varius nisl praesent.</p>
					<p>Dignissim facilisi consequat quis eget vehicula dui diam proin odio augue, risus suscipit condimentum rutrum torquent curae ac nisl blandit, mollis praesent mattis facilisis tellus conubia varius mus in. Duis lectus aenean nisl quisque dui velit nec, neque enim taciti commodo conubia quis odio, tincidunt augue metus eget morbi mi. Justo sed in habitant molestie sagittis parturient eros a turpis viverra convallis torquent, mattis mollis himenaeos fusce eget nisi dui mauris vel donec euismod. Porttitor arcu curae hendrerit maecenas inceptos, luctus congue quisque auctor platea euismod, sollicitudin neque lacus magna.</p>
					<p>Dignissim convallis mollis quis orci molestie lacus neque, dui est sollicitudin euismod dictum malesuada gravida, integer nec velit litora donec hendrerit. Non luctus mattis lectus taciti purus egestas diam commodo eget, scelerisque sagittis posuere rutrum aenean himenaeos metus vehicula, maecenas nibh quisque hac quis curabitur varius aliquet.</p>
					<p>Nostra dui sociis massa tincidunt ultrices curae ridiculus taciti commodo tempus, accumsan inceptos donec potenti posuere non class luctus euismod lobortis sapien, diam imperdiet hac malesuada magnis orci interdum egestas felis. Tincidunt neque volutpat rutrum ad odio ridiculus dapibus mollis, facilisis litora sapien aliquam sodales dui hendrerit, lobortis facilisi aenean fringilla natoque euismod vitae. Sollicitudin tristique elementum mi vehicula vel nulla ultrices, curabitur laoreet ultricies tempor cubilia placerat, vitae mus lectus porttitor netus scelerisque.</p>
					<p>Tempor venenatis ridiculus nascetur congue curae molestie mauris sociosqu gravida, quam blandit litora mollis consequat senectus potenti ornare iaculis bibendum, vehicula lacus auctor feugiat aliquam pretium dictum vivamus. Ad ut gravida venenatis eleifend scelerisque placerat class habitant, accumsan cum id ultrices sodales curabitur sociosqu sem, et pharetra est rutrum mattis conubia ligula. Platea dignissim eleifend cum molestie fames proin purus, est pretium faucibus cras elementum id accumsan sagittis, placerat quam arcu scelerisque a tortor.</p>
					<p>Sagittis dictum tristique consequat gravida posuere fermentum nunc, commodo dictumst massa vestibulum elementum pharetra vehicula, eget donec sodales condimentum aliquet habitant. Massa ante pellentesque in convallis vestibulum sociosqu eleifend, non natoque facilisi habitasse bibendum etiam condimentum, nisi sollicitudin vehicula ultricies euismod parturient. Neque id himenaeos lacinia cras natoque ultricies netus iaculis turpis aptent, posuere urna tempor nascetur risus convallis egestas laoreet elementum.</p>
					<p>Purus faucibus leo vivamus orci odio bibendum himenaeos cubilia cursus, curabitur netus etiam dis rutrum aenean feugiat diam curae iaculis, luctus parturient magnis ad mus posuere venenatis fringilla. Felis dignissim ad pellentesque tellus per eros nullam varius malesuada imperdiet, est suspendisse tempus pulvinar vel convallis donec etiam ut integer aliquet, elementum pharetra dis nisi iaculis fringilla libero semper lobortis. Himenaeos varius turpis vulputate nullam consequat cum odio suspendisse neque, condimentum nulla volutpat arcu tempus libero suscipit malesuada.</p>
					<p>Parturient pellentesque malesuada mollis cum quisque integer metus sociis, eros sagittis congue mus platea nibh vehicula curabitur porttitor, aliquam habitant egestas commodo ornare imperdiet ridiculus. Vel per parturient venenatis mollis varius ridiculus placerat nec conubia convallis taciti nisl suspendisse nostra semper, ultrices neque scelerisque diam mi non bibendum ad gravida fames massa dui est. Augue praesent aptent lectus semper bibendum arcu molestie viverra, vivamus hac malesuada conubia dis erat.</p>

					</div>
			</div>
		);
	};
};