/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
// "Application" is our main ReactJs application class
// "ApplicationConfig" lives in config.js
// "DOMContentLoaded" - wait for DOM to complete before making dom changes
"use strict";
( function ()
{
	console.log( "BEGIN Azure Prototype\t", new Date().toISOString() );
	try
	{
		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{
			ReactDOM.render( React.createElement( Application, OverrideConfig, [] ), document.getElementById( "AppBody" ) );
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