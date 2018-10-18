/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />

"use strict";

import { OverrideConfig as Config } from "../js/config.js";
import { Application as App } from "../js/application.js";

( function ()
{
	console.log( "BEGIN", new Date().toISOString() );
	try
	{
		console.log( "TRY", new Date().toISOString() );
		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{
			ReactDOM.render( React.createElement( App, Config, [] ), document.getElementById( "ApplicationElement" ) );
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