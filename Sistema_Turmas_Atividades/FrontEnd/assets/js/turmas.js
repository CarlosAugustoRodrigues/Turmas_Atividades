const PORT = 8080;
const URI = `http://localhost:${PORT}/turma`;
const divCard = document.querySelector('.div-card');
const idProfessor = JSON.parse(window.localStorage.getItem("professor")).id;
const form = document.querySelector("#form");
var turmas = [];

async function fetchTurmas() {
    turmas = [];
    const response = await fetch(`${URI}/professor/${idProfessor}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json();
    data.forEach((e) => {
        turmas.push(e);
    })

    renderizarTurmas();
}

function renderizarTurmas() {
    divCard.innerHTML = "";
    turmas.forEach((e) => {
        divCard.innerHTML += `
                <div class="card-turma">
                    <div>
                        <span id="nun_turma">T${e.numTurma}</span>
                        <span>-</span>
                        <p id="nome_turma">${e.nomeTurma}</p>
                    </div>
                    
                    <div class="div-btn">
                        <button>
                            <i class="bi bi-eye" onclick="visualizarTurma(${e.id},  '${e.nomeTurma}')"></i>
                        </button>
                        <button>
                            <i class="bi bi-trash" onclick="excluirTurma(${e.id})"></i>
                        </button>
                    </div>
                </div>
                `
    })
}

function formCreateTurma() {
    window.location.href = "http://127.0.0.1:5500/assets/pages/formTurma.html";
}

async function visualizarTurma(id, nome) {
    window.localStorage.setItem('idTurma', id);
    window.localStorage.setItem('nomeTurma', nome);
    window.location.href = `http://127.0.0.1:5500/assets/pages/atividades.html`
}

async function excluirTurma(id) {
    const response = await fetch(`${URI}/${idProfessor}/${id}`, {
        method: 'DELETE',
    })

    if (!response.ok) {
        alert('Erro ao excluir turma');
        return;
    }

    if (confirm(`Deseja realmente exlcuir a turma?`)) {
        fetchTurmas();
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    fetchTurmas();
})