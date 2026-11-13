// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.
const lavori = [
    {
        titolo: "Casa nel verde",
        anno: 2024, categoria: "residenziale",
        
    },
    {
        titolo: "Appartamento luminoso",
        anno: 2023, categoria: "interni",
        
    },
    {
        titolo: "Studio creativo",
        anno: 2024, categoria: "commerciale",
        
    },
    {
        titolo: "Villa contemporanea",
        anno: 2022, categoria: "residenziale",
        
    },
    {
        titolo: "Loft urbano",
        anno: 2023, categoria: "interni",
        
    },
    {
        titolo: "Boutique",
        anno: 2022, categoria: "commerciale",
        
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
    <div class="col-12 col-md-6 col-lg-4 card_lavori">
      <article class="card h-100">
        <div class="img_card" >
        <img  class="card-img-top " >
        <div>
        <div class="card-body">
          <h3 class="card-title">${lavoro.titolo}</h3>
          <p class="card-text">${lavoro.anno} · ${lavoro.categoria}</p>
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