document.addEventListener("DOMContentLoaded", carregarDetalhesAutor);

async function carregarDetalhesAutor() {
    try {
        const params = new URLSearchParams(window.location.search);
        const idAutor = params.get("id");
        
        const autor = dados.autores.find(autor => autor.id == idAutor);

        renderizarInformacoes(autor);
        renderizarLivros(autor);
    } 
    catch (erro) {
        console.error("Erro ao carregar detalhes:", erro);
    }
}

function renderizarInformacoes(autor) {
    const container = document.querySelector("#informacoes-gerais");
    container.innerHTML = "<h2 style='margin-left: 10%;'>Informações Gerais</h2><hr>";

    container.innerHTML += `
        <div class="d-flex gap-3 flex-row justify-content-evenly">

            <div>
                <img style='margin-left: 1%';
                    src="${autor.imagem}"
                    alt="${autor.nome}">
            </div>

            <div >
                <div class="card-body">

                    <p>
                        <strong>Nome:</strong>
                        ${autor.nome}
                    </p>

                    <p>
                        <strong>Nascimento:</strong>
                        ${autor.anoNascimento}
                    </p>

                    <p>
                        <strong>Nacionalidade:</strong>
                        ${autor.nacionalidade}
                    </p>

                    <p>
                        <strong>Movimento Literário:</strong>
                        ${autor.movimentoLiterario}
                    </p>

                    <p>
                        <strong>Cidade de nascimento:</strong>
                        ${autor.cidadeNascimento}
                    </p>

                </div>
            </div>
        </div>
    `;
}

function renderizarLivros(autor) {
    const container = document.querySelector("#todos-livros");

    container.innerHTML = "";

    autor.livros.forEach(livro => {
        container.innerHTML += `
            <div class="col-md-4 d-flex flex-row justify-content-evenly">
                <div class="card h-100" style="width: 220px">

                    <img
                        src="${livro.imagem}"
                        class="card-img-top"
                        style="height:300px; object-fit:cover;"
                        alt="${livro.titulo}">

                    <div class="card-body">
                        <h5 class="card-title">
                            ${livro.titulo}
                        </h5>
                    </div>

                </div>

            </div>
        `;
    });
}