
async function fetchData() {
	try {
		const pokeName = document.getElementById("pokeName").value.toLowerCase();

		const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
		if (!respone.ok) {
			throw new Error("Could not fetch data");
		}
		const data = await respone.json();
		const pokeSprite = data.sprites.front_default;
		const pokeImg = document.getElementById("pokemonSprite");

		pokeImg.src = pokeSprite;
		pokeImg.style.display = "block";
	}
	catch (error) {
		console.error(error);
	}
}