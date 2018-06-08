/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";

// control template - flesh out all functions, methods, events
class ButtonCtrl extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		super( props );
        
		//properties
		this.Id = this.props.id;
        this.Application = this.props.Application;
        this.Title = this.props.buttonText || "Button";
        this.SvgIcon = this.props.svgIcon;//|| undefined;
        this.Theme = props.Application.Application.state.CurrentTheme;
        this.ButtonStyle = this.props.className;
        this.CssFileID = "btn-css"; //Utilities.NewId("btn-css");
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
        //dangerouslySetInnerHTML: createMarkup(_plus) 


        if (this.ButtonStyle !== undefined) {
            this.setState({ currentCssClass: this.CssClassNames.TopNav });
        }
		return;
	};
	componentDidMount()
	{	//	not used yet
		return;
	};
	componentDidUnMount()
	{	//	not used yet
		return;
	};
    createMarkup(svgIcon)
    {
        return { __html: svgIcon }
    };
	OnClick_ChangeBorderColor( ev )
	{	//	testing changing the border color
		//	console.debug( "RootLink::handleClick" );
		ev.preventDefault();
		ev.stopPropagation();

		let _changed = Utilities.ReverseString( this.state.prev_text );

		if ( this.state.isClicked == true )
		{
			this.setState( { isClicked: false } );
			this.setState( { inner_text: this.state.prev_text } );
			this.setState( { currentCssClass: this.CssClassNames.Normal } );
		}
		else if ( this.state.isClicked == false )
		{
			this.setState( { isClicked: true } );
			this.setState( { inner_text: _changed } );
			this.setState( { currentCssClass: this.CssClassNames.Normal + " " + this.CssClassNames.Alerted } );
		}
		//	for firing events at the top level of "Application" class
		//	this.Application.OnClick_HandleBodyElementClick( ev, false );
        return;


        // set overrives - need the same pathway as themeing 
        //WIP JG 
        if (props.Application.Application.ButtonCtrl.Title !== undefined) {
            this.Title = props.Application.Application.ButtonCtrl.Title;
        }
        return;
    };

    //if icon = undefined >> text button
    //text = title 
	render()
    {
        Utilities.InjectControlCss(this.CssFileID, this.CssFile);
        console.debug("this.SvgIcon", this.SvgIcon);
		//	console.debug( "RootLink", this.props, typeof RootLink );
        let _rv;


        //if (this.SvgIcon !== undefined && this.props.buttonText !== undefined) {
        //    _rv = React.createElement('div', {
        //        id: Utilities.NewId("one"),
        //        className: this.state.currentCssClass + " svg-icon",
        //        onClick: this.handleClick,
        //        title: this.state.AltTextTitle,
        //        dangerouslySetInnerHTML: this.createMarkup(this.SvgIcon.SVG)
        //    }, `${this.Title}`);
        //}
        //else if (this.SvgIcon !== undefined) {
        //    _rv = React.createElement('div', {
        //        id: Utilities.NewId("two"),
        //        className: this.state.currentCssClass,
        //        onClick: this.handleClick,
        //        title: this.state.AltTextTitle
        //    }, `${this.Title}`);  // `${this.state.inner_text} : ${this.state.isClicked}`
        //}
        //else {
        //    _rv = React.createElement('div', {
        //        id: Utilities.NewId("three"),
        //        className: this.state.currentCssClass,
        //        onClick: this.handleClick,
        //        title: this.state.AltTextTitle,
        //        dangerouslySetInnerHTML: this.createMarkup(this.SvgIcon.SVG)
        //    });  // `${this.state.inner_text} : ${this.state.isClicked}`
        //}
        

        if (this.SvgIcon !== undefined && this.props.buttonText !== "Button")
        {
            let _j = React.createElement('div', { className: 'divTitle', dangerouslySetInnerHTML: this.createMarkup(this.SvgIcon.SVG) });

            _rv = React.createElement('div', {
                id: Utilities.NewId("root-link"),
                className: this.state.currentCssClass + " svg-icon",
                onClick: this.handleClick,
                title: this.state.AltTextTitle,
            }, `${this.Title}`, _j ); 
        }
        else if (this.SvgIcon !== undefined && this.props.buttonText == "Button") {
            let _j = React.createElement('div', { className: 'divTitle', dangerouslySetInnerHTML: this.createMarkup(this.SvgIcon.SVG) });

            _rv = React.createElement('div', {
                id: Utilities.NewId("root-link"),
                className: this.state.currentCssClass + " svg-icon",
                onClick: this.handleClick,
                title: this.state.AltTextTitle,
            }, _j);
        }

        else if (this.SvgIcon == undefined && this.props.buttonText !== "Button")
        {
            _rv = React.createElement('div', {
                id: Utilities.NewId("root-link"),
                className: this.state.currentCssClass,
                onClick: this.handleClick,
                title: this.state.AltTextTitle
            }, `${this.Title}`);  // `${this.state.inner_text} : ${this.state.isClicked}`
        }
        return _rv;
	};
};
