import React from 'react';
//	import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from './../svg-icons/svg-icon.js';
import './user-logon.css';

class UserLogonControl extends React.Component
{
	constructor( props )
	{	//	console.debug( "UserLogonControl.props", props.IsOpen );
		super( props );
		this.CurrentUser = this.props.currentUser;
        return;
	};
	render()
	{	//	console.debug( "UserLogonControl::render()", this.props.visiblePanel );
		return (
			<div className="user-logon-container-ctrl">
				<div className="user-info-panel" onClick={this.props.clickEvent}>
					<div className="user-info-text">
						<div className="user-info-text-name">{this.CurrentUser.email}</div>
						<div className="user-info-text-company">{this.CurrentUser.companyName}</div>
					</div>
					<div className="user-image">
						<SvgIcon icon={this.CurrentUser.avatar} name={this.CurrentUser.name} />
					</div>
				</div>
				{this.props.visiblePanel === true &&
					<div className="user-account-panel">

					<div className="uap-company">
						<div className="uap-company-name">{this.CurrentUser.companyName}</div>
						<div className="uap-sign-in-out">Sign out</div>
					</div>

					<div className="uap-avatar">
						<div className="uap-avatar-image">
							<SvgIcon icon={this.CurrentUser.avatar} name={this.CurrentUser.name} />
						</div>
						<div className="uap-avatar-text">
							<div className="uap-user-name">{this.CurrentUser.name}</div>
							<div className="uap-user-email">{this.CurrentUser.email}</div>
							<div className="uap-user-links">View account</div>
							<div className="uap-user-links">Switch directories</div>
						</div>
					</div>

					<div className="uap-swap-login">
						<span>
							<SvgIcon icon={SvgIcon.Avatars.DefaultUser} />
						</span>
						<span>Sign in as a different user</span>
					</div>

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