const templateTodoItem = document.createElement('template');

class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this._index = this.index;
    this._text = '';
  }

  connectedCallback() {
    this.shadow.appendChild(templateTodoItem.content.cloneNode(true));
    this.$item = this.shadow.querySelector('.item');
    this.$removeButton = this.shadow.querySelector('.destroy');
    this.$text = this.shadow.querySelector('label');
    this.$removeButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('onRemove', { detail: this.index }));
    });
    this._render();
  }
  disconnectedCallback() {}
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

templateTodoItem.innerHTML = `
  <style>
    li {
      float: left;
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
    li.item {
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
    li.item.completed label {
      color: #d9d9d9;
      text-decoration: line-through;
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
      content: url('./png/checkbox.png');
    }
    
    

  
  </style>

    <li class="item">
        <label></label>
        <button class="destroy">x</button>
    </li>
`;

window.customElements.define('todo-item', TodoItem);
