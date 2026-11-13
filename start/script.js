// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.
const lavori = [
    {
        titolo: "Casa nel verde",
        anno: 2024, categoria: "residenziale",
        immagine: "../img/casa_nelverde.jpeg",

    },
    {
        titolo: "Appartamento luminoso",
        anno: 2023, categoria: "interni",
        immagine: "../img/luminoso.jpg",

    },
    {
        titolo: "Studio creativo",
        anno: 2024, categoria: "commerciale",
        immagine: "../img/studiocreativo.jpg",

    },
    {
        titolo: "Villa contemporanea",
        anno: 2022, categoria: "residenziale",
        immagine: "../img/villa.jpeg",

    },
    {
        titolo: "Loft urbano",
        anno: 2023, categoria: "interni",
        immagine: "../img/loft.jpg",

    },
    {
        titolo: "Boutique",
        anno: 2022, categoria: "commerciale",
        immagine: "../img/boutique.jpg",

    }
];

const griglia = document.querySelector("#griglia-lavori");
const filtri = document.querySelector("#filtri-lavori");

function mostraLavori(categoria = "tutti") {
    let filtrati;


    if (categoria === "tutti") {
        filtrati = lavori;
    } else {
        filtrati = lavori.filter(lavoro => lavoro.categoria === categoria);
    }

    griglia.innerHTML = filtrati.map(lavoro => `
  <div class="col-12 col-md-6 col-lg-4">
    <article class="card card_lavori h-100">
      <img
        src="${lavoro.immagine}"
        class="card-img-top"
        alt="${lavoro.titolo}"
      >
      <div class="card-body">
        <h3 class="card-title">${lavoro.titolo}</h3>
        <p class="card-text">${lavoro.anno} · ${lavoro.categoria}</p>
        
        <button type="button" class="btn btn-primary apri-popup">
            Scopri di più
        </button>
      </div>
    </article>
    
  </div>
`).join("");
}





filtri.addEventListener("click", event => {
    const pulsante = event.target.closest("button[data-categoria]");
    if (!pulsante) return;

    mostraLavori(pulsante.dataset.categoria);
});

mostraLavori();

const Tema = document.querySelector(".tema-toggle");

Tema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});



document.body.insertAdjacentHTML("beforeend", `
  <div class="popup" id="popupLavoro">
    <div class="popup-contenuto">
      <button type="button" class="chiudi-popup pop_b">X</button>
      <h2>Dettagli del lavoro</h2>
      <p>Qui puoi scrivere la descrizione del progetto.</p>
      <form>
      <div class="mb-3">
              <label for="none" class="form-label">Chi cerca?</label>
              <input type="text" class="form-control" id="input_name">
            </div>
            <button class="pop_invia">invia</button>
            <ul class="avviso">

            </ul>
      </form>
    </div>
  </div>
`);

const popup = document.querySelector("#popupLavoro");
griglia.addEventListener("click", event => {
  if (event.target.closest(".apri-popup")) {
    popup.classList.add("visibile");
  }

  if (event.target.closest(".chiudi-popup")) {
    popup.classList.remove("visibile");
  }
});
const popup_invia = document.querySelector("pop_invia");
popup_invia.addEventListener("click",()=>{
    const lista = document.createElement("li")
    
    avviso.appendChild(lista)
},2000);