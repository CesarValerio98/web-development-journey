
"use strict";

// 1. Buscamos los elementos que utilizaremos.
const toggleButton = document.querySelector("#toggle-learning");
const learningDetails = document.querySelector("#learning-details");

// 2. Comprobamos que los elementos existen.
if (toggleButton && learningDetails) {

    // 3. Escuchamos los clics en el botón.
    toggleButton.addEventListener("click", function () {

        // 4. Consultamos si la información está oculta.
        const isHidden = learningDetails.hidden;

        // 5. Cambiamos su visibilidad.
        learningDetails.hidden = !isHidden;

        // 6. Actualizamos el texto del botón.
        toggleButton.textContent = isHidden
            ? "Ocultar mi ruta de aprendizaje"
            : "Mostrar mi ruta de aprendizaje";
            toggleButton.setAttribute("aria-expanded", String(isHidden));
    });
    
"use strict";

// Seleccionamos los elementos del formulario.
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function (event) {
        // Evitamos el envío y la recarga de la página.
        event.preventDefault();

        // Comprobamos las reglas HTML de los campos.
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            formFeedback.textContent =
                "Revisa los campos e intenta nuevamente.";
            return;
        }

        // Solo confirmamos que los datos son válidos.
        formFeedback.textContent =
            "¡Correcto! Todos los campos cumplen las validaciones.";
    });
}
}