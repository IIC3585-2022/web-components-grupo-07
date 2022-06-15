const templateTodoInput = document.createElement('template');

templateTodoInput.innerHTML = `
    <style>
    .input {
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        color: black;
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
    a {
      text-decoration: none;
      font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
      padding: 5px 2px 15px 25px;
      color: #9a1032;
      letter-spacing: 0.3px;
      font-weight: bold;
    }
    html,
      body {
        margin: 0;
        padding: 0;
      }
    
      #new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: #0784fa01;
        position: relative;
        margin: 0;
        width: 90%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
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
    //this.template = document.createElement('template');
    //this.template.innerHTML = templateTodoInput;
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.appendChild(templateTodoInput.content.cloneNode(true));
    this.$form = this.shadow.querySelector('form');
    this.$input = this.shadow.querySelector('input');
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

customElements.define('todo-input', TodoInput);
