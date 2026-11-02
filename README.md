# Focus — Organização Inteligente de Armazenamento
> **Sprint 4 — Front-End Web Development**

Aplicação web desenvolvida com **Next.js**, **React** e **Tailwind CSS**, que apresenta a solução **Focus**: uma plataforma voltada para organização inteligente de armazenamento de dispositivos utilizando Inteligência Artificial, com simulador interativo, formulário de contato integrado a API REST e listagem reativa com filtros e detalhes.

---

## 👥 Integrantes do Grupo

| Nome | RM |
| :--- | :--- |
| **Esther dos Santos de Almeida Tozzo** | 570860 |
| **Felipe de Oliveira Zimmermann** | 570863 |
| **Izabela Pordeus de Almeida** | 570316 |
| **João Victor Santos Souza** | 569949 |
| **Matheus Lopes Lima** | 571458 |

---

## 🛠️ Tecnologias Utilizadas

* **[Next.js 16](https://nextjs.org/)** (App Router, Turbopack, Dynamic Routes e Server/Client Components)
* **[React 19](https://react.dev/)**
* **[Tailwind CSS v4](https://tailwindcss.com/)** (Estilização utilitária responsiva e moderna)
* **[Axios](https://axios-http.com/)** (Cliente HTTP para integração com API REST)
* **[MockAPI](https://mockapi.io/)** (Servidor de API REST remoto para persistência dos dados de contatos)
* **JavaScript (ES6+)**
* **ESLint** (Padronização e garantia de qualidade de código)

---

## 🎣 Hooks Utilizados (Requisito da Sprint)

Para atender aos requisitos de arquitetura e boas práticas de React, o projeto utiliza tanto hooks nativos quanto hooks customizados:

### 1. Hooks Nativos do React
* **`useState`**: Controle de estado de formulários, listas, filtros, carregamento e valores do simulador.
* **`useEffect`**: Ciclo de vida para carregamento inicial de dados da API e auto-foco em inputs.
* **`useRef`**: Referência direta ao campo de entrada do formulário (`nomeInputRef`) para acessibilidade e usabilidade (foco automático).
* **`useMemo`**: Memorização da filtragem da lista de contatos em tempo real, evitando recálculos desnecessários a cada render.
* **`useCallback`**: Memorização das funções de envio, remoção e alteração de filtros para otimizar a passagem de callbacks entre componentes filhos.
* **Hooks do Next.js**: `useParams`, `useRouter` e `useSearchParams` para navegação e captura de rotas dinâmicas.

### 2. Hooks Customizados (Criados no Projeto)
Localizados no diretório [`app/hooks/`](./app/hooks/):
* **`useContacts`** ([`app/hooks/useContacts.js`](./app/hooks/useContacts.js)): Encapsula toda a lógica de comunicação com a API REST, fallback para cache offline, filtragem memorizada e operações de adicionar e remover contatos.
* **`useContactDetail`** ([`app/hooks/useContactDetail.js`](./app/hooks/useContactDetail.js)): Encapsula a busca e tratamento de ciclo de vida do contato individual por ID, com suporte a múltiplos níveis de contingência.
* **`useLocalStorage`** ([`app/hooks/useLocalStorage.js`](./app/hooks/useLocalStorage.js)): Hook utilitário para sincronização de estado reativo com o `localStorage` do navegador, com tratamento para SSR.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
* **[Node.js](https://nodejs.org/)** (versão 18.18.0 ou superior recomendada)
* **npm** (incluso com a instalação do Node.js)
* Um navegador web moderno (Google Chrome, Firefox, Edge, etc.)

---

## 🚀 Como Executar o Projeto Passo a Passo

> ⚠️ **Atenção (Obrigatório)**: Como boas práticas de versionamento no Git, a pasta `node_modules` **não é enviada para o repositório no GitHub** (está no `.gitignore`). Por esse motivo, é **estritamente obrigatório rodar o comando `npm install` antes de iniciar a aplicação**, para que todas as bibliotecas e dependências sejam baixadas localmente.

### Passo 1: Clonar ou extrair o repositório
Abra o terminal na pasta onde deseja colocar o projeto:
```bash
git clone https://github.com/seu-usuario/sprint04-front_web.git
cd sprint04-front_web
```

### Passo 2: Instalar as dependências (Obrigatório)
Execute o comando abaixo para instalar todas as dependências do projeto listadas no `package.json`:
```bash
npm install
```

### Passo 3: Iniciar o servidor de desenvolvimento
Após a conclusão da instalação, inicie o projeto executando:
```bash
npm run dev
```

### Passo 4: Acessar a aplicação
Abra o seu navegador e acesse a URL:
```
http://localhost:3000
```

> **Dica**: Caso deseje gerar e testar a versão de produção otimizada:
> ```bash
> npm run build
> npm run start
> ```

---

## 🖥️ Como Executar os Servidores (Back-end)

* **Servidor Remoto (MockAPI)**:
  O back-end deste projeto é uma **API REST remota hospedada na plataforma MockAPI**:
  * **Base URL**: `https://6ae7b94056b2ee1e544092f1.mockapi.io`
  * **Endpoint**: `/contacts`
  * **Status**: Remoto na nuvem. **Portanto, NÃO é necessário instalar ou rodar nenhum servidor de back-end local**.

* **Modo Offline / Resiliência**:
  Caso ocorra oscilação de rede ou a rota remota fique temporariamente indisponível, a aplicação possui um mecanismo inteligente de **contingência automática com `localStorage`**. Um aviso de status informará o usuário, permitindo testar todas as funcionalidades de cadastro, listagem, remoção, filtro e visualização de detalhes normalmente sem interrupções.

---

## 🧪 Roteiro de Testes Recomendado para Avaliação

Para facilitar a correção pelo professor, recomendamos o seguinte fluxo de testes:

1. **Navegação pela Landing Page**:
   * Utilize a barra de navegação superior para navegar suavemente entre as seções: *Solução*, *Público-Alvo*, *Galeria*, *Nossa Equipe*, *Contato* e *Mensagens*.
2. **Simulador de Armazenamento**:
   * Localize a seção **"Simule agora: Quanto espaço você poderia recuperar?"**.
   * Altere os campos de *Armazenamento ocupado em GB* e *Percentual estimado* e observe o cálculo instantâneo do espaço recuperável.
3. **Envio de Mensagem de Contato**:
   * Na seção **"Fale com a equipe"**, preencha os dados (Nome, E-mail, Perfil e Mensagem) e clique em **"Enviar mensagem"**.
   * Note o feedback visual de sucesso e que o novo contato passará a constar na lista abaixo imediatamente.
4. **Filtro em Tempo Real**:
   * Na seção **"Mensagens Recebidas"**, utilize o campo de pesquisa para filtrar as mensagens por nome ou e-mail (otimizado via `useMemo`).
5. **Página Dinâmica de Detalhes**:
   * Clique em qualquer mensagem da lista para abrir a rota dinâmica (`/contact/[id]`).
   * Verifique a exibição dos dados completos da mensagem e clique no botão **"Voltar"** ou **"Início"**.
6. **Exclusão de Contato**:
   * Clique no botão **"Excluir"** em qualquer mensagem da lista para testar a remoção síncrona/remota.

---

## 📁 Estrutura de Pastas do Projeto

```text
sprint04-front_web/
├── app/
│   ├── components/            # Componentes reutilizáveis da interface
│   │   ├── AudienceSection.js
│   │   ├── ContactItem.js
│   │   ├── ContactList.js
│   │   ├── ContactSection.js  # Formulário com foco via useRef
│   │   ├── FilterInput.js
│   │   ├── GalleryItem.js
│   │   ├── GallerySection.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── HowItWorksSection.js
│   │   ├── ProblemSection.js
│   │   ├── SectionHeading.js
│   │   ├── SolutionSection.js
│   │   ├── StorageCalculator.js # Simulador de espaço com useState
│   │   └── TeamSection.js     # Seção da equipe com integrantes e RMs
│   ├── contact/
│   │   └── [id]/              # Rota dinâmica de detalhes do contato
│   │       └── page.js
│   ├── hooks/                 # Hooks customizados criados para a entrega
│   │   ├── index.js
│   │   ├── useContactDetail.js
│   │   ├── useContacts.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   └── api.js             # Configuração do Axios para o MockAPI
│   ├── globals.css
│   ├── layout.js
│   └── page.js                # Página principal integrando os hooks
├── public/                    # Arquivos estáticos
├── package.json
└── README.md
```
