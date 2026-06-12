window.onload = function(event) {
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