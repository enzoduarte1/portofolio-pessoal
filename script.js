const form = document.getElementById("contact-form");
const name = form.querySelector('input[type="text"]');
const email = form.querySelector('input[type="email"]');
const textarea = form.querySelector('textarea');
const submitButton = form.querySelector("button");

form.addEventListener("submit", (event) => {

        event.preventDefault();
        submitButton.textContent = "Mensagem enviada!";
        submitButton.style.backgroundColor = "green";

        form.reset();

});