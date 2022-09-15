window.onload = function(event) {
	let show = 5;
	let show_hide = 1;
	let items = document.querySelectorAll('#list li');
	if ( items.length > 0 ) {
		show_hide_list( show, items );
		
		let load_more = document.querySelectorAll('#load_more');
		load_more.forEach( item => {
			item.addEventListener( 'click', function() {
				show += show_hide;
				show_hide_list(show, items);
			});
		});
	}
};

function show_hide_list(show, items) {
	show--;
	items.forEach( ( item, index ) => {
		if( index <= show ) {
			item.classList.remove('hidden');
		} else {
			item.classList.add('hidden');
		}
	} );
	if(items.length<=(show+1)) {
		document.querySelector('#load_more').remove();
	}
}