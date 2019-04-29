﻿import React from 'react';
//	import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import ExtensionHeader from "./../../components/extension-header/extension-header.js";
import CommandButtonPanel from "./../../components/cmd-panel/cmd-panel.js";
import CommandButton from "./../../components/cmd-panel/cmd-btn.js";


import './ext-base.css';

export class ExtensionBase extends React.Component
{	
	static defaultProps = {
		Title: "Extension Base Component",
		Subtitle: "The javascript base class for \"ExtensionBase\" ",
		Path: "/#",
		BreadcrumbTitle: "ExtensionBase breadcrumb short title",
		Icon: SvgIcon.Icons.Default,
		IsSelected: false,
		HasBreadcrumb: true,
		HasHeader: true,
		HasHeaderDocLink: true,
		HasCommandBar: true,
		Columns: [],
		Data: []
	};
	static ExtensionBaseStyles = {
		RenderPanel: "ext-base",
		ExtensionRenderPanel: "ext-base-content-area"
	};
	constructor( props )
	{
		//	console.debug( "ExtensionBase.props", props );
		super( props );

		this.ExtensionName = this.constructor.name;
		this.state = { IsDirty: false };

		this.Debug = ( this.props.debug || false );
		this.Path = ( this.props.Path || this.Path || ExtensionBase.defaultProps.Path );
		this.Title = ( this.props.Title || this.Title || this.ExtensionName );
		this.Subtitle = ( this.props.Subtitle || this.Subtitle || ExtensionBase.defaultProps.Subtitle );
		this.BreadCrumbTitle = ( this.props.BreadcrumbTitle || this.BreadCrumbTitle || ExtensionBase.defaultProps.BreadcrumbTitle );
		this.SvgIcon = ( this.props.Icon || this.Icon || ExtensionBase.defaultProps.Icon );
		this.IsSelected = ( this.props.IsSelected || this.IsSelected || ExtensionBase.defaultProps.IsSelected );
		this.HasHeader = ( this.props.HasHeader || ExtensionBase.defaultProps.HasHeader );
		this.HasHeaderDocLink = ( this.props.HasHeaderDocLink || ExtensionBase.defaultProps.HasHeaderDocLink );
		return;
	};
	ExtRender()
	{
		return (
			<div className={ExtensionBase.ExtensionBaseStyles.ExtensionRenderPanel}>
				<div className="debug-panel">
					{
						this.props.debug === true &&
						<div className="debug-on">debug: prototype</div>
					}
					{
						this.props.debug === false &&
						<div className="debug-off">debug: preview</div>
					}
				</div>
				<div className="debug-extension-info">
					<div>ExtensionBase.ExtRender(): {this.ExtensionName}</div>
					<div>this.SvgIcon: <span className="debug-svg-icon">{this.SvgIcon}</span></div>
					<div>this.Path: {this.Path}</div>
					<div>this.Title: {this.Title}</div>
					<div>this.Subtitle: {this.Subtitle}</div>
					<div>this.BreadCrumbTitle: {this.BreadCrumbTitle}</div>
					<div>this.IsSelected: {this.IsSelected.toString()}</div>
					<div>this.HasHeader: {this.HasHeader.toString()}</div>
					<div>this.HasHeaderDocLink: {this.HasHeaderDocLink.toString()}</div>
				</div>
				<div>
				<h1>HTML Ipsum Presents</h1>

				<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="https://portal.azure.com">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

				<h2>Header Level 2</h2>

				<ol>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
					<li>Aliquam tincidunt mauris eu risus.</li>
				</ol>

				<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

				<h3>Header Level 3</h3>

				<ul>
					<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
					<li>Aliquam tincidunt mauris eu risus.</li>
				</ul>

				<ul>
					<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
					<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
					<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
					<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
				</ul>

				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

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
	CommandBarRender()
	{

	};
	render()
	{	//	console.debug( "ExtBase.render()", this.HasHeader, this.props.HasHeader);
		return (
			<div className="ext-base">
				{
					this.props.HasHeader !== false && 
					<ExtensionHeader
						extBag={this.props}
						pinEvent={this.props.handlePin}
						closeEvent={this.props.handleClose}></ExtensionHeader>	
				}
				<div className="ext-base-content-area">{this.ExtRender()}</div>	
			</div>
		);
	};
};