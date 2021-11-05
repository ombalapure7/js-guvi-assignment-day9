const url = "https://restcountries.com/v2/all";

/* Get countries data fron the above URL */
async function getAllCountries() {
  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json();
  return data;
}

/* Get Asian countries */
async function countriesData() {
  const data = await getAllCountries();

  const asianCountries = data
    .filter((country) => {
      return country.region === "Asia";
    })
    .map((country) => {
      return country.name;
    });

  console.log(asianCountries);
  document.getElementById("asianCountries-content").innerHTML = asianCountries;
}

/* Countries with 2 Lakh Population */
async function twoLakhPopulation() {
  const data = await getAllCountries();

  const twoLakhPopulation = data
    .filter((country) => {
      return country.population <= 200000;
    })
    .map((country) => {
      return country.name;
    });

  console.log(twoLakhPopulation);
  document.getElementById("twoLakhPop-content").innerHTML = twoLakhPopulation;
}

/* Print name, capital and flag */
async function nameCapitalFlag() {
  const data = await getAllCountries();

  const nameCapitalFlagOfCountry = data.map((country) => {
    return {
      name: country.name,
      capital: country.capital,
      flag: country.flag,
    };
  });

  console.log(nameCapitalFlagOfCountry);
  document.getElementById("nameCapitalFlag-content").innerHTML = JSON.stringify(
    nameCapitalFlagOfCountry
  );
}

/* Print total population of all countries */
async function totalPopulation() {
  const data = await getAllCountries();

  const totalPopulation = data.reduce((acc, curr) => {
    acc += curr.population;
    return acc;
  }, 0);

  console.log(totalPopulation);
  document.getElementById("totalPopulation-content").innerHTML =
    totalPopulation;
}

/* Countries with US Dollar currency */
async function usDollarCountries() {
  const data = await getAllCountries();
  let usDollarCountires = [];

  data.forEach((ele) => {
    if (ele.currencies) {
      const country = ele;
      const currencies = country.currencies;
      currencies.forEach((currency) => {
        if (currency.name === "United States dollar") {
          usDollarCountires.push(country.name);
        }
      });
    }
  });

  document.getElementById("usDollarCountries-content").innerHTML =
    usDollarCountires;
}

window.onload = getAllCountries();
