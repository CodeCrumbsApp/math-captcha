;(function (global) {
	global.mathCaptcha = function ({
		formClassSelector,
		captchaLabelSelector,
		captchaInputSelector,
		validTargetAttribute = 'valid-captcha-class',
		invalidTargetAttribute = 'invalid-captcha-class',
		removeClassesOnEmptyInput = true,
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
			if (
				captchaInput.value == '' &&
				removeClassesOnEmptyInput
			) {
				submitButton.setAttribute('disabled', 'disabled')
				removeValidClassesFromElements()
				removeInvalidClassesFromElements()
			} else if (captchaInput.value == totalNr) {
				submitButton.removeAttribute('disabled')
				addValidClassesToElements()
				removeInvalidClassesFromElements()
			} else {
				submitButton.setAttribute('disabled', 'disabled')
				removeValidClassesFromElements()
				addInvalidClassesToElements()
			}
		})

		const addValidClassesToElements = () => {
			const elements = document.querySelectorAll(
				`[${validTargetAttribute}]`
			)
			elements.forEach((element) => {
				const validClass = element.getAttribute(
					`${validTargetAttribute}`
				)
				element.classList.add(validClass)
			})
		}

		const addInvalidClassesToElements = () => {
			const elements = document.querySelectorAll(
				`[${invalidTargetAttribute}]`
			)
			elements.forEach((element) => {
				const invalidClass = element.getAttribute(
					`${invalidTargetAttribute}`
				)
				element.classList.add(invalidClass)
			})
		}

		const removeValidClassesFromElements = () => {
			const elements = document.querySelectorAll(
				`[${validTargetAttribute}]`
			)
			elements.forEach((element) => {
				const validClass = element.getAttribute(
					`${validTargetAttribute}`
				)
				element.classList.remove(validClass)
			})
		}

		const removeInvalidClassesFromElements = () => {
			const elements = document.querySelectorAll(
				`[${invalidTargetAttribute}]`
			)
			elements.forEach((element) => {
				const invalidClass = element.getAttribute(
					`${invalidTargetAttribute}`
				)
				element.classList.remove(invalidClass)
			})
		}
	}
})((globalThis.CodeCrumbs = globalThis.CodeCrumbs || {}))
