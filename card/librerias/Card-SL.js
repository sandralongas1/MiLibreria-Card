class Tarjeta extends HTMLElement {
  constructor() {
    super();

    // Creamos un shadow DOM
    this.attachShadow({ mode: "open" });

    // Definimos la estructura del componente
    this.shadowRoot.innerHTML = `
      <style>
       /* Contenedor de la card */
        .card-container {
            perspective: 1000px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .tarjeta {
            width: 200px;
            height: 300px;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;
            cursor: pointer;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .fotoCard{
            width:100%;
            border-radius: 10px;          
        }

        .comunF{
          position: absolute;
          padding:3px;
          background-color:rgba(255,255,255, 0.3);
          border-radius: 8px;
          text-align: center;
          max-width:95%;
          word-wrap:break-word;
          overflow-wrap:break-word;
          white-space:normal;
        }

        .comunR{
          text-align: center;
          max-width:95%;
          word-wrap:break-word;
          overflow-wrap:break-word;
          white-space:normal;
        }

        .tituloF{
          top:6%;
        }
        .subtituloF{
          top:40%;
        }
        .descripcionF{
          top:45%;
        }
        
        .descripcionR{
          text-align: center; 
        }

        .tarjeta.girar {
            transform: rotateY(180deg);
        }

         /* Lados de la card */
          .card-front, .card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          /* Diseño del frente */
          .card-front {
              background: linear-gradient(135deg,rgb(228, 209, 133),rgb(214, 141, 124));
          }

          /* Diseño del reverso */
          .card-back {
              background: linear-gradient(135deg,rgb(241, 171, 156),rgb(226, 211, 153));
              transform: rotateY(180deg);
          }

          /* Cuando se gira */
          .tarjeta.girar {
              transform: rotateY(180deg);
          }
      </style>
 
      <div class="card-container">
        <div class="tarjeta">
            <div class="card-front">
                 <img class="fotoCard" src="" alt="Pon tu imagen">
                <h2 class="comunF tituloF"></h2>
                <h3 class="comunF subtituloF"></h3>
                <p class="comunF descripcionF"></p>
            </div>
            <div class="card-back">
                <h2 class="comunR tituloR"></h2>
                <h3 class="comunR subtituloR"></h3>
                <p class="comunR descripcionR"></p>
            </div>
        </div>
    </div>
    `;
  }

  connectedCallback() {
    // ----------------------------------FRONTAL--------------------------------------
    this.shadowRoot.querySelector(".tituloF").textContent = this.getAttribute("tituloF") || "Título Frontal";
    // -------------------------------
    this.shadowRoot.querySelector(".subtituloF").textContent = this.getAttribute("subtituloF") || "Subtítulo";
    // -------------------------------
    if (this.getAttribute("descripcionF")) {
      this.shadowRoot.querySelector(".descripcionF").textContent = this.getAttribute("descripcionF");
    } else {
      this.shadowRoot.querySelector(".descripcionF").style = "display: none";
    }
    
    // ------------------ Imagen personalizada en el frente --------------------
    const imagen = this.getAttribute("imagen");
    const imagenElemento = this.shadowRoot.querySelector(".fotoCard");
    if (imagen) {
      imagenElemento.src = imagen;
    } else {
      imagenElemento.alt = "Imagen no disponible";  // Mensaje en caso de no haber imagen
    }
    // ----------------------------------REVERSO--------------------------------------
    if (this.getAttribute("tituloR")) {
      this.shadowRoot.querySelector(".tituloR").textContent = this.getAttribute("tituloR");
    } else {
      this.shadowRoot.querySelector(".tituloR").style = "display: none";
    }
    // -------------------------------
    if (this.getAttribute("subtituloR")) {
      this.shadowRoot.querySelector(".subtituloR").textContent = this.getAttribute("subtituloR");
    } else {
      this.shadowRoot.querySelector(".subtituloR").style = "display: none";
    }
    // -------------------------------
    this.shadowRoot.querySelector(".descripcionR").textContent = this.getAttribute("descripcionR") || "Descripción";
    
    // Evento para girar la tarjeta
    const tarjeta = this.shadowRoot.querySelector(".tarjeta");
    tarjeta.addEventListener("click", () => {
      tarjeta.classList.toggle("girar");
    });
  }
}

customElements.define("mi-card", Tarjeta);
