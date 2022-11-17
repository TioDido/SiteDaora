//Nome
let nome = document.querySelector('#nome');
let erroNome = document.querySelector('#erroNome');

//Email
let email = document.querySelector('#email');
let erroEmail = document.querySelector('#erroEmail');

//Assunto
let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto');

//Checagem de Ok
let assuntoOk = false;
let emailOk = false;
let nomeOk = false;


function validaNome(){
    if (nome.value.length < 3){
        erroNome.innerHTML = 'Nome Inválido';
        nomeOk = false;
    } else {
        erroNome.innerHTML = '';
        nomeOk = true;
    }
}


function validaEmail(){
    if (email.value.indexOf('@') == -1) {
        erroEmail.innerHTML = 'Email inválido, falta o "@"'
        emailOk = false;
    } else if (email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'Email inválido, falta o "."'
        emailOk = false;
    } else {
        erroEmail.innerHTML = ''
        emailOk= true;
    }
}

function validaAssunto(){
    if (assunto.value.length > 100){
        erroAssunto.innerHTML = 'Muito assunto';
        assuntoOk = false
    } else {
        erroAssunto.innerHTML = '';
        assuntoOk = true
    }
}

function valida(){
    if (assuntoOk && emailOk && nomeOk){
        alert ('Tudo Ok! Formulario enviado.')
    } else {
        alert ('Erro. Preencha corretamente.')
    }
}