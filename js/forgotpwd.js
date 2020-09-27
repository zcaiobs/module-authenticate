const send = document.getElementById('btnSend');
const msg = document.getElementById('msg');
const email = document.getElementById('email');
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
    if (email.value !== '' && email.value.indexOf('@') !== -1 && 
    email.value.indexOf('.com') !== -1) {
        const dados = {
            email: email.value
        }
    checkEmail(dados).then(err => {
        if (err.status === 200) {
            msg.className = 'success';
            msg.innerHTML = 'A verification link has been sent to your email, check your message box.';
        } else {
            msg.className = 'error';
            msg.innerHTML = 'User not found';
        }
    });
    } else {
        msg.className = 'error';
        msg.innerHTML = 'Enter the correct email';
    }
    email.value = '';
})