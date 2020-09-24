let params = window.location.search.substring(1).split('&');
const URL_API = 'http://localhost:3000/auth/reset_password';

const pass = document.getElementById('pwd');
const repass = document.getElementById('repwd');
const btnSave = document.getElementById('btnSave');

const resetpwd = async (user) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    return await fetch(URL_API, options)
        .then(res => res.json())
        .catch(err => console.log('Error', err))
}

btnSave.addEventListener('click', () => {
    if (pass.value == repass.value) {
        const data = {
            'email': params[0],
            'token': params[1],
            'password': pass.value
        }
        resetpwd(data).then(res => {
            document.getElementById('msg').innerHTML = res.status;
        })
    } else document.getElementById('msg').innerHTML = 'Password do not match';

})
