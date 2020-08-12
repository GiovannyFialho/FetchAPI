const listarCliente = () => {
    return fetch('http://localhost:4000/clientes')
    .then(resposta => {
       return resposta.json()
    })
    .then(json => {
        return json;
    });
}

const cadastrarCLiente = (nome, cpf) => {
    const json = JSON.stringify({
        nome,
        cpf
    });
    
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: json,
    })
    .then( resp => {
        return resp.body;
    });
}

const deletaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'delete'
    });
}

const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`)
    .then(resposta => {
        return resposta.json();
    })
}

const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        nome,
        cpf
    });
    
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'put',
        headers: {
            'Content-type': 'application/json'
        },
        body: json,
    })
}
