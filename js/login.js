const URL_API = 'http://localhost:3000/auth/authenticate';
const btnLogin = document.getElementById('btn');

const login = async user => {
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    return await fetch(URL_API, options)
        .then(res => res.json())
        .catch(err => console.log('Error', err));
}


btnLogin.addEventListener('click', () => {
    const user = document.getElementById('user')
    const pwd = document.getElementById('pwd');

    const dados = {
        'email': user.value,
        'password': pwd.value
    }

    login(dados).then(auth => {
        if (!auth.error) {
            localStorage.removeItem('token');
            localStorage.setItem('token', auth.token);
            
            window.location.href = auth.router;
        }
        else document.getElementById('imprime').innerHTML = 'Acesso inválido';
    });
});




