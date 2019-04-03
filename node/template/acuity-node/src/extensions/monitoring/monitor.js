/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

export class MonitoringExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Monitor",
			_breadcrumb_title: "Monitor",
			_icon : ExtBase.Icons().Monitoring,
			_css_id : "monitor-css",
			_css_path : "extensions/monitor/monitor.css"
		};
	};
};
