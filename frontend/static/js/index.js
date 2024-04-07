import Home from "./views/home.js";
import About from "./views/about.js";
import NotFound from "./views/404.js";
import Contact from "./views/contact.js";

const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{ path: "404", view: NotFound},
		{ path: "/", view: Home },
		{ path: "/about", view: About },
		{ path: "/contact", view: Contact },
	];

	const potentialMatches = routes.map(route => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let isMatch = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

	if (!isMatch) {
		isMatch = {
			route: routes[0],
			isMatch: true,
		};
	}

	const view = new isMatch.route.view();

	document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});
	router();
});