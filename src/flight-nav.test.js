import { FlightNav } from "./flight-nav.js";
import { expect } from 'chai';

describe('flight-nav', () => {
  it("works", () => {
    document.body.appendChild(document.createElement("flight-nav"));
    expect(document.querySelectorAll('flight-nav').length).to.equal(1);
    expect(document.querySelectorAll('leaflet-map').length).to.equal(1);
  });
});
