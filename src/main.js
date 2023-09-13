const { invoke } = window.__TAURI__.tauri;
const ctx = document.getElementById("chartCanvas").getContext("2d");

const { Chart } = await import("chart.js");
// let greetInputEl;
// let greetMsgEl;

let getSeed;
let getK;
let getG;
let response = [];
let responseLabel = [];

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }
async function algoritmo_congruencial_multiplicativo(_seed, _k, _g) {
  return await invoke("run_rgn", { seed: _seed, k: _k, g: _g }).then(
    (response) => {
      console.log(response);
      return response;
    },
  );
}
console.log("praise the omnissiah");
window.addEventListener("DOMContentLoaded", () => {
  // greetInputEl = document.querySelector("#greet-input");
  // greetMsgEl = document.querySelector("#greet-msg");
  getSeed = document.getElementById("seed");
  getK = document.getElementById("k");
  getG = document.getElementById("g");

  document.getElementById("btn-submit").addEventListener("click", (e) => {
    e.preventDefault();
    response = algoritmo_congruencial_multiplicativo(
      getSeed.value,
      getK.value,
      getG.value,
    );
    console.log("hola esquizo");
    console.log(response);

    responseLabel = response.map((_, i) => i);
    new Chart(ctx, {
      type: "scatter",
      data: {
        labels: responseLabel,
        datasets: [
          {
            data: response,
          },
        ],
      },
    }).catch((err) => {
      console.log(err);
    });
    const chart = document.getElementById("chartCanvas").Chart;
  });
});
