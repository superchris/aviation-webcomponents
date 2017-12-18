import { connect, dispatch } from "./reduxish.js";

const routeSelected = (state, route) => {
  console.log(route);
  setTimeout(() => {
    const fromQuery = fetch(`http://localhost:5000/airport-lookup/api/ap_info.json?icao=${route.from}`)
      .then((response) => response.json());
    const toQuery = fetch(`http://localhost:5000/airport-lookup/api/ap_info.json?icao=${route.to}`)
      .then((response) => response.json());
    Promise.all([fromQuery, toQuery]).then(([from, to]) => {
      console.log(from, to);
      dispatch("routeFound", {from, to});
    });
  }, 2000);
  return Object.assign(state, { findingRoute: true});
};

const routeFound = (state, route) => {
  return Object.assign(state, {findingRoute: false, route});
};

const reducers = { routeSelected, routeFound };

const subscribers = {
  "flight-nav": (state, element) => {
    state.route && element.setAttribute("route", JSON.stringify(state.route));
  },
  "route-spinner": (state, element) => {
    element.setAttribute("finding-route", state.findingRoute);
  }
};

connect(reducers, subscribers);
