function WebComponentView() {
  document.getElementById('Show').innerHTML = `
  
    <div class="todomain">
    <h1> Web Components Implementation</h1>
    </div>

    <h1>Que Comprar en Qatar</h1>
  
  <main>
  <div class="item-a">
    <item-card
      img="./src/img/Dulcesarabes.jpg"
      main="Dulces árabes"
      description="Catar es un destino famoso por su amplia variedad de dulces árabes de máxima calidad."
      buttonColor="#00cc99"
      buttonTextColor="white"
      id="_12234"
      buttonText="ر.ق21.15"
    >
    </item-card>
  </div>

  <div class="item-a">
    <item-card
      img="./src/img/Cafeterasdallah.jpg"
      main="Cafeteras dallah"
      description="Tradicional cafetera decorativa árabe de latón o plata utilizado en la antigua Catar para servir café qahwa."
      buttonColor="#00cc99"
      buttonTextColor="white"
      id="_12234"
      buttonText="422.96ر.ق"
    >
    </item-card>
  </div>

  <div class="item-a">
    <item-card
      img="./src/img/lamparas.jpg"
      main="Lámparas árabes"
      description="Lámparas árabes son objetos bellísimos que crean una atmósfera de ensueño en cualquier espacio."
      buttonColor="#00cc99"
      buttonTextColor="white"
      id="_12234"
      buttonText="ر.ق634.45"
    >
    </item-card>
  </div>

  <div class="item-b">
    <item-card
      img="./src/img/panuelos.jpg"
      main="Pashmina"
      description="Tejidos con lana de cachemir, aportan un toque de elegancia en una ocasión especial."
      buttonColor="red"
      buttonTextColor="white"
      id="_12234"
      buttonText="296.08ر.ق"
    >
    </item-card>
  </div>

  <div class="item-b">
    <item-card
      img="./src/img/Incienso.jpg"
      main="Incienso"
      description="Los encontrarás en Souq Waqif y Omani Souq, detrás del Mercado Central."
      buttonColor="#00cc99"
      buttonTextColor="black"
      id="_12234"
      buttonText="ر.ق424.5"

    >
    </item-card>
  </div>
  
  <div class="item-b">
  <item-card
    img="./src/img/TejidoAlSadu.jpg"
    main="Tejido Al Sadu"
    description="Con característicos diseños que simbolizan el legado cultural de Qatar y entorno desértico en el que habita."
    buttonColor="blue"
    buttonTextColor="white"
    id="_12234"
    buttonText="29.08ر.ق"
  >
  </item-card>
</div>

</main>


<div class="todomain">
  <my-todo titulo="Que Hacer en Qatar"></my-todo>
</div>
`;
}

function LitView() {
  document.getElementById('Show').innerHTML = `
  
    <div class="todomain">
    <h1> Lit Implementation</h1>
    </div>
     
    
    <h1>Que Comprar en Qatar</h1>
    
    <main>
    <div class="item-a">
        <item-lit-card
          src="./src/img/TejidoAlSadu.jpg"
          alt="Tejido Al Sadu"
          mainText="Tejido Al Sadu"
          description="Con característicos diseños que simbolizan el legado cultural de Qatar y entorno desértico en el que habita."
          buttonColor="#00cc99"
          buttonTextColor="white"
          buttonText="29.08ر.ق"
        >
 	</item-lit-card>
      </div>

 <div class="item-a">
        <item-lit-card
          src="./src/img/Incienso.jpg"
          alt="Incienso"
          mainText="Incienso"
          description="Los encontrarás en Souq Waqif y Omani Souq, detrás del Mercado Central."
          buttonColor="#00cc99"
          buttonTextColor="white"
          buttonText="ر.ق424.5"
        >
 	</item-lit-card>
      </div>

 <div class="item-a">
        <item-lit-card
          src="./src/img/panuelos.jpg"
          alt="Pashmina"
          mainText="Pashmina"
          description="Tejidos con lana de cachemir, aportan un toque de elegancia en una ocasión especial."
          buttonColor="#00cc99"
          buttonTextColor="white"
          buttonText="296.08ر.ق"
        >
 	</item-lit-card>
      </div>

<div class="item-b">
        <item-lit-card
          src="./src/img/Dulcesarabes.jpg"
          mainText="Dulces árabes"
          alt="Dulces árabes"
          description="Catar es un destino famoso por su amplia variedad de dulces árabes de máxima calidad."
          buttonColor="#00cc99"
          buttonTextColor="white"
          buttonText="ر.ق21.15"
        >
        </item-lit-card>
      </div>

      <div class="item-b">
        <item-lit-card
          src="./src/img/Cafeterasdallah.jpg"
          mainText="Cafeteras dallah"
          alt="Cafeteras dallah"
          description="Tradicional cafetera decorativa árabe de latón o plata utilizado en la antigua Catar para servir café qahwa."
          buttonColor="#00cc99"
          buttonTextColor="white"
          buttonText="422.96ر.ق"
        >
        </item-lit-card>
      </div>

      <div class="item-b">
        <item-lit-card
          src="./src/img/lamparas.jpg"
          mainText="Lámparas árabes"
          alt="Lámparas árabes"
          description="Lámparas árabes son objetos bellísimos que crean una atmósfera de ensueño en cualquier espacio."
          buttonColor="#00cc99"
          buttonTextColor="white"
          buttonText="ر.ق634.45"
        >
        </item-lit-card>
      </div>
    
    </main>

       
    <div class="todomain">
    <lit-todo promt="En Qatar Quiero..." title="Que Hacer en Qatar"></lit-todo>
    </div>
    `;
}
