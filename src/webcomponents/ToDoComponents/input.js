const templateTodoInput = document.createElement('template');
templateTodoInput.innerHTML = `
    <style>
    .input {
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        color: #595959;
        font-size: 1.1rem;
        outline: none;
        padding: .5rem 1rem;
        vertical-align: middle;
        width: 80%;
        
    }
    .button:hover {
        background: #00b386;
        cursor: pointer;
    }
    .button {
        background: #00cc99;
        border: none;
        border-radius: 3px;
        color: #fdfdfd;
        outline: none;
        padding: .75rem;
        vertical-align: middle;
  
    }
    #new-todo-form {
        font-size: 24px;
        color: #111;
        background: #61001f;
        color: white;
      }
      
    .input:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
        color: white;   
    } 
    </style>
    <form id="new-todo-form">
        <input id="new-todo"  maxlength="120" type="text" placeholder="En Qatar Quiero:">
        <button class="button" type="submit">Add</button>
    </form>
`;

class TodoInput extends HTMLElement {
  constructor() {
    super();
    //this._root = this.attachShadow({ 'mode': 'open' });
  }

  connectedCallback() {
    this.appendChild(templateTodoInput.content.cloneNode(true));
    this.$form = this.querySelector('form');
    this.$input = this.querySelector('input');
    this.$form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!this.$input.value) return;
      this.dispatchEvent(
        new CustomEvent('onSubmit', { detail: this.$input.value })
      );
      this.$input.value = '';
    });
  }

  disconnectedCallback() {}
}

window.customElements.define('todo-input', TodoInput);
