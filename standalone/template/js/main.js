/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />

"use strict";
( function ()
{
	console.log( "BEGIN Azure Prototype\t", new Date().toISOString() );
	try
	{
		// basic config sample to date
		// will move out to a JSON formatted file.
		let _application_property_bag = {
			RootLinks: [
        		{ RootLink: { InnerText: "Sean Gephardt" } },
				{ RootLink: { InnerText: "Robert Taft" } },
				{ RootLink: { InnerText: "Jaqueline Gaherity" } },
				{ RootLink: { InnerText: "Joe Hallock" } },
				{ RootLink: { InnerText: "Kavitha Perla" } },
			],
        	"SearchLink.InnerText": "Guitars",
        	"UserSwitchList": ["Sean", "Robert", "Jacqueline", "Jon", "Jonah"],
			"VerticalNavigation": ["Menu","New","All Resources","Your Resources","Virtual Machines","Databases"]
        };

    	//  wait for DOM to complete before making dom changes
        window.document.addEventListener( "DOMContentLoaded", function ( e )
        {	//	console.debug( "Our React.js Main");
			ReactDOM.render( React.createElement( Application, _application_property_bag, [] ), document.getElementById( "AppBody" ) );
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