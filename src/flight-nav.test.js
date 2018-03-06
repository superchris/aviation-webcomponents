import { FlightNav } from "./flight-nav.js";
import { mount } from '@skatejs/bore';

test('flight-nav', () => {
  const wrapper = mount("<flight-nav></flight-nav>");
  expect(wrapper.all({localName: 'leaflet-map'}).length).toEqual(1);
});
