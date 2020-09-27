const user = document.getElementById('name');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const repwd = document.getElementById('repwd')
const btnRegister = document.getElementById('btnRegister');
const msg = document.getElementById('msg');
const URL_API = 'http://localhost:3000/auth/register';

const reset = () => {
    user.value = '';
    email.value = '';
    pwd.value = '';
    repwd.value = '';
}


const register = async (user) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return await fetch(URL_API, options)
        .then(res => res.json())
        .catch(err => console.log('Failure in register user', err))
}

btnRegister.addEventListener('click', () => {
    if (user.value !== '' && pwd.value !== '' && email.value !== '' &&
         pwd.value === repwd.value && email.value.indexOf('@') !== -1 && 
         email.value.indexOf('.com') !== -1) {

    const data = {
        name: user.value,
        email: email.value,
        password: pwd.value
    }

    register(data).then(data => {
        if (data.error) {
         msg.innerHTML = data.error;
         msg.className = 'error'
        } else {
         msg.className = 'success'
         msg.innerHTML = 'User created successfully';
            setTimeout(() => {
            window.location.href = "http://localhost:5500";
        }, 2000)
        }
    })
     msg.className = 'success'
        reset();
        
       
    } else {
     msg.innerHTML = 'Error';
     msg.className = 'error'
    }
})
