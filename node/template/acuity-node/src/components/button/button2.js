import React, { Component } from 'react';
import "./button.css";
// import { Utilities } from './../../js/utilities';
// import SvgIcon from "./../svg-icons/svg-icon";

export default class Button extends Component
{
	constructor( props )
	{
		super( props );

		//properties
		this.Id = this.props.id;
		//	this.Object = this.props.objectType;
        this.Application = this.props.Application;
        this.Title = this.props.buttonText || "Button";
		this.SvgIcon = this.props.svgIcon || undefined;
        this.ButtonStyle = this.props.className;
        this.CssFileID = "btn-css";
        this.CssFile = "components/standard-controls/button/button.css";
		this.CssClassNames = {
            Normal: this.Theme + " buttonControl " + this.ButtonStyle,
            Alerted: this.Theme + " RootLinkCssExtra " + this.ButtonStyle,
		};

		// state
		this.state = {
			items: [],
			inner_text: this.props.InnerText,
			prev_text: this.props.InnerText,
			isClicked: false,
            currentCssClass: this.CssClassNames.Normal,
			AltTextTitle: this.props.attributeTitle,
			IsLeftNavCollapsed: (this.props.IsCollapsed || false)
        };


		return;
	 }
	render()
	{
		return (
            <div id="btn" className={this.props.btn_class}>{this.props.title}</div>
            // <div id="btn-text" onClick={this.HandleClick} title={this.state.AltTextTitle} >{this.Title}</div>
		);
	}
}