let params = window.location.search.substring(1).split('&');
const URL_API = 'http://localhost:3000/auth/reset_password';
const pass = document.getElementById('pwd');
const repass = document.getElementById('repwd');
const btnSave = document.getElementById('btnSave');
const msg = document.getElementById('msg');

const reset = () => {
    pass.value = '';
    repass.value = '';
}

const resetpwd = async (user) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    return await fetch(URL_API, options)
        .catch(err => console.log('Error', err))
}

btnSave.addEventListener('click', () => {
    if (pass.value === repass.value && pass.value !== '') {
        const data = {
            'email': params[0],
            'token': params[1],
            'password': pass.value
        }
        resetpwd(data).then(res => {
            if (res.status === 200) {
                msg.className = 'success'
                msg.innerHTML = 'Your password has been reset';
                setTimeout(() => {
                    window.location.href = "http://localhost:5500";
                }, 2000)
            } else {
                msg.className = 'error'
                msg.innerHTML = 'Error';
            }
        })
    } else {
        pass.value !== repass.value 
        ? (msg.className = 'error', msg.innerHTML = 'Password do to match')
        : (msg.className = 'error', msg.innerHTML = 'Blank password, enter your new password');
    }
    reset();
})
