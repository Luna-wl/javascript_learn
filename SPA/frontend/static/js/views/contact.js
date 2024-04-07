import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<h1>Contact Me</h1>
			<p>
				Location: Melbourne, Australia<br>
				Phone: +61 123 456 789
			</p>
			`;
	}
}
