const PORT = 8080;
const URI = `http://localhost:${PORT}/professor`;
const form = document.querySelector("#form_registro");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value
    };

    console.log(data)

    try {
        const response = await fetch(URI, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Erro ao tentar se cadastrar!');
        }

        const dataResponse = await response.json();
        form.reset();
        window.location.href = "http://127.0.0.1:5500/index.html";
    } catch (error) {
        console.log("Erro ao tentar se cadastrar! Tente novamente mais tarde.", error);
        alert(error.message);
    }
});
