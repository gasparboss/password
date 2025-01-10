// Generáló gomb működtetése:
document.getElementById("generateBtn").onclick = handleClick;

function handleClick() {
    const values = getInputValue();
}
// Üzenetet küldő eljárás:
function sendMessage(message) {
    alert(message);
}

// Értékek kinyerése. Ha hiányzik érték az inputból, akkor üzenetet küldünk, input-ra helyezzük a fókszt, és null-t adunk vissza.
function getInputValue() {
    const inputElements = document.querySelectorAll("input");
    for (let element of inputElements) {

    }
}