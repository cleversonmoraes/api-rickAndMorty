
window.onload = () => {
    let list = document.getElementById('list')
    let url = 'https://rickandmortyapi.com/api/character/?page=19'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(personagem => {
                let cardPersonagem = `
                <div class='cardPersonagem'>
                    <img src='${personagem.image}'>
                    <h3>${personagem.name}</h3>
                    <p>Status: ${personagem.status}</p>
                    <p>Espécie: ${personagem.species}</p>
                    <p>Tipo: ${personagem.type}</p>
                    <p>Origem: ${personagem.origin.name}</p>
                    <p>Localização: ${personagem.location.name}</p>
                </div>
                `

                list.innerHTML += cardPersonagem
            });
        })
        .catch(error => console.error('Erro ao carregar personagem', error))
}