const PORT = 8080;
const URI = `http://localhost:${PORT}/atividade`;
const idTurma = window.localStorage.getItem("idTurma");
const nomeTurma = window.localStorage.getItem("nomeTurma");
const idProfessor = JSON.parse(window.localStorage.getItem("professor")).id;
const form = document.querySelector("#form_atividade");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        descricao: form.descricao.value,
        professor: idProfessor,
        turma: idTurma
    }

    const response = await fetch(URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    if(!response.ok) {
        alert("Erro ao criar atividade");
        return;
    }

    window.location.href = "http://127.0.0.1:5500/assets/pages/atividades.html"
})