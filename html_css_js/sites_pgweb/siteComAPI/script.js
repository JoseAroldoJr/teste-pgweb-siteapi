const formBusca = document.querySelector("form");

formBusca.onsubmit = (evento) => {
    evento.preventDefault();

    let chave = 'ee49f034';

    const busca = evento.target.busca.value;

    if (busca == "") {
        alert("É necessário digitar algo")
        return;
    }

    fetch(`http://www.omdbapi.com/?s=${busca}&apikey=${chave}`)
        .then(resultado => resultado.json())
        .then(json => mostrarFilmes(json));

const mostrarFilmes = (json) => {
    const list = document.querySelector("div.movieList");

    list.innerHTML = "";

    json.Search.forEach(element => {

        let filmes = document.createElement("div");
        filmes.classList.add("filmes");

        filmes.innerHTML = `<img src="${element.Poster}"/> <h2>${element.Title}</h2>`
        
        list.appendChild(filmes);
    });

}


}

