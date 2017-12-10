document.querySelector("route-form").addEventListener("routeSelected", ({ detail: route }) => {
  console.log(route);
  fetch(`http://localhost:5000/airport-lookup/api/ap_info.json?icao=${route.from}`)
    .then((response) => response.json())
    .then((data) => {
      const fullRoute = { from: data};
      fetch(`http://localhost:5000/airport-lookup/api/ap_info.json?icao=${route.to}`)
        .then((response) => response.json())
        .then((data) => {
          fullRoute.to = data;
          document.querySelector("flight-nav").setAttribute("route", JSON.stringify(fullRoute));
        });
    });
})
