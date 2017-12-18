
class RouteSpinner extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ["finding-route"];
  }

  get findingRoute() {
    return JSON.parse(this.getAttribute("finding-route"))
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.findingRoute ? `<paper-spinner-lite active></paper-spinner-lite>` : "";
  }
}

customElements.define('route-spinner', RouteSpinner);
