import React from 'react';
import { Utilities as Utils } from "./../../js/utilities.js";
//	import { SVG as AzureSvgs } from "../../../js/svg-assets.js";

export class ButtonControl extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
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

		//event handlers
		this.HandleClick = this.OnClick_ChangeBorderColor.bind( this );
		this.NavigationClick = this.props.onClickHandler;

		// inject CSS
        Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	static ClassNames()
	{
		return {
			ButtonControl: "buttonControl",
			RootLink: "RootLinkCss",
			TopNav: "TopNavBtn"
		};
	};
	OnClick_ChangeBorderColor( ev )
	{	//	testing changing the border color
		//	console.debug( "RootLink::handleClick" );
		ev.preventDefault();
		ev.stopPropagation();

		//let _changed = Utilities.ReverseString( this.state.prev_text );

		if ( this.state.isClicked == true )
		{
			this.setState( { isClicked: false } );
			//this.setState( { inner_text: this.state.prev_text } );
			this.setState( { currentCssClass: this.CssClassNames.Normal } );
		}
		else if ( this.state.isClicked == false )
		{
			this.setState( { isClicked: true } );
			//this.setState( { inner_text: _changed } );
			this.setState( { currentCssClass: this.CssClassNames.Normal + " " + this.CssClassNames.Alerted } );
		}
		//	for firing events at the top level of "Application" class
		//	this.Application.OnClick_HandleBodyElementClick( ev, false );
        return;

        // set overrives - need the same pathway as themeing 
  //      if (props.Application.Application.ButtonCtrl.Title !== undefined) {
  //          this.Title = props.Application.Application.ButtonCtrl.Title;
		//}
        return;
    };
	render()
    {
        let _rv;
        
        //	SVG + Unique Text
        if (this.SvgIcon !== undefined && this.props.buttonText !== " ")
		{
			//	console.debug( "BtnCtrl:render():this.Title", this.Title, this.state.IsLeftNavCollapsed );
			let _btn_class = "btn-icon-text-default";

			if ( this.ButtonStyle !== undefined )
			{
				_btn_class = this.ButtonStyle;
			}
			else
			{
				_btn_class = "btn-icon-text-default";
			}

			let _icon_class = "btn-icon-default";
			let _text_class = "btn-text-default";

			if ( this.state.IsLeftNavCollapsed == true )
			{
				_text_class = "btn-text-hidden";
			}

			if ( this.state.isClicked == true )
			{
				_btn_class = _btn_class + " btn-icon-text-default-selected";
			}

			let _icon = React.createElement( 'div', { className: _icon_class, dangerouslySetInnerHTML: Utils.CreateSvgMarkup( this.SvgIcon.SVG ), key: Utils.NewId() } );
			let _text = React.createElement( 'div', { className: _text_class, key: Utils.NewId() },`${this.Title}`);

            _rv = React.createElement('div', {
                className: _btn_class,
				onClick: (ev) =>
				{
					this.HandleClick( ev );
					this.NavigationClick( ev, this.props.extensionObject );
				},
                title: this.state.AltTextTitle,
                key: Utils.NewId(),
            }, [_icon, _text] ); 
        }
        //SVG + no unique text
		else if ( this.SvgIcon !== undefined && this.props.buttonText == " " )
		{
            let _j = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: Utils.CreateSvgMarkup(this.SvgIcon.SVG) });

            _rv = React.createElement('div', {
				id: "btn-svg",
				className: "IconNoText " +  this.props.className,
                onClick: this.NavigationClick,
                title: this.state.AltTextTitle,
                key: Utils.NewId(),
            }, _j);
        }
        //neither
        else // (this.SvgIcon == undefined && this.props.buttonText !== "Button")
        {
      //	return ( <button onClick={ this.handleClick } style={{borderWidth:"5px", borderColor: this.state.borderColor, backgroundColor: this.state.bg_color, color: this.state.color, padding: "10px", width: "200px", cursor: "pointer", fontWeight:"700", fontSize:"24px"}}>{this.state.innerText}</button> );
			
            // _rv = React.createElement('div', {
            //     id: "btn-text",
            //     className: this.state.currentCssClass,
            //     onClick: this.HandleClick,
            //     title: this.state.AltTextTitle,
            //     key: Utilities.NewId(), 
			// }, `${this.Title}`);  // `${this.state.inner_text} : ${this.state.isClicked}`
			_rv = ( '<div id="btn-text" onClick={this.HandleClick} title={this.state.AltTextTitle} >{this.Title}</div>' );
        }
        return _rv;
	};
};
