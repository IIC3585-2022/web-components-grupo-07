//const { LitElement } = require("lit-element");
import {
  html,
  LitElement,
  css,
} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class ItemCardLitComponent extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      alt: { type: String },
      mainText: { type: String },
      description: { type: String },
      buttonColor: { type: String },
      buttonTextColor: { type: String },
      buttonText: { type: String },
    };
  }

  constructor() {
    super();
    this.src = "";
    this.alt = "Texto alt";
    this.mainText = "Hola";
    this.description = "descipcion";
    this.buttonColor = "#00cc99";
    this.buttonTextColor = "white";
    this.buttonText = "Click aqui";
  }

  render() {
    return html`
      <div class="card-cont">
        <div class="img-cont">
          <img src="${this.src}" alt="${this.alt}" />
        </div>
        <div class="info-cont">
          <div class="top-info-cont">
            <div class="main-cont">
              <p>${this.mainText}</p>
              <p></p>
            </div>
            <div class="bottom-tag-cont">
              <button>${this.buttonText}</button>
            </div>
          </div>

          <div class="description">
            <p>${this.description}</p>
            <p></p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("item-lit-card", ItemCardLitComponent);
