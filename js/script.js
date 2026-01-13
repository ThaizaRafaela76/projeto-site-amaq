async function baixarDados() {
    const requisicaoHTTP = await fetch(
        "https://my-json-server.typicode.com/JuliaSouzza/api-membros/membros"
    );
    
    const dadosJson = await requisicaoHTTP.json();
    console.log(dadosJson);

    listarMembros(dadosJson);
}

function listarMembros(membros) {

    const divsMembros = membros.map(membro => {

        let divMembro = document.createElement("div");
        divMembro.classList.add("div-membro");

        let nomeMembro = document.createElement("h4");
        nomeMembro.textContent = membro.nome;
        nomeMembro.classList.add("nome-membro")

        let cargoMembro = document.createElement("p");
        cargoMembro.textContent = membro.cargo;
        cargoMembro.classList.add("cargo-membro");

        let imgMembro = document.createElement("img");
        imgMembro.src = membro.imagemURL;
        imgMembro.classList.add("img-membro");


        divMembro.appendChild(imgMembro);
        divMembro.appendChild(nomeMembro);
        divMembro.appendChild(cargoMembro);

        return divMembro;
    });

    divsMembros.map(divMembro => {
        const divCard = document.querySelector("#card");
        divCard.appendChild(divMembro);
    });
}

baixarDados();