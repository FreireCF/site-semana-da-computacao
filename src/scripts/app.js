const menu = document.getElementById("nav-menu");

function OpenMenu() {
    menu.className = "nav-mobile";
}

function CloseMenu() {
    menu.className = "nav-desktop";
}

const form = document.getElementById("form-inscricao");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("celular");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const telefoneValido = validarTelefone();

    if (nomeValido && emailValido && telefoneValido) {
        const mensagem = document.getElementById("mensagem-sucesso");
        mensagem.classList.remove("d-none");
    

        setTimeout(() => {
            mensagem.classList.add("d-none");
        }, 5000);
    
        form.reset();
        limparErros();
    }
    
});

function validarNome() {
    const nomeValue = nome.value.trim();
    if (nomeValue === "") {
        errorInput(nome, "Preencha com seu nome completo");
        return false;
    } else {
        successInput(nome);
        return true;
    }
}

function validarEmail() {
    const emailValue = email.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (emailValue === "" || !regex.test(emailValue)) {
        errorInput(email, "Informe um e-mail válido (ex: nome@gmail.com)");
        return false;
    } else {
        successInput(email);
        return true;
    }
}

function validarTelefone() {
    const telefoneValue = telefone.value.trim();
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    if (telefoneValue === "" || !regex.test(telefoneValue)|| telefoneValue.length === 11) {
        errorInput(telefone, "Informe um número de telefone válido,o telefone deve conter 11 dígitos, incluindo o DDD");
        return false;
    } else {
        successInput(telefone);
        return true;
    }
}

function errorInput(input, mensagem) {
    const formItem = input.parentElement;
    const textMensagem = formItem.querySelector("a");

    textMensagem.innerText = mensagem;
    formItem.className = "mb-3 error"; 
}
function successInput(input) {
    const formItem = input.parentElement;
    const textMensagem = formItem.querySelector("a");

    textMensagem.innerText = "";
    formItem.className = "mb-3"; 
}


function limparErros() {
    successInput(nome);
    successInput(email);
    successInput(telefone);
}
