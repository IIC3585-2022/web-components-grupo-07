class TodoItem extends HTMLElement {
  constructor() {
    super();
    //this._root = this.attachShadow({ 'mode': 'open' });
  }

  connectedCallback() {
    this.appendChild(templateTodoItem.content.cloneNode(true));
    this.$item = this.querySelector('.item');
    this.$removeButton = this.querySelector('.destroy');
    this.$text = this.querySelector('label');
    this.$removeButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('onRemove', { detail: this.index }));
    });
    this._render();
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._text = newValue;
  }

  set index(value) {
    this._index = value;
  }

  get index() {
    return this._index;
  }

  _render() {
    if (!this.$item) return;
    this.$text.textContent = this._text;
    this.$item.classList.remove('completed');
  }
}

const templateTodoItem = document.createElement('template');

templateTodoItem.innerHTML = `
    <li class="item">
        <label></label>
        <button class="destroy">x</button>
    </li>
`;

window.customElements.define('todo-item', TodoItem);
