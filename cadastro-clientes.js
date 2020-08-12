const formCadastro = document.querySelector("[data-form]");

formCadastro.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.querySelector("[data-nome]").value;
    const cpf = event.target.querySelector("[data-cpf]").value;

    if(validaCpf(cpf)){
        alert("Cpf cadastrado com sucesso!");
        cadastrarCLiente(nome, cpf);
    }else{
        alert("Cpf inválido");
    }
});
