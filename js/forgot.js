const send = document.getElementById('btnSend');

const URL_API = 'http://localhost:3000/auth/forgot_password';

const checkEmail = async (user) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    return await fetch(URL_API, options)
}

send.addEventListener('click', () => {
    const email = document.getElementById('email');

    const dados = {
        email:email.value
    }
    checkEmail(dados);
})