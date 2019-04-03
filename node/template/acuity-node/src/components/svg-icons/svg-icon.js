//	NOTES FOR SVG SYNTAX
//	attribute syntax may cause errors
import React, { Component } from 'react';
export default class SvgIcon extends Component
{
	constructor(props)
	{
		super(props);
		this.Icon = this.props.icon || SvgIcon.Icons.Default;
	};
	static Icons = {
		Default: (
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" >
				<path fill="#3999C6" d="M25.561,23.167c-0.103,0-0.197-0.03-0.288-0.083L6.011,12.045c-0.183-0.103-0.292-0.297-0.292-0.506 c0-0.203,0.108-0.395,0.292-0.496L25.149,0.075c0.182-0.1,0.405-0.1,0.579,0L44.994,11.12c0.174,0.102,0.29,0.291,0.29,0.496 c0,0.212-0.116,0.4-0.29,0.504L25.853,23.084C25.762,23.137,25.665,23.167,25.561,23.167" />
				<path fill="#59B4D9" d="M22.792,50c-0.104,0-0.207-0.024-0.295-0.077L3.295,38.917C3.11,38.814,3,38.626,3,38.416V16.331				c0-0.207,0.11-0.397,0.295-0.506c0.176-0.1,0.401-0.1,0.586,0L23.08,26.831c0.178,0.107,0.286,0.297,0.286,0.504v22.086 c0,0.212-0.108,0.397-0.286,0.502C22.985,49.976,22.888,50,22.792,50" />
				<path fill="#59B4D9" d="M28.225,50c-0.098,0-0.199-0.024-0.295-0.077c-0.178-0.105-0.288-0.289-0.288-0.502V27.478						c0-0.207,0.11-0.397,0.288-0.504l19.196-11.002c0.185-0.102,0.403-0.102,0.587,0c0.176,0.103,0.287,0.295,0.287,0.5v21.943 c0,0.211-0.111,0.398-0.287,0.502L28.511,49.923C28.429,49.976,28.325,50,28.225,50" />
				<path opacity="0.5" fill="#FFFFFF" d="M28.225,50c-0.098,0-0.199-0.024-0.295-0.077c-0.178-0.105-0.288-0.289-0.288-0.502V27.478 		c0-0.207,0.11-0.397,0.288-0.504l19.196-11.002c0.185-0.102,0.403-0.102,0.587,0c0.176,0.103,0.287,0.295,0.287,0.5v21.943 c0,0.211-0.111,0.398-0.287,0.502L28.511,49.923C28.429,49.976,28.325,50,28.225,50" />
			</svg>
		),
		CreateNew: (
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" >
				<path fill="green" d="M14.969,7.969H7.938V15H7V7.969h-7.031V7.031H7V0h0.938v7.031h7.031V7.969z" />
			</svg>
		),
		AzureHome: (
			<svg xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" viewBox="0 0 22.7 22.7" focusable="false">
				<g>
					<polygon fill="#3999c6" points="11.2,2.1 0,13 4.1,13 4.1,20.3 9.1,20.3 9.1,15.5 13.4,15.5 13.4,20.3 17.7,20.3 17.7,13 22.7,13" />
					<polygon fill="#59aed3" points="10.1,15.5 11.9,2.8 11.2,2.1 0,13 4.1,13 4.1,20.3 9.1,20.3 9.1,15.5" />
				</g>
			</svg>
		),
		AzureDashboard: (
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
				<g>
					<rect y="2" fill="#3C9BE4" width="24" height="20" />
				</g>
				<rect x="2" y="5" fill="#FFFFFF" width="6" height="12" />
				<rect x="9" y="5" fill="#FFFFFF" width="11" height="6" />
				<rect x="9" y="12" fill="#FFFFFF" width="5" height="5" />
				<rect x="15" y="12" fill="#FFFFFF" width="5" height="5" />
			</svg>
		),
		AllServices: (
			<svg xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" viewBox="0 0 50 50" focusable="false">
				<g>
					<path fill="#7a7a7a" d="M 19.432 22.112 h 27.119 v 6.307 H 19.432 Z m 0 13.875 h 27.119 v 6.307 H 19.432 Z m 0 -27.75 h 27.119 v 6.307 H 19.432 Z" />
					<circle fill="#59b4d9" opacity="0.6" cx="6.818" cy="39.152" r="3.784" />
					<circle fill="#59b4d9" opacity="0.6" cx="6.818" cy="11.907" r="3.784" />
					<circle fill="#3999c6" cx="6.818" cy="25.53" r="3.784" />
				</g>
			</svg>
		),
		FavoriteOpen: (
			<svg>
				<g id="azure-nav-favorites-open" transform="scale(1,1)">
					<line x1="0" y1="15" x2="12" y2="15" stroke="black" strokeWidth="0.2"></line>
					<polygon transform="translate(1,7) scale(0.3,0.3)" points="53.46 0 59.06 17.72 77.64 17.57 62.52 28.37 68.41 46 53.46 34.95 38.51 46 44.4 28.37 29.27 17.57 47.86 17.72 53.46 0" fill="rgba(255, 215, 0, 1)" stroke="black"></polygon>
					<line x1="22" y1="15" x2="36" y2="15" stroke="black" strokeWidth="0.2"></line>
					<text x="36" y="19" fontSize="13px" fill="rgba(0,0,0,1)">FAVORITES</text>
					<line x1="100" y1="15" x2="400" y2="15" stroke="black" strokeWidth="0.2"></line>
				</g>
			</svg>
		),
		FavoriteClosed: (
			<svg>
				<g id="azure-nav-favorites-closed" transform="scale(1,1)">
					<line x1="0" y1="15" x2="15" y2="15" stroke="black" strokeWidth="0.2"></line>
					<polygon transform="translate(7,7) scale(0.3,0.3)" points="53.46 0 59.06 17.72 77.64 17.57 62.52 28.37 68.41 46 53.46 34.95 38.51 46 44.4 28.37 29.27 17.57 47.86 17.72 53.46 0" fill="rgba(255, 215, 0, 1)" stroke="black"></polygon>
					<line x1="31" y1="15" x2="50" y2="15" stroke="black" strokeWidth="0.2"></line>
				</g>
			</svg>
		)
	};
	render()
	{
		return this.Icon;
	};
}