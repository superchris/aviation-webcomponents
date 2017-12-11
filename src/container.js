document.querySelector("route-form").addEventListener("routeSelected", ({ detail: route }) => {
  console.log(route);
  const fromQuery = fetch(`http://localhost:5000/airport-lookup/api/ap_info.json?icao=${route.from}`)
    .then((response) => response.json());
  const toQuery = fetch(`http://localhost:5000/airport-lookup/api/ap_info.json?icao=${route.to}`)
    .then((response) => response.json());
  Promise.all([fromQuery, toQuery]).then(([from, to]) => {
    console.log(from, to);
    document.querySelector("flight-nav").setAttribute("route", JSON.stringify({from, to}));
  });
})
