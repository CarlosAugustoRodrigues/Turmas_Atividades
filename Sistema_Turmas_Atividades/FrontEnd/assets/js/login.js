const PORT = 8080;
const URI = `http://localhost:${PORT}/professor/login`;
const form = document.querySelector("#form_login");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        email: form.email.value,
        senha: form.senha.value
    };

    try {
        const response = await fetch(URI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Email ou senha incorretos');
        }

        const dataResponse = await response.json();
        window.localStorage.setItem('professor', JSON.stringify(dataResponse));
        window.location.href = 'http://127.0.0.1:5500/assets/pages/turmas.html';
    } catch (error) {
        console.error('Erro ao fazer login, tenta novamente mais tarde!', error);
        alert(error.message);
    }
});
