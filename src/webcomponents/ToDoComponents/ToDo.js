const templateTodo = document.createElement('template');

class MyTodo extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this._list = [
      { text: 'Sacarme una foto con el Bicho.' },
      { text: 'Ver Como Chile levanta la copa.' },
      { text: 'Ir de compras al Omani Souq.' },
    ];
  }

  connectedCallback() {
    //this.item2 = this.getAttribute('item2');
    this.shadow.appendChild(templateTodo.content.cloneNode(true));
    this.$input = this.shadow.querySelector('todo-input');
    this.$listContainer = this.shadow.querySelector('#list-container');
    this.$input.addEventListener('onSubmit', this.addItem.bind(this));
    this._render();
  }

  addItem(e) {
    this._list.push({ text: e.detail });
    this._render();
  }

  removeItem(e) {
    this._list.splice(e.detail, 1);
    this._render();
  }

  disconnectedCallback() {}

  _render() {
    if (!this.$listContainer) return;
    this.shadow.querySelector('h1').innerHTML = this.getAttribute('titulo');
    this.$listContainer.innerHTML = '';
    this._list.forEach((item, index) => {
      let $item = document.createElement('todo-item');
      $item.setAttribute('text', item.text);
      $item.checked = item.checked;
      $item.index = index;
      $item.addEventListener('onRemove', this.removeItem.bind(this));
      this.$listContainer.appendChild($item);
    });
  }
}

templateTodo.innerHTML = `
  <style>
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: white;
    }
    li {
      float: left;
    }
    body {
      font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.4em;
      background: #61001f;
      color: black;
      min-width: 230px;
      max-width: 550px;
      margin: 0 auto;
      font-weight: 300;
    }
    
    h1 {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-style: normal;
      font-size: 30px;
    
      text-align: center;
      color: white;
      background: #61001f;
    }
    section {
      background: #ffffff;
      margin: 30px 0 40px 0;
      position: relative;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
    #list-container {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li.item {
      font-size: 24px;
      display: block;
      position: relative;
    }
    header nav ul .sub-menu {
      position: absolute;
      flex-direction: column;
      justify-content: left;
      align-items: start;
      background: var(--secondary-color);
      display: none;
    }
    header nav ul .sub-menu {
      content: '';
      position: absolute;
    }
    header nav ul .sub-menu li {
      padding: 10px;
    }
    
  </style>
  <section>
      <h1></h1>
      <todo-input ></todo-input>
      <ul id="list-container"></ul>
  </section>
`;

customElements.define('my-todo', MyTodo);
