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

// funzione
const addToArray = () => {

  // faccio un reset appena viene invocata la funzione
  reset();

  // definisco le variabili che leggeranno i valori immessi, ma solo dopo il click sul bottone
  let surname = document.getElementById("cognome").value;

  // ciclo if entra se la funzione di controllo dei dati immessi restituisce vero
  if (checkInput(surname)) {
    const arr = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

    arr.push(surname);
    arr.sort();

    let list = document.getElementById("list");
    let cont = "";

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] == surname) {
        cont += "<li>" + arr[i] + " >> la posizione nella lista è " + (i + 1) + "</li>"
      } else {
        cont += "<li>" + arr[i] + "</li>"
      }
    }

    list.innerHTML = cont;
    listSection.classList.toggle("hide");
  }
};

surnameBtn.addEventListener("click", addToArray);