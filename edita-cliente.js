const pegaUrl = new URL(window.location);
const id = pegaUrl.searchParams.get('id');

const inputCpf = document.querySelector("[data-cpf]");
const inputNome = document.querySelector("[data-nome]");

detalhaCliente(id).then( dados => {
    inputCpf.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
});

const formEdicao = document.querySelector("[data-form]");

const alerta = ( classe, mensagem) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `<div class="alert ${classe}">${mensagem}</div>`;
    
    linha.innerHTML = conteudoLinha
    return linha
}

formEdicao.addEventListener("submit", event => {
    event.preventDefault();

    if(!validaCpf(inputCpf.value)){
        alert("Esse CPF não existe");
        return;
    }

    editaCliente(id, inputCpf.value, inputNome.value).then(resp => {
        if(resp.status == 200){
            formEdicao.appendChild(alerta("alert-success","Cliente editado com sucesso!"));
        }else{
            formEdicao.appendChild(alerta("alert-warning","Erro na edição do cliente"))
        }
    });
});
