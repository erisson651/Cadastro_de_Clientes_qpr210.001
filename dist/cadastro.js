"use strict";
const formCadastro = document.querySelector('#client-form');
const nomeInput = document.querySelector('#nome');
const cpfInput = document.querySelector('#cpf');
const emailInput = document.querySelector('#email');
const cepInput = document.querySelector('#cep');
const cidadeInput = document.querySelector('#cidade');
const estadoInput = document.querySelector('#estado');
const ruaInput = document.querySelector('#rua');
const bairroInput = document.querySelector('#bairro');
const resultCadastro = document.querySelector('#resultado-cadastro');
class Cliente {
    constructor(nome, cpf, email, cep, cidade, estado, rua, bairro) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.rua = rua;
        this.bairro = bairro;
    }
}
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const novoCliente = new Cliente(nomeInput.value, cpfInput.value, emailInput.value, cepInput.value, cidadeInput.value, estadoInput.value, ruaInput.value, bairroInput.value);
    resultCadastro.innerHTML += `
    <form id="cadastro-cliente"><h2>CADASTRO DE ${novoCliente.nome}<h2>

    <div id="div-cadastro">
        <p><strong>Nome:</strong> ${novoCliente.nome}</p>
        <p><strong>CPF:</strong> ${novoCliente.cpf}</p>
        <p><strong>Email:</strong> ${novoCliente.email}</p>
        <p><strong>CEP:</strong> ${novoCliente.cep}</p>
        <p><strong>Cidade:</strong> ${novoCliente.cidade}</p>
        <p><strong>Estado:</strong> ${novoCliente.estado}</p>
        <p><strong>Rua:</strong> ${novoCliente.rua}</p>
        <p><strong>Bairro:</strong> ${novoCliente.bairro}</p>
        </div>
        </form>
    `;
    formCadastro.reset();
});
