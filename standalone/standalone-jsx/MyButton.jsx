export class MyButton extends React.Component
{
  constructor(props)
  {
    super(props);
		this.state = {
      prev_text: this.props.children,
      prev_bg_color: this.props.backgroundColor, 
      bg_color: this.props.backgroundColor,
      fore_color_black: "rgba(0,0,0,1)",
      fore_color_white: "rgba(255,255,255,1)", 
      color: "rgba(255,255,255,1)", 
      prev_borderColor: "rgba(192,192,192,1)",
      borderColor: "rgba(192,192,192,1)",
      innerText: this.props.children,
			isClicked: false,
		};    
    this.handleClick = this.OnClick_ChangeBorderColor.bind( this );
    return;
  };
  GetRandomColors()
  {
     let newColor = function()
     {
        return { r: Math.round(Math.random() * 256), g: Math.round(Math.random() * 256), b: Math.round(Math.random() * 256), a:  Math.random().toPrecision(1)};
     };
     // console.debug("newColor", newColor());
     return new newColor();
  };
	OnClick_ChangeBorderColor( ev )
	{ //  console.debug( "MyButton::OnClick_ChangeBorderColor" );
    let bg = this.GetRandomColors();
    let br = this.GetRandomColors();
    let _bg_color_string = "rgba(" + bg.r + "," +bg.b + "," + bg.g + "," + bg.a + ")";
    let border_color_string ="rgba(" + br.r + "," +br.b + "," + br.g + "," + br.a + ")";
    
	if ( this.state.isClicked == false )
		{
      this.setState( { isClicked: true } );
      this.setState( { bg_color: _bg_color_string } );
      this.setState( { color: this.state.fore_color_black } );  
      this.setState( { borderColor: border_color_string } ); 
      this.setState( { innerText: 'random color'} );      
    }
		else if ( this.state.isClicked == true )
		{
			this.setState( { isClicked: false } );
      this.setState( { bg_color: this.state.prev_bg_color } );
      this.setState( { color: this.state.fore_color_white } );        
      this.setState( { borderColor: this.state.prev_borderColor } ); 
      this.setState( { innerText: this.state.prev_text } );
		}
		return;
	};  
  render()
  {
      // return ( <button onClick={ this.handleClick } style={{borderWidth:"5px", borderColor: this.state.borderColor, backgroundColor: this.state.bg_color, color: this.state.color, padding: "10px", width: "200px", cursor: "pointer", fontWeight:"700", fontSize:"24px"}}>{this.state.innerText}</button> );
      
    let _rv = React.createElement('button', {
        id: "btn-text",
        onClick: this.handleClick,
        style: {borderStyle: "solid", borderWidth:"5px", padding: "10px", width: "200px", cursor: "pointer", fontWeight:"700", fontSize:"24px", borderColor: this.state.borderColor, backgroundColor: this.state.bg_color, color: this.state.color },
        title: this.state.innerText,
        key: Math.round(Math.random())
      }, `${this.state.innerText}`); 

      return _rv;      
  }
}