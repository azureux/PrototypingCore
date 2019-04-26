import React from 'react';
import './cmd-panel.css';

export default class CommandButtonPanel extends React.Component
{	
	constructor( props )
	{	
		super( props );
		return;
	};
	static Styles =
	{
		Divider: "cmd-panel-divider",
	};
	OnClick_ChangeIsClickedState( ev )
	{	
		if ( this.state.isClicked === true )
		{
			this.setState( { isClicked: false } );
		}
		else if ( this.state.isClicked === false )
		{
			this.setState( { isClicked: true } );
		}
		return;
	};
	render()
	{
		return(
			<div className="cmd-panel">{this.props.children}</div>
		);
	};
};
