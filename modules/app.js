import DonateForm from "./donate-form"
import DonateList from "./donate-list"
export default class App {
	#donateForm
	#donatelist
	constructor() {
		this.#donateForm = new DonateForm()
		this.#donateList = new DonateList()
	}
	run() {
		this.#donateForm.render()
		this.#donateList.render()
	}
}
