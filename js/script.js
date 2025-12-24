// RECUPERO DEGLI ELEMENTI DAL DOM //
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const risultato = document.getElementById("risultato");

// CREIAMO UNA FUNZIONE PER OTTENERE I NUMERI E CONTROLLARE CHE SIANO VALIDI //
function ottieniNumeri() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    if (num1Input.value === "" || num2Input.value === "") {
        risultato.textContent = "Inserisci entrambi i numeri";
        return null;
    }

    return { num1, num2 };
}
