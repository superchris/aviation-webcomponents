class RouteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.render();
  }

  $(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <form>
        <input type="text" name="from" />
        <input type="text" name="to" />
        <input type="button" value="Display route" />
      </form>
    `;
    this.$("input[type=button]").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("routeSelected", {
        detail: {
          from: this.$("input[name=from]").value,
          to: this.$("input[name=to]").value
        }
      }));
    });
  }
}

customElements.define('route-form', RouteForm);
