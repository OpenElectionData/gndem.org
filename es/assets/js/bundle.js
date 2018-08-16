function notificationBar() {
	let notificationBarEl = document.querySelector('.notification-bar')
	let hideBtn = document.querySelector('.btn-hide')
	hideBtn.addEventListener('click', function() {
		sessionStorage.setItem('gdpr_accept', 'true')
		notificationBarEl.classList.remove('is-visible')
	})

	if(sessionStorage.getItem('gdpr_accept') === 'true') {
      notificationBarEl.classList.remove('is-visible');
   	} else {
      notificationBarEl.classList.add('is-visible')
   	}
}

window.addEventListener('DOMContentLoaded', notificationBar)