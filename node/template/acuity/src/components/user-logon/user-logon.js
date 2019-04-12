import React from 'react';
//	import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from './../svg-icons/svg-icon.js';
import './user-logon.css';

class UserLogonControl extends React.Component
{
	constructor( props )
	{	//	console.debug( "UserLogonControl.props", props.IsOpen );
		super( props );

		this.state = {
			IsOpen: ( this.props.IsOpen || false),
		};

		this.CurrentUser = this.props.currentUser;
		//	console.debug( "UserLogonControl", this.CurrentUser );\

		//	this.props.openEvent
		this.HandleToggle = this.OnClick_ToggleUserPanel.bind( this );
        return;
	};
	OnClick_ToggleUserPanel( ev )
	{
		ev.nativeEvent.preventDefault();
		ev.nativeEvent.stopImmediatePropagation();
		ev.nativeEvent.stopPropagation();

		this.setState( state => ( {
			IsOpen: !state.IsOpen
		} ) );

		return;
	};
	render()
	{
		return (
			<div className="user-logon-container-ctrl">
				<div className="user-info-panel" onClick={this.HandleToggle}>
					<div className="user-info-text">
						<div className="user-info-text-name">{this.CurrentUser.email}</div>
						<div className="user-info-text-company">{this.CurrentUser.companyName}</div>
					</div>
					<div className="user-image">
						<SvgIcon icon={this.CurrentUser.avatar} name={this.CurrentUser.name} />
					</div>
				</div>
				{this.state.IsOpen &&
					<div className="user-account-panel">

					<div>
						<div>{this.CurrentUser.companyName}</div>
						<div>Sign out</div>
					</div>

					<div>
						<div>
							<SvgIcon icon={this.CurrentUser.avatar} name={this.CurrentUser.name} />
						</div>
						<div>
							<div>{this.CurrentUser.name}</div>
							<div>{this.CurrentUser.email}</div>
							<div>View account</div>
							<div>Switch directories</div>
						</div>
					</div>

					<div>Sign in as a different user</div>

				</div>				
				}
			</div>			
		);
	};
};
export
{
	UserLogonControl as MeControl
};