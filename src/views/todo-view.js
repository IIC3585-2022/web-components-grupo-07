import { LitElement, html } from 'lit-element';

class TodoView extends LitElement {
  render() {
    return html` <p>Hola mundo</p> `;
  }
}

customElements.define('todo-view', TodoView);
