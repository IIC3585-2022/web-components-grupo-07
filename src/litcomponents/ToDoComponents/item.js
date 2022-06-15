import { LitElement, html } from 'lit-element';

export default class TodoItem extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
      },
      index: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    this.dispatchEvent(new CustomEvent('remove', { detail: this.index }));
  }

  render() {
    return html`
      <style>
        li {
          float: left;
          background-color: white;
        }
        a {
          text-decoration: none;
          font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
          padding: 5px 2px 15px 25px;
          color: #9a1032;
          letter-spacing: 0.3px;
          font-weight: bold;
        }
        li a:hover {
          background-color: #afada6;
        }
        li.item {
          background: white;
          font-size: 24px;
          display: block;
          position: relative;
        }
        li.item input {
          text-align: center;
          width: 40px;
          height: auto;
          position: absolute;
          top: 9px;
          bottom: 0;
          margin: auto 0;
          border: none;
          appearance: none;
        }
        li.item label {
          white-space: pre;
          word-break: break-word;
          padding: 15px 60px 5px 6px;
          display: block;
          line-height: 1.2;
          transition: color 0.4s;
        }
        li.item button {
          margin: 0;
          padding: 0;
          border: 0;
          background: none;
          font-size: 100%;
          vertical-align: baseline;
          font-family: inherit;
          font-weight: inherit;
          color: inherit;
          -webkit-appearance: none;
          appearance: none;
          -webkit-font-smoothing: antialiased;
          -moz-font-smoothing: antialiased;
        }
        li.item .destroy {
          position: absolute;
          top: 0;
          right: 10px;
          bottom: 0;
          width: 40px;
          height: 40px;
          margin: auto 0;
          font-size: 30px;
          color: #cc9a9a;
          margin-bottom: 11px;
          transition: color 0.2s ease-out;
        }
        li.item .destroy:hover {
          color: #af5b5e;
        }
      </style>

      <li class="item">
        <label>${this.text}</label>
        <button class="destroy" @click="${this.onRemove}">x</button>
      </li>
    `;
  }
}

window.customElements.define('lit-item', TodoItem);
