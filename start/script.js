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
        
        <button type="button" class="btn btn-dettagli apri-popup">
         Scopri il progetto
        <span aria-hidden="true">→</span>
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
      <button type="button" class="chiudi-popup ">X</button>
      <h2>Dettagli del lavoro</h2>
      <p>Qui puoi scrivere la descrizione del progetto.</p>

    <div class="d-flex flex-column gap-2">
      <label for="input_posizione">Posizione?</label>
        <input type="text" placeholder="Inserisci posizione" id="input_posizione">
      </div>
      <div class="d-flex flex-column gap-2">

      <label for="input_namepop">Nome prenotazione?</label>
        <input type="text" placeholder="Inserisci il tuo nome" id="input_namepop">
      <button type="button" class="pop_invia">Invia</button></div>

      <ul class="avviso"></ul>
    </div>
  </div>
`);



const popup_invia = document.querySelector(".pop_invia");
const input_namepop = document.querySelector("#input_namepop");
const avviso = document.querySelector(".avviso");
const popup = document.querySelector("#popupLavoro");
const chiudi_pop = document.querySelector(".chiudi-popup")



griglia.addEventListener("click", event => {
  if (event.target.closest(".apri-popup")) {
    popup.classList.add("visibile");
  }
});

chiudi_pop.addEventListener("click", () => {
  popup.classList.remove("visibile");
});

popup.addEventListener("click", event => {
  if (event.target === popup) {
    popup.classList.remove("visibile");
  }
});

popup_invia.addEventListener("click", () => {
    const lista = document.createElement("li");
    lista.classList.add("pop_lista");
    lista.textContent = `Grazie ${input_namepop.value}, abbiamo preso appuntamento`;
    avviso.appendChild(lista);

    setTimeout(() => {
        avviso.innerHTML = "";
        popup.classList.remove("visibile");
    }, 1500);
});