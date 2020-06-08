// fetch covid data and later set it to object cards
(function () {
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
        document.getElementById(elementIds.confirmed).textContent = Number(
          summaryData.confirmed
        ).toLocaleString("en-IN");
        document.getElementById(elementIds.active).textContent = Number(
          summaryData.active
        ).toLocaleString("en-IN");
        document.getElementById(elementIds.recovered).textContent = Number(
          summaryData.recovered
        ).toLocaleString("en-IN");
      })
      .catch((error) => console.log("api data fetch error", error));
  }
  // comment this method while developing to save api calls
  fetchData();
})();
