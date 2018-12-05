﻿//	application state cache class
//	Because in React this is typically a "top/down" or "parent/child" pattern,
//	state, caching and context are handled by differently libraries.
//	The idea here being that components will need to talk to other components
//	and also may need to pass data to other components.
//	This type of pattern needs to live in the global or app scope 
//	where it is accessible to all components regardless of the application structure (which will change).

"use strict";

import { SortTypes } from "../../js/utilities.js";
import { Utilities as Utils } from "../../js/utilities.js";
import { CacheItem as Item } from "../app-state-cache/cache-item.js";

export class ApplicationStateCache
{
	constructor()
	{	//	console.debug( "ApplicationStateCache.props");

		const _self = this;
		this.Items = [];

		// set 
		this.ClearAllItems = this.Handle_ClearAll.bind( this );
		return;
	};
	Handle_ClearAll()
	{
		console.debug( "ApplicationStateCache::ClearAll()" );
		this.Items = [];
		return;
	};
	Sort(direction)
	{	//	console.debug( "Sort(direction)", direction );
		if ( direction == undefined || direction == SortTypes.DEFAULT )
		{
			direction = SortTypes.ASC;
		}

        this.Items.sort( function ( a, b )
		{
			// keys for basically column name sorting TBD
            //var key_a = a[key]();
            //var key_b = b[key]();
            //  console.debug( "dir", dir, _self.SortType2.ASC );
            switch ( direction )
            {
                case SortTypes.ASC:
                    {   //  sort string ascending
                        if ( a < b ) return -1;
                        //  sort string descending    
                        if ( a > b ) return 1;
                        //  default return value (no sorting)
                        return 0;
                    }
                case SortTypes.DESC:
                    {   //  sort string ascending
                        if ( a < b ) return 1;
                        //  sort string descending    
                        if ( a > b ) return -1;
                        //  default return value (no sorting)
                        return 0;
                    }
            };
        } );

		//	console.debug( this.Items );

		return;
	};
	Add( item )
	{
		//	console.debug( "ApplicationStateCache::Add()", typeof item );
		//	console.debug( "ApplicationStateCache::Add()", item.constructor.name );
		const _error_message = "The item added was not a valid \'CacheItem\' object";

		this.Items.push( item );
		this.Sort( SortTypes.ASC.text );

		//if ( item.constructor.name == "CacheItem" )
		//{
		//	this.Items.push( item );
		//	this.Sort();
		//}
		//else if ( item.constructor.name == "Array" )
		//{
		//	let _temp_array = [];
		//	for ( let i = 0; i < item.length; i++ )
		//	{
		//		console.debug( i, item[i].constructor.name );
		//		if ( item[i].constructor.name == "CacheItem" )
		//		{
		//			_temp_array.push( item[i] );
		//		}
		//		else
		//		{
		//			console.error( _error_message, i,  item[i] );
		//		}
		//	}

		//	for ( let i = 0; i < _temp_array.length; i++ )
		//	{
		//		console.debug( i, _temp_array[i].constructor.name );
		//		this.Items.push( item[i] );
		//	}

		//	this.Sort();
		//}
		//else
		//{
		//	console.error( _error_message, item );
		//}
		return;
	};
	Remove()
	{
		console.debug( "ApplicationStateCache::Remove()" );
		return;
	};
	Save()
	{
		console.debug( "ApplicationStateCache::Save()");
		return ;
	}
};