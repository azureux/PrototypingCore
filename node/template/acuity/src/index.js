import React from 'react';
import ReactDOM from 'react-dom';
import Config from './js/config';
import App from './App';
import * as serviceWorker from './serviceWorker';

( function ()
{
	console.log( "BEGIN", new Date().toISOString() );
	try
	{
		//	console.log( "TRY", new Date().toISOString() );
		//	console.debug( Config );
		// If you want your app to work offline and load faster, you can change
		// unregister() to register() below. Note this comes with some pitfalls.
		// Learn more about service workers: http://bit.ly/CRA-PWA
		//	TBD - TESTING THIS IN VSCODE & MAC FOR JACKIEG
		//if ( Config.Debug )
		//{
		//	serviceWorker.unregister();
		//}
		serviceWorker.unregister();

		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{
			//	console.debug( "DOMContentLoaded" );
			//	ReactDOM.render( React.createElement( App, Config ), document.getElementById( "root" ) );
			ReactDOM.render( <App config={Config} />, document.getElementById('root'));
			return;
		} );
	}
	catch ( ex )
	{
		console.log( "CATCH", new Date().toISOString() );
		console.error( ex.number, ":", ex.name, ":", ex.message );
		console.error( "exception stack::", ex.stack );
		return;
	}
	finally
	{
		//	console.log( "FINALLY", new Date().toISOString() );
	}
	console.log( "END", new Date().toISOString() );
	return;
} )();