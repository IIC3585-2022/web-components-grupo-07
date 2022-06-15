import { LitElement, html } from 'lit-element';

export default class MyTodo extends LitElement {
  constructor() {
    super();
    this.list = [
      { text: 'Sacarme una foto con el Bicho.' },
      { text: 'Ver Como Chile levanta la copa.' },
      { text: 'Ir de compras al Omani Souq.' },
    ];
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(e, text) {
    this.list = [...this.list, { text, checked: false }];
    this.requestUpdate('list');
  }

  removeItem(e, index) {
    this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
    this.requestUpdate('list');
  }

  render() {
    return html` <style>
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: white;
          background-color: white;
        }
        li {
          float: left;
        }

        h1 {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-style: normal;
          font-size: 30px;
          background-color: white;
          text-align: center;
          color: white;
          background: #61001f;
        }

        section {
          background: white;
          margin: 30px 0 40px 0;
          position: relative;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
            0 25px 50px 0 rgba(0, 0, 0, 0.1);
        }
        #list-container {
          margin: 0;
          padding: 0;
          list-style: none;
          background: white;
        }
        li.item {
          font-size: 24px;
          display: block;
          position: relative;
          background: white;
        }
        header nav ul .sub-menu {
          position: absolute;
          flex-direction: column;
          justify-content: left;
          align-items: start;
          background: white;
          display: none;
        }
        header nav ul .sub-menu {
          content: '';
          position: absolute;
          background: white;
        }
        header nav ul .sub-menu li {
          padding: 10px;
          background: white;
        }
        #lit-item {
          background: white;
          background-color: white;
        }
      </style>
      <section id="lit-section">
        <h1>Que Hacer en Qatar</h1>
        <lit-input @submit="${(e) => this.addItem(e, e.detail)}"></lit-input>
        ${this.list.map(
          (item, index) => html` <lit-item
            .text=${item.text}
            .index=${index}
            @remove="${(e) => this.removeItem(e, e.detail)}"
          ></lit-item>`
        )}
        <ul id="list-container"></ul>
      </section>`;
  }
}

customElements.define('lit-todo', MyTodo);
