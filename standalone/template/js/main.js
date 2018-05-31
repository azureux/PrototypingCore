/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />

"use strict";
( function ()
{
	console.log( "BEGIN Azure Prototype\t", new Date().toISOString() );
	try
	{
		// "Application" is our main ReactJs application class
		// "ApplicationConfig" lives in config.js
    	// Wait for DOM to complete before making dom changes
        window.document.addEventListener( "DOMContentLoaded", function ( e )
        {	//	console.debug( "Our React.js Main");
			ReactDOM.render( React.createElement( Application, ApplicationConfig, [] ), document.getElementById( "AppBody" ) );
			return;
        } );
	}
    catch ( ex )
    {
        console.log( "in 'catch'" );
		console.error(ex.number, ":", ex.name, ":", ex.message);
		console.error("exception stack::", ex.stack);
		return;
	}
	finally
	{
        //	console.log( "in 'finally'" );
	}
    console.log( "END Azure Prototype\t\t", new Date().toISOString() );
	return; 
} )();