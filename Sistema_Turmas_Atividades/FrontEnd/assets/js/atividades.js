const PORT = 8080;
const URI = `http://localhost:${PORT}/atividade`;
const divCard = document.querySelector('.div-card');
const idTurma = window.localStorage.getItem("idTurma");
const nomeTurma = window.localStorage.getItem("nomeTurma");
const idProfessor = JSON.parse(window.localStorage.getItem("professor")).id;
const form = document.querySelector("#form_atividade");
var atividades = [];



async function fetchAtividade() {
    atividades = [];
    const response = await fetch(`${URI}/turma/${idTurma}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json();
    data.forEach((e) => {
        atividades.push(e);
    })

    renderizarAtividade();
}

function renderizarAtividade() {
    divCard.innerHTML = "";
    atividades.forEach((e) => {
        divCard.innerHTML += `
                <div class="card-atividade">
                    <div>
                        <span id="nun_atividade">T${e.numAtividade}</span>
                        <span>-</span>
                        <p id="descricao_atividade">${e.descricao}</p>
                    </div>
                    
                    <div class="div-btn">
                        <button>
                            <i class="bi bi-trash" onclick="excluirAtividade(${e.id})"></i>
                        </button>
                    </div>
                </div>
                `
    })
}

function formCreateAtividade() {
    window.location.href = "http://127.0.0.1:5500/assets/pages/formAtividade.html";
}

async function excluirAtividade(id) {
    const response = await fetch(`${URI}/${id}`, {
        method: 'DELETE',
    })

    if (!response.ok) {
        alert('Erro ao excluir atividade');
        return;
    }

    if (confirm(`Deseja realmente exlcuir a atividade?`)) {
        fetchAtividade();
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#nomeTurma").innerHTML = nomeTurma;
    fetchAtividade();
})