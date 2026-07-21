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

btnCadastrar.addEventListener('submit', (event: Event) => {
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

    
})