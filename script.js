/* Enlazar los elementos del html */

const toggleButton = document.getElementById("toggle-button");
const body = document.body;


/* Creación una función para ejecutar un código */

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark")
} )

