// 1. Mapeamento dos elementos do HTML com os IDs corretos
const formCadastro = document.querySelector('#client-form') as HTMLFormElement;
const nomeInput = document.querySelector('#nome') as HTMLInputElement;
const cpfInput = document.querySelector('#cpf') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const ruaInput = document.querySelector('#rua') as HTMLInputElement;
const bairroInput = document.querySelector('#bairro') as HTMLInputElement;
const cepInput = document.querySelector('#cep') as HTMLInputElement;
const resultCadastro = document.querySelector('#resultado-cadastro') as HTMLDivElement;

// 2. Classe Cliente
class Cliente {
    nome: string;
    cpf: string;
    email: string;
    rua: string;
    bairro: string;
    cep: string;

    constructor(nome: string, cpf: string, email: string, rua: string, bairro: string, cep: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.rua = rua;
        this.bairro = bairro;
        this.cep = cep; 
    }
}

// 3. Array para armazenar os clientes em memória
const listaClientes: Cliente[] = [];

// 4. Função para renderizar/listar os clientes na tela
function renderizarLista(): void {
    // Limpa a área antes de desenhar a lista atualizada
    resultCadastro.innerHTML = '';

    listaClientes.forEach((cliente, index) => {
        // Cria um card visual aproveitando o estilo do seu CSS (.card)
        const cardHtml = `
            <div class="card" style="margin-bottom: 1rem;">
                <h3 style="margin-bottom: 0.5rem; color: var(--primary-color);">Cliente #${index + 1}: ${cliente.nome}</h3>
                <p><strong>CPF:</strong> ${cliente.cpf}</p>
                <p><strong>Email:</strong> ${cliente.email}</p>
                <p><strong>Rua:</strong> ${cliente.rua}</p>
                <p><strong>Bairro:</strong> ${cliente.bairro || 'Não informado'}</p>
                <p><strong>CEP:</strong> ${cliente.cep}</p>
            </div>
        `;
        resultCadastro.innerHTML += cardHtml;
    });
}

// 5. Evento do Formulário
formCadastro.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Impede a página de recarregar

    // Cria o novo cliente com os dados digitados
    const novoCliente = new Cliente(
        nomeInput.value,
        cpfInput.value,
        emailInput.value,
        ruaInput.value,
        bairroInput.value,
        cepInput.value
    );

    // Adiciona ao array
    listaClientes.push(novoCliente);

    // Atualiza a exibição na tela
    renderizarLista();

    // Limpa o formulário para o próximo cadastro
    formCadastro.reset();
});
