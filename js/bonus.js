// definisco le variabili per l'HTML
const hideMessageError = document.getElementById("hide_message_error");
const listSection = document.getElementById("list_section");

// definisco le variabili dei bottoni
const surnameBtn = document.getElementById("cognome_btn");


// funzione per il reset
const reset = () => {
    hideMessageError.className = "hide";
    listSection.className = "hide";
};

// funzione per messaggio di errore in caso di dati non nel formato corretto
const checkInput = string => {

    let stringToNumber = parseInt(string, 10);

    if (string.length == 0 || !isNaN(stringToNumber)) {
        hideMessageError.classList.toggle("hide");
        return false;
    } else {
        return true;
    }
};

// funzione per calcolare il prezzo del biglietto
const addToArray = () => {

    // faccio un reset appena viene invocata la funzione
    reset();

    // definisco le variabili che leggeranno i valori immessi, ma solo dopo il click sul bottone
    // trasformo la stringa tutta in minuscolo
    let surname = (document.getElementById("cognome").value).toLowerCase();

    // ciclo if entra se la funzione di controllo dei dati immessi restituisce vero
    if (checkInput(surname)) {

        const arr = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

        // trasformo il pimo carattere in maiuscolo
        const surnameCap = surname.charAt(0).toUpperCase() + surname.slice(1);

        // inserisco il dato nell'array e faccio un sort per l'ordine alfabetico
        arr.push(surnameCap);
        arr.sort();

        let list = document.getElementById("list");
        let inner = "";
        let position = 0;

        // arr.forEach(e => {
        //     position++;
        //     if (e === surnameCap) {
        //         cont += "<li>" + e + " >> la posizione nella lista è " + position + "</li>"
        //     } else {
        //         cont += "<li>" + e + "</li>"
        //     }
        // });

        arr.forEach(e => {
            position++;
            if (e === surnameCap) {
                inner += `<li> ${e} >> la posizione nella lista è ${position} </li>`;
            } else {
                inner += `<li>${e}</li>`;
            }
        });


        list.innerHTML = inner;
        listSection.classList.toggle("hide");
    }
};

surnameBtn.addEventListener("click", addToArray);