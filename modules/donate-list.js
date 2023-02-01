export default class DonateList {
	constructor(donates) {
		this.donates = donates
	}
	render() {
		const BodyQs = document.querySelector("body")

		const divDonatesContainer = document.createElement("div")
		divDonatesContainer.className = "donates-container"
		BodyQs.append(divDonatesContainer)

		const h2ContainerTitle = document.createElement("h2")
		h2ContainerTitle.id = "donates-container__title"
		h2ContainerTitle.textContent = "Список донатов"
		divDonatesContainer.append(h2ContainerTitle)

		const divContainerDonates = document.createElement("div")
		divContainerDonates.className = "donates-container__donates"
		divContainerDonates.textContent = "Введите сумму в $"
		h2ContainerTitle.append(divContainerDonates)

		this.itemWritter()
	}

	itemWritter() {
		const mockDonates = [
			{ amount: 4, date: new Date() },
			{ amount: 20, date: new Date() },
			{ amount: 3, date: new Date() },
			{ amount: 1, date: new Date() },
		]
		for (let i = 0; i < mockDonates.length; i++) {
			const divDonateItem = document.createElement("div")
			divDonateItem.className = "donate-item"
			divDonateItem.textContent = `${mockDonates[i].date} - `
			divContainerDonates.append(divDonateItem)

			boldDonateItem = document.createElement("b")
			boldDonateItem.textContent = `${mockDonates[i].amount}`
			divDonateItem.append(boldDonateItem)
		}
	}
}
