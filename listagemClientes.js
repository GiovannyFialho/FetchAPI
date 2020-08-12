const removeClient = id => {
    if(confirm("Deseja excluir o cliente?")){
        deletaCliente(id);
        setTimeout(() => {
            document.location.reload();
        }, 500);
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCLiente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
        <tr>
            <td>${cpf}</td>
            <td>${nome}</td>
            <button type="button" class="btn btn-danger" onClick="removeClient(${id})">Excluir</button>
            <a href="edita-clientes.html?id=${id}">
                <button type="button" class="btn btn-info">Editar</button>
            </a>
        </tr>
    `;
    
    linha.innerHTML = conteudoLinha;

    return linha;
}

listarCliente().then( exibe =>{
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCLiente(indice.cpf, indice.nome, indice.id));
    });
});
