const URL_API = 'http://localhost:3000/projects';

const buscar = async (token) => {
    const options = {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    }
    return await fetch(URL_API, options)
        .then(res => res.json())
        .catch(err => console.log('Error', err));
}
const btnSearch = document.getElementById('btnSearch');

btnSearch.addEventListener('click', () => {
    buscar(localStorage.getItem('token')).then(data => {
        data.projects.forEach(item => {
            let body = document.body;
            let element = document.createElement('li');
            element.textContent = item._id;
            body.appendChild(element);
        });
    })
}); 