import React from 'react';
import ReactDOM from 'react-dom';
import './css/fonts.css';
import './css/index.css';
import Config from './js/config';
import App from './App';
import * as serviceWorker from './serviceWorker';

//	ReactDOM.render(<App />, document.getElementById('root'));

( function ()
{
	console.log( "BEGIN", new Date().toISOString() );
	try
	{
		console.log( "TRY", new Date().toISOString() );

		// If you want your app to work offline and load faster, you can change
		// unregister() to register() below. Note this comes with some pitfalls.
		// Learn more about service workers: http://bit.ly/CRA-PWA
		serviceWorker.unregister();

		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{
			ReactDOM.render( React.createElement( App, Config ), document.getElementById( "root" ) );
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
		console.log( "FINALLY", new Date().toISOString() );
	}
	console.log( "END", new Date().toISOString() );
	return;
} )();