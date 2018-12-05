"use strict";

import { Utilities as Utils } from "../js/utilities.js";
import { OverrideConfig as Config } from "../js/config.js";
import { Application as App } from "../js/application.js";
import { ApplicationStateCache as Cache } from "../components/app-state-cache/app-state-cache.js";

( function ()
{
	console.log( "BEGIN", new Date().toISOString() );
	try
	{
		console.log( "TRY", new Date().toISOString() );
		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{
			ReactDOM.render( React.createElement( App, Config ), document.getElementById( "ApplicationElement" ) );

			//	const _new_random_id = Utils.NewBlockID();			
			return;
		} );
	}
    catch ( ex )
    {
        console.log( "CATCH", new Date().toISOString()  );
		console.error(ex.number, ":", ex.name, ":", ex.message);
		console.error("exception stack::", ex.stack);
		return;
	}
	finally
	{	
		console.log( "FINALLY", new Date().toISOString()  );
	}
    console.log( "END", new Date().toISOString() );
	return; 
} )();