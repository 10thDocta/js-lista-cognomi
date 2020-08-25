// definisco le variabili per l'HTML
const hideMessageError = document.getElementById("hide_message_error");
const listSection = document.getElementById("list_section");

// definisco le variabili dei bottoni
const surnameBtn = document.getElementById("cognome_btn");

/* ------------- 
      EMAIL CHECK
 -------------*/

// funzione per il reset
const reset = () => {
    hideMessageError.className = "hide";
    listSection.className = "hide";
};

// funzione per messaggio di errore in caso di dati non nel formato corretto
const checkInput = string => {
    if (string.length == 0) {
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
    let surname = document.getElementById("cognome").value;

    // ciclo if entra se la funzione di controllo dei dati immessi restituisce vero
    if (checkInput(surname)) {
        const surnameCap = surname.charAt(0).toUpperCase() + surname.slice(1);
        const arr = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

        arr.push(surnameCap);

        let list = document.getElementById("list");
        let cont = "";

        arr.forEach(e => cont += "<li>" + e + "</li>");

        // arr.forEach(e => {
        //     cont += "<li>" + e + arr.findIndex(e => e === surnameCap) + "</li>"
        // });


        list.innerHTML = cont;
        listSection.classList.toggle("hide");
    }
};

surnameBtn.addEventListener("click", addToArray);