/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
class ButtonCtrl extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		super( props );
        
		//properties
		this.Id = this.props.id;
        this.Application = this.props.Application;
        this.Title = this.props.buttonText || "Button";
		this.SvgIcon = this.props.svgIcon || undefined;
		this.Theme = this.props.Application.Application.CurrentTheme || undefined;
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
            AltTextTitle: this.props.attributeTitle
		};

		//event handlers
        this.handleClick = this.OnClick_ChangeBorderColor.bind(this);

		// inject CSS
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	//componentDidMount()
	//{	//	not used yet
	//	return;
	//};
	//componentDidUnMount()
	//{	//	not used yet
	//	return;
	//};

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
        if (props.Application.Application.ButtonCtrl.Title !== undefined) {
            this.Title = props.Application.Application.ButtonCtrl.Title;
		}
        return;
    };
	render()
    {
        //console.debug("this.SvgIcon", this.SvgIcon);
		//	console.debug( "RootLink", this.props, typeof RootLink );
        let _rv;
        
        //SVG + Unique Text
        if (this.SvgIcon !== undefined && this.props.buttonText !== " ")
		{
			let _j = React.createElement( 'div', { className: 'icon', dangerouslySetInnerHTML: Utilities.CreateSvgMarkup( this.SvgIcon.SVG ) } );

            _rv = React.createElement('div', {
                id: "btn-svg-text",
                className: this.state.currentCssClass + " IconWithText",
                onClick: this.handleClick,
                title: this.state.AltTextTitle,
                key: Utilities.NewId(),
            }, _j, `${this.Title}` ); 
        }
        //SVG + no unique text
        else if (this.SvgIcon !== undefined && this.props.buttonText == " ") {
            let _j = React.createElement('div', { className: 'icon', dangerouslySetInnerHTML: Utilities.CreateSvgMarkup(this.SvgIcon.SVG) });

            _rv = React.createElement('div', {
				id: "btn-svg",
				className: this.state.currentCssClass + " IconNoText",
                onClick: this.handleClick,
                title: this.state.AltTextTitle,
                key: Utilities.NewId(),
            }, _j);
        }
        //neither
        else // (this.SvgIcon == undefined && this.props.buttonText !== "Button")
        {
            _rv = React.createElement('div', {
                id: "btn-text",
                className: this.state.currentCssClass,
                onClick: this.handleClick,
                title: this.state.AltTextTitle,
                key: Utilities.NewId(), 
            }, `${this.Title}`);  // `${this.state.inner_text} : ${this.state.isClicked}`
        }
        return _rv;
	};
};
