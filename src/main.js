// try {
// 	const { Chart } = await import("../node_modules/chart.js/dist/chart.js");
// } catch (e) {
// 	console.error(e);
// }
const { invoke } = window.__TAURI__.tauri;
const ctx = document.getElementById("chartCanvas").getContext("2d");

// let greetInputEl;
// let greetMsgEl;
console.log("hola esquizo");
let getSeed;
let getK;
let getG;
let responseArray = [];
let responseLabel = [];

console.log("hola esquizo");

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }
async function algoritmo_congruencial_multiplicativo() {
	const seed = parseInt(getSeed.value);
	const k = parseInt(getK.value);
	const g = parseInt(getG.value);

	if (isNaN(seed) || isNaN(k) || isNaN(g)) {
		console.error(
			"Invalid input. Please enter valid numbers for seed, k, and g.",
		);
		return;
	}

	invoke("run_rgn", {
		seed: seed,
		k: k,
		g: g,
	}).then((response) => {
		console.log(response);
		responseArray = response;
	});
}
window.addEventListener("DOMContentLoaded", () => {
	// greetInputEl = document.querySelector("#greet-input");
	// greetMsgEl = document.querySelector("#greet-msg");
	getSeed = document.getElementById("seed");
	getK = document.getElementById("k");
	getG = document.getElementById("g");
	// console.log(getSeed);
	// console.log(getK);
	// console.log(getG);

	document.getElementById("btn-submit").addEventListener("click", (e) => {
		e.preventDefault();
		algoritmo_congruencial_multiplicativo();
		console.log("hola esquizo");
		// console.log(responseArray);

		responseLabel = responseArray.map((_, i) => i);
		// new Chart(ctx, {
		// 	type: "scatter",
		// 	data: {
		// 		labels: responseLabel,
		// 		datasets: [
		// 			{
		// 				data: responseArray,
		// 			},
		// 		],
		// 	},
		// }).catch((err) => {
		// 	console.log(err);
		// });
		// const chart = document.getElementById("chartCanvas").Chart;
	});
});
