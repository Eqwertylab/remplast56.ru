var forms = document.forms;
for(var i = 0; i < forms.length; i++) {
	forms[i].addEventListener('focus', function(e) {
		var label = this.querySelector('label[for="'+e.target.id+'"]');
		label.classList.add('form__label_active');
	}, true);
	forms[i].addEventListener('blur', function(e) {
		var label = this.querySelector('label[for="'+e.target.id+'"]');
		label.classList.remove('form__label_active');
	}, true);
}
