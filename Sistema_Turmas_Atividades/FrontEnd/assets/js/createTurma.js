const PORT = 8080;
const URI = `http://localhost:${PORT}/turma`;
const idProfessor = JSON.parse(window.localStorage.getItem("professor")).id;
const form = document.querySelector("#form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nomeTurma: form.nome.value,
        professor: idProfessor
    }

    const response = await fetch(URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    if(!response.ok) {
        alert("Erro ao criar turma");
        return;
    }

    window.location.href = "http://127.0.0.1:5500/assets/pages/turmas.html"
})