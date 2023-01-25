export default class DonateForm {
	render() {
		const BodyQs = document.querySelector("body")

		const formDonateForm = document.createElement("form")
		donateForm.className = "donate-form"
		BodyQs.append(formDonateForm)

		const h1TotalAmount = document.createElement("h1")
		h1TotalAmount.id = "total-amount"
		h1TotalAmount.textContent = "28$"
		formDonateForm.append(h1TotalAmount)

		const labelDonateForm = document.createElement("label")
		labelDonateForm.className = "donate-form__input-label"
		labelDonateForm.textContent = "Введите сумму в $"
		h1TotalAmount.append(labelDonateForm)

		const inputDonateForm = document.createElement("input")
		inputDonateForm.className = "donate-form__input-label"
		inputDonateForm.name = "amount"
		inputDonateForm.type = "number"
		inputDonateForm.max = "100"
		inputDonateForm.min = "1"
		inputDonateForm.required = ""

		const buttonDonateForm = document.createElement("button")
		buttonDonateForm.className = "donate-form__submit-button"
		buttonDonateForm.type = "submit"
		buttonDonateForm.textContent = "Задонатить"
		formDonateForm.append(buttonDonateForm)
	}
}
