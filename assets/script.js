window.onload = function(event) {
	let filters = document.querySelectorAll('#filter li');
	filters.forEach( filter => {
		filter.addEventListener( 'click', function() {
			if ( document.querySelector('body').dataset.filter === filter.classList.toString() ) {
				document.querySelector('body').dataset.filter = "";	
			} else {
				document.querySelector('body').dataset.filter = filter.classList.toString();
			}
		});
	});
	
	let toggle_nav = document.querySelectorAll('#toggle-nav');
	let mobile_nav = document.querySelector('#mobile-nav');
	let toggle_icons = document.querySelectorAll('#toggle-nav img');
	toggle_nav.forEach( item => {
		item.addEventListener( 'click', function() {
			if ( mobile_nav ) {
				mobile_nav.classList.toggle('hidden');
				toggle_icons.forEach( icon => {
					icon.classList.toggle('hidden');
				});
			}
		});
	});
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

function toggle_newsletter_banner(new_setting) {
	const setting = localStorage.getItem('newsletter');
	const newsletter = document.querySelector('#newsletter');
	if ( setting !== 'true' ) {
		newsletter.classList.remove('hidden');
	}
	if ( new_setting === true ) {
		newsletter.classList.add('hidden');
		localStorage.setItem('newsletter', true);
	}
}
toggle_newsletter_banner(false);