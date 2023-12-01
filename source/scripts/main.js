document.addEventListener('DOMContentLoaded', function() {
    const buttonSend = document.getElementById('buttonSend');
    const nickInput = document.getElementById('nickInput');
    const avatar = document.getElementById('avatar');
    const nickName = document.getElementById('nickName');
    const repositorio = document.getElementById('number__rep');
    const seguidores = document.getElementById('number__seg');
    const seguindo = document.getElementById('number__follow');

    buttonSend.addEventListener('click', function() {
        
        const userName = nickInput.value.split(' ').join('');
        const endpoint = `https://api.github.com/users/${userName}`;
        
        fetch(endpoint)
        .then(response  => {
            if (!response.ok) {
                alert('Esse usuário não existe!');
                throw new Error('Usuário inexistente');
            }
            return response.json();
        })
        .then(data => {
            avatar.src = data.avatar_url;
            nickName.textContent = data.login;
            repositorio.textContent = data.public_repos;
            seguidores.textContent = data.followers;
            seguindo.textContent= data.following;
            document.getElementById('url').innerHTML = `<a href="${data.html_url}" target="_blank">Ver Perfil</a>`;

            const rep = document.getElementById('rep').classList.remove('display-none');
            const seg = document.getElementById('seg').classList.remove('display-none');
            const fol = document.getElementById('fol').classList.remove('display-none');
            const url = document.getElementById('url').classList.remove('display-none');
        })
        .catch(function(erro) {
            console.error('Usuário inexistente');
        })
        .finally(function() {
            nickInput.value = '';
            console.log(userName);
        })
    })
})