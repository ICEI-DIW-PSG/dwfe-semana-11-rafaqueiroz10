async function carregarAutores() {
    try {
        renderizarAutoresCarrossel(dados.autores)
        renderizarAutoresCard(dados.autores)
        handlerAutor()

    } catch (erro) {
        console.error("Erro ao carregar autores:", erro)
    }
}

function renderizarAutoresCarrossel(autores) {
    const carousel = document.querySelector("#carousel-autores")

    carousel.innerHTML = ""

    autores.forEach((autor, indice) => {
        if (autor.destaque) {
            carousel.innerHTML += `
                <div style='cursor:pointer' data-id="${autor.id}" class="carousel-item ${indice === 0 ? "active" : ""}">
                    <img
                        src="${autor.imagem}"
                        class="d-block w-100"
                        style="height: 30rem; object-fit: cover;"
                        alt="${autor.nome}">
                </div>
            `
        }
    })
}

function renderizarAutoresCard(autores) {
    const container = document.querySelector("#cards-autores")

    container.innerHTML = ""

    autores.forEach(autor => {

        container.innerHTML += `
            <div class="col">
                <div class="card h-100">

                    <img
                        src="${autor.imagem}"
                        data-id="${autor.id}"
                        class="card-img-top"
                        style="height:300px; object-fit:cover; cursor:pointer;"
                        alt="${autor.nome}">

                    <div class="card-body d-flex flex-row justify-content-around">
                        <h5 style='cursor:pointer' data-id="${autor.id}" class="botao-nome card-title">${autor.nome}</h5>
                    </div>

                </div>
            </div>
        `
    })
}

async function carregarAutor(id) {
    try {
        window.location.href = "detalhes.html?id=" + id
    } 
    catch (erro) {
        console.error("Erro ao carregar autor:", erro)
    }
}

function handlerAutor() {
    const botoesVerDetalhesEl = document.querySelectorAll('.botao-nome')

    botoesVerDetalhesEl.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const idAutor = e.currentTarget.dataset.id
            carregarAutor(idAutor)
        })
    })

    const imgCardsEl = document.querySelectorAll('.card img')

    imgCardsEl.forEach(imgs => {
        imgs.addEventListener('click', e => {
            const idAutor = e.currentTarget.dataset.id
            carregarAutor(idAutor)
        });
    })

    const botoesItemCarouselEl = document.querySelectorAll('.carousel-item');

    botoesItemCarouselEl.forEach(botao => {
        botao.addEventListener('click', e => {
            const idAutor = e.currentTarget.dataset.id
            carregarAutor(idAutor)
        });
    })
}

carregarAutores()