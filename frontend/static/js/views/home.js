import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<h1>Welcome back, Irene!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
				ullamcorper ultricies. Donec ac ex auctor, fermentum nunc ut, tincidunt nunc. Sed
				quis nunc sit amet odio gravida ultricies. Nulla facilisi. Donec sed est nec nunc
				ullamcorper ultricies. Nullam nec purus nec nunc ullamcorper ultricies. Donec ac ex
			</p>
			<p><a href="/contact" data-link>Contact me</a></p>
			`;
	}
}
