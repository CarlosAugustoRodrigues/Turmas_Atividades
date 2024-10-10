const nomeProfessor = JSON.parse(window.localStorage.getItem("professor")).nome;
const nomeElement = document.querySelector("#nome");

document.addEventListener("DOMContentLoaded", (e) => {
    nomeElement.innerHTML = nomeProfessor;
})

function sair() {
    window.location.href = "http://127.0.0.1:5500/index.html";
    window.localStorage.clear();
}