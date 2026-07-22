// 1. Mapeamento dos elementos do HTML com o DOM
const formCadastro = document.querySelector('#client-form') as HTMLFormElement;
const clientIdInput = document.querySelector('#client-id') as HTMLInputElement;
const nomeInput = document.querySelector('#nome') as HTMLInputElement;
const cpfInput = document.querySelector('#cpf') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const ruaInput = document.querySelector('#rua') as HTMLInputElement;
const bairroInput = document.querySelector('#bairro') as HTMLInputElement;
const cepInput = document.querySelector('#cep') as HTMLInputElement;

const btnSalvar = document.querySelector('#bnt-save') as HTMLButtonElement;
const btnCancelar = document.querySelector('#bnt-cancel') as HTMLButtonElement;
const resultCadastro = document.querySelector('#resultado-cadastro') as HTMLDivElement;

// 2. Classe Cliente
class Cliente {
    id: string;
    nome: string;
    cpf: string;
    email: string;
    rua: string;
    bairro: string;
    cep: string;

    constructor(id: string, nome: string, cpf: string, email: string, rua: string, bairro: string, cep: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.rua = rua;
        this.bairro = bairro;
        this.cep = cep; 
    }
}

// 3. Array em memória para armazenar a lista de clientes
let listaClientes: Cliente[] = [];

// 4. Função para renderizar os cards dos clientes dentro da <div class="list">
function renderizarLista(): void {
    // Limpa o conteúdo da div antes de desenhar a lista atualizada
    resultCadastro.innerHTML = '';

    listaClientes.forEach((cliente, index) => {
        const itemHtml = `
            <div class="cliente-item">
                <div class="cliente-info">
                    <h3>Cliente #${index + 1}: ${cliente.nome}</h3>
                    <p><strong>CPF:</strong> ${cliente.cpf} | <strong>Email:</strong> ${cliente.email}</p>
                    <p><strong>Endereço:</strong> ${cliente.rua}${cliente.bairro ? ', ' + cliente.bairro : ''} - CEP: ${cliente.cep}</p>
                </div>
                <div>
                    <button class="bnt bnt-secondary btn-editar" data-id="${cliente.id}">Alterar Dados</button>
                </div>
            </div>
        `;
        resultCadastro.innerHTML += itemHtml;
    });

    // Vincula o evento de clique em cada botão "Alterar Dados" gerado
    const botoesEditar = document.querySelectorAll('.btn-editar');
    botoesEditar.forEach((botao) => {
        botao.addEventListener('click', (e: Event) => {
            const target = e.currentTarget as HTMLButtonElement;
            const id = target.getAttribute('data-id');
            if (id) {
                carregarDadosParaEdicao(id);
            }
        });
    });
}

// 5. Função para puxar as informações do cliente de volta para o formulário
function carregarDadosParaEdicao(id: string): void {
    const clienteEncontrado = listaClientes.find((c) => c.id === id);

    if (clienteEncontrado) {
        // Preenche os inputs do formulário
        clientIdInput.value = clienteEncontrado.id;
        nomeInput.value = clienteEncontrado.nome;
        cpfInput.value = clienteEncontrado.cpf;
        emailInput.value = clienteEncontrado.email;
        ruaInput.value = clienteEncontrado.rua;
        bairroInput.value = clienteEncontrado.bairro;
        cepInput.value = clienteEncontrado.cep;

        // Ajusta a interface para o Modo de Edição
        btnSalvar.textContent = 'Atualizar Cadastro';
        btnCancelar.style.display = 'inline-block';

        // Rola a tela até o formulário para facilitar a digitação
        formCadastro.scrollIntoView({ behavior: 'smooth' });
    }
}

// 6. Função para resetar os campos e botões do formulário
function resetarFormulario(): void {
    formCadastro.reset();
    clientIdInput.value = '';
    btnSalvar.textContent = 'Salvar Cadastro';
    btnCancelar.style.display = 'none';
}

// 7. Evento principal de envio do formulário (Salvar Novo ou Atualizar Existente)
formCadastro.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const idExistente = clientIdInput.value;

    if (idExistente) {
        // ATUALIZAR: Se já existe um ID no hidden input, atualiza no array
        const clienteIndex = listaClientes.findIndex((c) => c.id === idExistente);
        if (clienteIndex !== -1) {
            listaClientes[clienteIndex] = new Cliente(
                idExistente,
                nomeInput.value,
                cpfInput.value,
                emailInput.value,
                ruaInput.value,
                bairroInput.value,
                cepInput.value
            );
        }
    } else {
        // CADASTRAR: Se não há ID, cria um novo objeto Cliente com ID único
        const novoCliente = new Cliente(
            Date.now().toString(), // Gera um ID único simples baseado no horário
            nomeInput.value,
            cpfInput.value,
            emailInput.value,
            ruaInput.value,
            bairroInput.value,
            cepInput.value
        );
        listaClientes.push(novoCliente);
    }

    // Atualiza a visualização na tela e limpa os campos
    renderizarLista();
    resetarFormulario();
});

// Evento do botão Cancelar Cadastro
btnCancelar.addEventListener('click', resetarFormulario);
