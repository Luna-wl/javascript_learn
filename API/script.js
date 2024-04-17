
async function fetchData() {
	try {
		const pokeName = document.getElementById("pokeName").value.toLowerCase();

		const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
		if (!respone.ok) {
			const pokeText = document.getElementById("pokemonData");
			pokeText.innerHTML = "Pokemon not found";
			return;
		}
		const data = await respone.json();
		const pokeSprite = data.sprites.front_default;

		const pokeText = document.getElementById("pokemonData");
		if (pokeText.innerHTML !== "") {
			pokeText.innerHTML = "";
		}
		const pokeImg = document.getElementById("pokemonSprite");

		pokeImg.src = pokeSprite;
		pokeImg.style.display = "block";
	}
	catch (error) {
		console.error(error);
	}
}

document.getElementById("pokeName").addEventListener("keydown", async function(e) {
	if (e.key === "Enter") {
		e.preventDefault();
		await fetchData();
	}
}); 