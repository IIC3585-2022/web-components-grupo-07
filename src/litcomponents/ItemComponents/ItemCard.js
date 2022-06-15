import { LitElement, html } from 'lit-element';

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
    this.src = '';
    this.alt = '';
    this.mainText = '';
    this.description = '';
    this.buttonColor = '';
    this.buttonTextColor = '';
    this.buttonText = '';
  }

  render() {
    return html`
      <style>
        button {
          min-width: 7rem;
          height: 1.8rem;
          border-radius: 0.5rem;
          border: none;
          background-color: ${this.buttonColor};
          color: ${this.buttonTextColor};
          font-weight: 300;
          font-size: 0.7rem;
          font-weight: bold;
        }
        img {
          width: 100%;
          min-height: 100%;
        }
        .card-cont {
          font-family: Segoe UI, sans-serif;
          font-size: 0.98rem;
          position: relative;
          background-color: none;
          width: 20.3rem;
          height: 20rem;
          color: #9a1032;
        }
        .img-cont {
          background-color: grey;
          width: 15rem;
          height: 15rem;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 30px 30px 50px rgba(1, 1, 1, 0.3);
        }
        .info-cont {
          position: absolute;
          background-color: white;
          width: 13rem;
          top: 13rem;
          left: 2rem;
          border-radius: 0.6rem;
          padding: 0.5rem 1rem;
          box-shadow: 0px 0px 8px rgba(1, 1, 1, 0.3);
          height: 10rem;
          box-shadow: 30px 30px 50px rgba(1, 1, 1, 0.3);
        }
        .top-info-cont {
          display: flex;
          justify-content: center;
          min-height: 50%;
          width: 100%;
        }
        .bottom-tag-cont {
          display: flex;
          justify-content: center;
          align-items: right;
          width: 50%;
        }
        .main-cont {
          display: flex;
          font-weight: 700;
          width: 40%;
        }
        .description {
          font-size: 0.65rem;
          text-align: left;
          font-weight: bold;
          width: 100%;
          color: #707070;
        }
      </style>
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

customElements.define('item-lit-card', ItemCardLitComponent);
