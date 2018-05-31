const Utilities = {
	NewId: function( strValue )
	{
		let _rv = "";
		let _id_name = "";
		if ( strValue !== undefined )
		{
			_id_name = strValue + "-";
		}
		else
		{
			_id_name = "id-";
		}
		_rv = _id_name + Math.random().toPrecision( 4 ).replace( ".", "" );
		//	console.debug( "Utilities.NewId()._rv", _rv );
		return _rv;
	},
	NewKey: function()
	{	// react.js specific for putting new react elements into arrays prior to referencing in react.render()
		const _rv = "key-" + Math.random().toPrecision( 4 ).replace( ".", "" );
		//	console.debug( "Utilities.NewKey()._rv", _rv );
		return _rv;
	},
	ReverseString: function ( strValue )
	{
		let _new;
		let _temp = [];

		if ( Array.isArray(strValue) == true )
		{
			strValue = strValue.join();
		}

		for ( let i = 0; i < strValue.length; i++ )
		{	//	console.debug( i, strValue.length, strValue.charAt( i ) );
			let _last = strValue.charAt( (strValue.length-1) - i );
			//	console.debug( i, _last );
			_temp.push( _last );
		}	//	console.debug( "_temp", _temp );
		_new = _temp.join('');
		return _new;
	}
};