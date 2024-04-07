import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<h1>404 Page Not Found!</h1>
			<p>
				We're sorry, but the page you're looking for doesn't exist.
			</p>
			`;
	}
}
