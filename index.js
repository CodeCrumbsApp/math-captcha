;(function (self) {
	self.mathCaptcha = function ({
		formClassSelector,
		captchaLabelSelector,
		captchaInputSelector,
		isValidStyleSelector,
	}) {
		const submitButton = document.querySelector(
			`${formClassSelector} input[type=submit]`
		)
		submitButton.setAttribute('disabled', 'disabled')

		const captchaLabel = document.querySelector(
			captchaLabelSelector
		)
		const captchaInput = document.querySelector(
			captchaInputSelector
		)

		const rndmNr1 = Math.floor(Math.random() * 10)
		const rndmNr2 = Math.floor(Math.random() * 10)
		const totalNr = rndmNr1 + rndmNr2

		captchaLabel.innerHtml = `${rndmNr1} + ${rndmNr2} =`
		captchaInput.setAttribute(
			'placeholder',
			`${rndmNr1} + ${rndmNr2} =`
		)

		captchaInput.addEventListener('keyup', () => {
			if (captchaInput.value == totalNr) {
				submitButton.removeAttribute('disabled')
				captchaInput.classList.add(isValidStyleSelector)
			} else {
				submitButton.setAttribute('disabled', 'disabled')
				captchaInput.classList.remove(isValidStyleSelector)
			}
		})
	}
})((globalThis.CodeCrumbs = globalThis.CodeCrumbs || {}))
