const formCadastro = document.querySelector('#form-row') as HTMLFormElement
const nomeInput = document.querySelector('#nome') as HTMLInputElement
const cpfInput = document.querySelector('#cpf') as HTMLInputElement
const dataNascimentoInput = document.querySelector('#data-nascimento') as HTMLInputElement
const emailInput = document.querySelector('#email') as HTMLInputElement
const telefoneInput = document.querySelector('#telefone') as HTMLInputElement
const ruaInput = document.querySelector('#rua') as HTMLInputElement
const numeroInput = document.querySelector('#numero') as HTMLInputElement
const bairroInput = document.querySelector('#bairro') as HTMLInputElement
const cepInput = document.querySelector('#cep') as HTMLInputElement
const btnCadastrar = document.querySelector('#btn-cadastrar') as HTMLButtonElement
const resultCadastro = document.querySelector('#resultado-cadastro') as HTMLDivElement

// MECANISMO DE CADASTRO

class Cliente {
    nome: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    rua: string;
    numero: string
    bairro: string;
    cep: string;

    constructor(nome: string, cpf: string, dataNascimento: string, email: string, telefone: string, rua: string, numero: string, bairro: string, cep: string,) {
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

formCadastro.addEventListener('submit', (event: Event) => {
    event.preventDefault()

    const novoCliente = new Cliente(
        nomeInput.value,
        cpfInput.value,
        dataNascimentoInput.value,
        emailInput.value,
        telefoneInput.value,
        ruaInput.value,
        numeroInput.value,
        bairroInput.value,
        cepInput.value,
    );

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
    `
    formCadastro.reset()
})




