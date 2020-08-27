const inputs = document.querySelectorAll('label[for="language"]');

inputs.forEach((input) => {
	input.addEventListener('click', (e) => {
		const languageName = e.target.getAttribute('id');
		if (e.target.classList.contains('check')) {
			e.target.classList.remove('check');
			e.target.classList.remove(`${languageName}-check`);
		} else {
			e.target.classList.add('check');
			e.target.classList.add(`${languageName}-check`);
		}
	});
});
