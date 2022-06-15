class ItemCardComponent extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement('template');
    this.template.innerHTML = templateItemCard;

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  render() {
    this.shadow.querySelector('img').src = this.getAttribute('img');
    this.shadow.querySelector('img').alt = this.getAttribute('main') + 'Image';
    this.shadow.querySelector('.main-cont').querySelector('p').innerHTML =
      this.getAttribute('main');
    this.shadow.querySelector('.description').querySelector('p').innerHTML =
      this.getAttribute('description');
    this.buttonColor = this.getAttribute('buttonColor');
    this.buttonTextColor = this.getAttribute('buttonTextColor');
    this.shadow.querySelector(
      'button'
    ).style = `background-color: ${this.buttonColor}; color: ${this.buttonTextColor}`;

    this.buttonText = this.getAttribute('buttonText');
    this.shadow.querySelector('button').innerHTML = this.buttonText;
  }

  connectedCallback() {
    this.shadow.appendChild(this.template.content.cloneNode(true));
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
}

templateItemCard = `
    <style>
    button{
        min-width: 7rem;
        height: 1.8rem;
        border-radius: .5rem;
        border: none;
        background-color: ${this.buttonColor} ;

        font-weight: 300;
        font-size: .7rem;
				font-weight: bold;
    }
    img{
        width: 100%;
        min-height: 100%;
    }
    .card-cont{
        font-family: Segoe UI, sans-serif;
        font-size: .98rem;
        position: relative;
        background-color: none;
        width: 20.3rem;
        height: 20rem;
        color: #9a1032;
				
    }
    .img-cont{
        background-color: grey;
        width: 15rem;
        height: 15rem;
        overflow: hidden;
				border-radius: 1rem;
    		box-shadow: 30px 30px 50px rgba(1,1,1,.3);
    }
    .info-cont{
        position: absolute;
        background-color:  white;
        width: 13rem;
        top: 13rem;
        left: 3rem;
        border-radius: .6rem;
        padding: .5rem 1rem;
        box-shadow: 0px 0px 8px rgba(1,1,1,.3);
				height: 10rem;
				box-shadow: 30px 30px 50px rgba(1,1,1,.3)
    }
		.top-info-cont{
			display: flex;
			justify-content: center;
			min-height: 50%;
			width: 100%;
		}
    .bottom-tag-cont{
        display: flex;
        justify-content: center;
        align-items: right;
        width: 50%;
    }
    .main-cont{
        display: flex;
        font-weight: 700;
				width: 40%;

    }
    .description{
        font-size: .65rem;
        text-align: left;
				font-weight: bold;
        width: 100%;
				color: #707070;

    }
    </style> 
    <div class='card-cont'>
        <div class='img-cont'>
            <img src='${this.img}' alt='${this.main}'/>
        </div>
        <div class='info-cont'>
						<div class='top-info-cont'>
							<div class='main-cont'><p>${this.main}<p></div>
							<div class='bottom-tag-cont'>
                <button>${this.buttonText}</button>
            </div>
						</div>
            
						<div class='description'><p>${this.subOne}<p></div>
            
        </div>
    </div>        
`;

window.customElements.define('item-card', ItemCardComponent);
