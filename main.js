$( function () {
	$( '#the-form' ).on( 'change', function ( event ) {
		var origin = event.target,
			value;

		if ( origin === this ) {
			$( 'select' ).each( function() {
				$( '#result-' + this.name ).text( $( this ).val() || '' );
			} );

			return;
		}

		if ( origin.multiple ) {
			value = Array.prototype.filter.call( origin.options, function ( option ) {
				return option.selected || option.checked;
			} ).map( function ( option ) {
					return option.value;
				} );
		} else {
			value = origin.value;
		}

		$( '#result-' + origin.name ).text( value );
	} ).trigger( 'change' );

	if ( $.fn[pluginName] && typeof $.fn[pluginName] == 'function' ) {
		$( 'select' )[pluginName]();
	}
} );