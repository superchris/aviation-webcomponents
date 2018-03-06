
export class FlightNav extends HTMLElement {

  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["route"];
  }

  get route() {
    return JSON.parse(this.getAttribute("route"))
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <leaflet-map latitude="39.36" longitude="-84.52" zoom="10">
      <leaflet-tilelayer-wms
        url="http://wms.chartbundle.com/wms"
        layers="sec" >

            Sectional charts

      </leaflet-tilelayer-wms>
      <leaflet-polyline>
        ${ this.route && `
          <leaflet-point latitude="${this.route.from.latitude}" longitude="${this.route.from.longitude}"></leaflet-point>
          <leaflet-point latitude="${this.route.to.latitude}" longitude="${this.route.to.longitude}"></leaflet-point>
        `}
      </leaflet-polyline>
    </leaflet-map>
    `;
  }
}

customElements.define("flight-nav", FlightNav);
