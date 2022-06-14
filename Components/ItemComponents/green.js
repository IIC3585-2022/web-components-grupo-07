class Counter extends HTMLElement {
  connectedCallback() {
    this.text = this.getAttribute('text');
    this.innerHTML = `<div style='color: green'>Hey</div>
    <div style='color: green'>${this.text}</div>
    `;
  }
}

if (!customElements.get('counter-wc')) {
  customElements.define('counter-wc', Counter);
}
