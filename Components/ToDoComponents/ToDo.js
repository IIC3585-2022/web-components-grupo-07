const templateTodo = document.createElement('template');

class MyTodo extends HTMLElement {
  constructor() {
    super();
    //this._root = this.attachShadow({ 'mode': 'open' });
    //initial state

    this._list = [
      { text: 'Sacarme una foto con el Bicho.' },
      { text: 'Ver Como Chile levanta la copa.' },
      { text: 'Ir de compras al Omani Souq.' },
    ];
  }

  connectedCallback() {
    this.item2 = this.getAttribute('item2');

    this.appendChild(templateTodo.content.cloneNode(true));
    this.$input = this.querySelector('todo-input');
    this.$listContainer = this.querySelector('#list-container');
    this.$input.addEventListener('onSubmit', this.addItem.bind(this));
    this._render();
  }

  addItem2(e) {
    this._list.push({ text: e.detail });
  }
  addItem(e) {
    this._list.push({ text: e.detail });
    this._render();
  }

  removeItem(e) {
    this._list.splice(e.detail, 1);
    this._render();
  }

  toggleItem(e) {
    const item = this._list[e.detail];
    this._list[e.detail] = Object.assign({}, item, {
      checked: !item.checked,
    });
    this._render();
  }

  get items() {
    const items = [];

    [...this.attributes].forEach((attr) => {
      if (attr.name.includes('item')) {
        items.push(attr.value);
      }
    });

    return items;
  }

  get addItemText() {
    return this.getAttribute('add-item-text') || '';
  }

  disconnectedCallback() {}

  _render() {
    if (!this.$listContainer) return;
    this.querySelector('h1').innerHTML = this.getAttribute('titulo');
    this.$listContainer.innerHTML = '';

    this._list.forEach((item, index) => {
      let $item = document.createElement('todo-item');
      $item.setAttribute('text', item.text);
      $item.checked = item.checked;
      $item.index = index;
      $item.addEventListener('onRemove', this.removeItem.bind(this));
      $item.addEventListener('onToggle', this.toggleItem.bind(this));
      this.$listContainer.appendChild($item);
    });
  }
}

templateTodo.innerHTML = `
    <style>
    </style>
    <section>
        <h1></h1>
        <todo-input ></todo-input>
        <ul id="list-container"></ul>
    </section>
`;

window.customElements.define('my-todo', MyTodo);
