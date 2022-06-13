const templateTodoInput = document.createElement('template');
templateTodoInput.innerHTML = `
    <form id="new-todo-form">
        <input id="new-todo" type="text" placeholder="I need to:">
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
        this.$form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!this.$input.value) return;
            this.dispatchEvent(new CustomEvent('onSubmit', { detail: this.$input.value }));
            this.$input.value = '';
        });
    }

    disconnectedCallback() {
    }
}

window.customElements.define('todo-input', TodoInput);