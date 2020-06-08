// fetch covid data and later set it object cards

let countriesData = null;

let elementIds = {
  confirmed: "confirmed",
  active: "active",
  recovered: "recovered",
};

function fetchData() {
  // use js fetch
  const apiURL = "https://api.covid19india.org/data.json";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      let summaryData = data.statewise[0];
      document.getElementById(elementIds.confirmed).textContent =
        summaryData.confirmed;
      document.getElementById(elementIds.active).textContent =
        summaryData.active;
      document.getElementById(elementIds.recovered).textContent =
        summaryData.recovered;
    })
    .catch((error) => console.log("api data fetch error", error));
}

fetchData();
