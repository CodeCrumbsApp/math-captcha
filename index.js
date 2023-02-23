;(function (global) {
	global.mathCaptcha = function ({
		formClassSelector,
		captchaLabelSelector,
		captchaInputSelector,
		targetAttribute = 'valid-captcha-class',
	}) {
		const form = document.querySelector(formClassSelector)
		const submitButton = form.querySelector(
			'input[type=submit]'
		)

		submitButton.setAttribute('disabled', 'disabled')

		const captchaLabel = document.querySelector(
			captchaLabelSelector
		)
		const captchaInput = document.querySelector(
			captchaInputSelector
		)

		if (!form) {
			throw new Error(
				`No form found with the selector ${formClassSelector}`
			)
		}

		if (!submitButton) {
			throw new Error(
				`No submit button found on the form with the selector ${formClassSelector}`
			)
		}

		if (!captchaLabel) {
			throw new Error(
				`No captcha label found with the selector ${captchaLabelSelector}`
			)
		}

		if (!captchaInput) {
			throw new Error(
				`No captcha input found with the selector ${captchaInputSelector}`
			)
		}

		const rndmNr1 = Math.floor(Math.random() * 10)
		const rndmNr2 = Math.floor(Math.random() * 10)
		const totalNr = rndmNr1 + rndmNr2

		if (captchaLabelSelector) {
			captchaLabel.innerHtml = `${rndmNr1} + ${rndmNr2} =`
		}

		captchaInput.setAttribute(
			'placeholder',
			`${rndmNr1} + ${rndmNr2} =`
		)

		captchaInput.addEventListener('keyup', () => {
			if (captchaInput.value == totalNr) {
				submitButton.removeAttribute('disabled')
				addValidClassToElements()
			} else {
				submitButton.setAttribute('disabled', 'disabled')
				removeValidClassToElements()
			}
		})

		const addValidClassToElements = () => {
			console.log('addValidClassToElements')
			const elements = document.querySelectorAll(
				`[${targetAttribute}]`
			)
			elements.forEach((element) => {
				const validClass = element.getAttribute(
					`${targetAttribute}`
				)
				element.classList.add(validClass)
			})
		}

		const removeValidClassToElements = () => {
			console.log('removeValidClassToElements')
			const elements = document.querySelectorAll(
				`[${targetAttribute}]`
			)
			elements.forEach((element) => {
				const validClass = element.getAttribute(
					`${targetAttribute}`
				)
				element.classList.remove(validClass)
			})
		}
	}
})((globalThis.CodeCrumbs = globalThis.CodeCrumbs || {}))
