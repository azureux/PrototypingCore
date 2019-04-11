// COMPONENT TEMPLATE
class StandardControlTemplate extends React.Component
{	
	constructor( props )
	{	//	console.debug( "StandardControlTemplate.props", props );
		super( props );

		this.state = {
			isClicked: false,
		};

		//	EVENT HANDLERS
		this.HandleClick = this.OnClick_ChangeIsClickedState.bind( this );
		return;
	};
	OnClick_ChangeIsClickedState( ev )
	{	
		if ( this.state.isClicked == true )
		{
			this.setState( { isClicked: false } );
		}
		else if ( this.state.isClicked == false )
		{
			this.setState( { isClicked: true } );
		}
		return;
	};
	render()
	{
		//return React.createElement( 'div', {
		//	id: Utilities.NewId( "root-link" ),
		//	className: this.state.currentCssClass,
		//	onClick: this.handleClick
		//}, `${this.state.inner_text} : ${this.state.isClicked}` );
		return (
			<div>{this.state.IsClicked}</div>
		);
	};
};
