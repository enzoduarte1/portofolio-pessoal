const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.getElementById("contact-form").addEventListener("submit", (event) => {

        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
});