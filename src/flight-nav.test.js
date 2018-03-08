import { FlightNav } from "./flight-nav.js";
import { expect } from 'chai';

describe('flight-nav', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = document.createElement("div", {id: "sandbox"})
    document.body.appendChild(sandbox);
  });
  it("renders without trip", () => {
    sandbox.appendChild(document.createElement("flight-nav"));
    expect(document.querySelectorAll('flight-nav').length).to.equal(1);
    expect(document.querySelectorAll('leaflet-map').length).to.equal(1);
    expect(document.querySelectorAll("leaflet-point").length).to.equal(0);
  });
  it("renders a trip", () => {
    const flightNav = document.createElement("flight-nav");
    sandbox.appendChild(flightNav);
    flightNav.setAttribute("route", JSON.stringify({
      from: {
        latitude: 1,
        longitude: 2
      },
      to: {
        latitude: 3,
        longitude: 4
      }
    }));
    const leafletPoints = flightNav.querySelectorAll("leaflet-point");
    expect(leafletPoints.length).to.equal(2);
    expect(leafletPoints[0].getAttribute("latitude")).to.equal('1');
  });
  afterEach(() => {
    sandbox.remove();
  });
});
