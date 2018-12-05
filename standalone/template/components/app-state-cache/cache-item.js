/// <reference path="../../js/utilities.js" />
//	application state cache class
//	Because in React this is typically a "top/down" or "parent/child" pattern,
//	state, caching and context are handled by differently libraries.
//	The idea here being that components will need to talk to other components
//	and also may need to pass data to other components.
//	This type of pattern needs to live in the global or app scope 
//	where it is accessible to all components regardless of the application structure (which will change).

import { Utilities as u } from "../../js/utilities.js";

"use strict";
export class CacheItem
{
	constructor()
	{	//	console.debug( "CacheItem.props" );
		this.ID = Object.freeze( u.NewBlockID() );
		this.CreatedTime = Object.freeze( new Date() );

		// currenly not used,
		this.Index = 0;
		this.Priority = 0;

		// currently used
		this.Name = "";
		this.Target = {};
		this.Sender = {};
		this.Callback = {};
		
		return;
	};
};
