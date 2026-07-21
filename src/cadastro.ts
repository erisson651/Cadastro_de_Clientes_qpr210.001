const formCadastro = document.querySelector('#client-form') as HTMLFormElement;
const nomeInput = document.querySelector('#nome') as HTMLInputElement;
const cpfInput = document.querySelector('#cpf') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const cepInput = document.querySelector('#cep') as HTMLInputElement;
const cidadeInput = document.querySelector('#cidade') as HTMLInputElement;
const estadoInput = document.querySelector('#estado') as HTMLInputElement;
const ruaInput = document.querySelector('#rua') as HTMLInputElement;
const bairroInput = document.querySelector('#bairro') as HTMLInputElement;
const resultCadastro = document.querySelector('#resultado-cadastro') as HTMLDivElement;

class Cliente {
    nome: string;
    cpf: string;
    email: string;
    cep: string;
    cidade: string;
    estado: string;
    rua: string;
    bairro: string;

    constructor(
        nome: string, 
        cpf: string, 
        email: string, 
        cep: string, 
        cidade: string, 
        estado: string, 
        rua: string, 
        bairro: string
    ) {
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

formCadastro.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const novoCliente = new Cliente(
        nomeInput.value,
        cpfInput.value,
        emailInput.value,
        cepInput.value,
        cidadeInput.value,
        estadoInput.value,
        ruaInput.value,
        bairroInput.value
    );

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