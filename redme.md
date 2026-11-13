# Atelier — Studio di architettura

## Che cos’è

Atelier è una semplice pagina web per presentare uno studio di architettura. La pagina raccoglie una presentazione dello studio, i servizi offerti, una selezione di lavori, un form di contatto e i recapiti nel footer.

## Tecnologie usate

- **HTML** per organizzare i contenuti e le sezioni della pagina.
- **Bootstrap 5.3.3** per la griglia responsive, la navbar, le card e i campi del form.
- **SCSS** per personalizzare colori, spaziature, card e tema. Il file SCSS viene compilato in `style.css`, che è quello caricato dalla pagina.
- **JavaScript** per filtrare i lavori per categoria e gestire il cambio tra tema chiaro e scuro.

## Sezioni della pagina

- **Navbar:** contiene il nome Atelier e i collegamenti alle sezioni. Il menu si chiude sui dispositivi più piccoli e si apre con il pulsante. È sticky, quindi resta in alto durante lo scorrimento.
- **Studio:** presenta il messaggio principale e un pulsante che porta ai contatti.
- **Lavori:** mostra progetti con titolo, anno, categoria e immagine. I pulsanti filtrano i progetti per categoria; “Tutti” mostra l’intero elenco.
- **Servizi:** presenta tre card: progettazione residenziale, interior design e consulenza.
- **Contatti:** raccoglie nome, email, tipo di progetto e messaggio.
- **Footer:** riunisce indirizzo, collegamenti e recapiti.
- **Tema:** il pulsante con la luna consente di passare al tema scuro; le transizioni rendono graduale il cambiamento dei colori.

## Misure responsive

Bootstrap usa breakpoint: quando la finestra raggiunge una certa larghezza, alcune classi cambiano il layout. Le misure seguenti sono quelle principali usate dal progetto.

| Larghezza della finestra | Comportamento |
| --- | --- |
| Meno di **768 px** | Layout mobile: il menu della navbar è comprimibile; le card dei servizi e del footer si dispongono in verticale; ogni card lavoro occupa tutta la riga. |
| Da **768 px** (`md`) | Il menu della navbar è espanso; i servizi e il footer possono disporsi in tre colonne; i lavori mostrano due card per riga. |
| Da **992 px** (`lg`) | I lavori mostrano tre card per riga grazie a `col-lg-4`. |
| Oltre **1440 px** | Il contenuto dentro `.container` mantiene una larghezza massima e resta centrato, lasciando spazio ai lati. |

Le classi `col-12 col-md-4` significano: larghezza intera su mobile e un terzo della riga da `md` in su. `col-12 col-md-6 col-lg-4` significa: una card per riga su mobile, due da `md` e tre da `lg`.

## Immagini dei lavori

Le immagini sono salvate nella cartella `img`. Poiché la pagina HTML si trova in `start`, il percorso nell’oggetto JavaScript è relativo a quella cartella, per esempio:

```js
immagine: "../img/casa-verde.jpg"
```

Il nome e l’estensione nel percorso devono corrispondere esattamente al file.

## Avvio

Aprire `start/index.html` con un server locale, per esempio l’estensione **Live Server** di Visual Studio Code. Bootstrap viene caricato da CDN, quindi serve una connessione Internet. Dopo aver modificato `style.scss`, ricompilare il file `style.css` affinché le modifiche siano visibili nella pagina.

> Il form è attualmente solo visivo: per ricevere davvero i messaggi deve essere collegato a un backend o a un servizio per i form.

## EXTRA
- **Modal card**
- **bottone tema chiaro scuro**
- **Mixin usato**



## Modal card

Le funzionalità del pop-up sono essenziali e intuitive. Per arricchire l'esperienza utente, ho implementato un aggiornamento dinamico dell'interfaccia: al clic sul pulsante "Invia", viene generata e visualizzata una lista che riporta in tempo reale il nome inserito nel campo di input.

## Bottone tema chiaro/scuro

Per il posizionamento del pulsante di cambio tema ho scelto di utilizzare position: relative (o un posizionamento sempre accessibile), con l'obiettivo di garantire all'utente il pieno controllo dell'aspetto visivo della pagina in qualsiasi momento della navigazione.