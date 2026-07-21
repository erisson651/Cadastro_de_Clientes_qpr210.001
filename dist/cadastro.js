"use strict";
const formCadastro = document.querySelector('#form-row');
const nomeInput = document.querySelector('#nome');
const cpfInput = document.querySelector('#cpf');
const dataNascimentoInput = document.querySelector('#data-nascimento');
const emailInput = document.querySelector('#email');
const telefoneInput = document.querySelector('#telefone');
const ruaInput = document.querySelector('#rua');
const numeroInput = document.querySelector('#numero');
const bairroInput = document.querySelector('#bairro');
const cepInput = document.querySelector('#cep');
const btnCadastrar = document.querySelector('#btn-cadastrar');
const resultCadastro = document.querySelector('#resultado-cadastro');
// MECANISMO DE CADASTRO
class Cliente {
    constructor(nome, cpf, dataNascimento, email, telefone, rua, numero, bairro, cep) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.telefone = telefone;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
    }
}
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const novoCliente = new Cliente(nomeInput.value, cpfInput.value, dataNascimentoInput.value, emailInput.value, telefoneInput.value, ruaInput.value, numeroInput.value, bairroInput.value, cepInput.value);
    resultCadastro.innerHTML = `
    <p><strong>Nome:</strong>${novoCliente.nome}<p>
    <p><strong>Cpf:</strong>${novoCliente.cpf}<p>
    <p><strong>Data de Nascimento:</strong>${novoCliente.dataNascimento}<p>
    <p><strong>Email:</strong>${novoCliente.email}<p>
    <p><strong>Telefone:</strong>${novoCliente.telefone}<p>
    <p><strong>Rua:</strong>${novoCliente.rua}<p>
    <p><strong>Número:</strong>${novoCliente.numero}<p>
    <p><strong>Bairro:</strong>${novoCliente.bairro}<p>
    <p><strong>Cep:</strong>${novoCliente.cep}<p>
    `;
    formCadastro.reset();
});
