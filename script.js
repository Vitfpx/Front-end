                            /*

### 1. USER STORIES

**User story:** Descrição da funcionalidade da aplicação a partir da perspectiva do usuário.  
**Formato comum:** Como um [tipo de usuário], eu quero [uma ação] para [um benefício].

1. Como um usuário, eu quero **procurar receitas**, para que eu possa encontrar novas ideias para refeições.
2. Como um usuário, eu quero **atualizar o número de porções**, para que eu possa cozinhar uma refeição para diferentes números de pessoas.
3. Como um usuário, eu quero **marcar receitas**, para que eu possa revisá-las mais tarde.
4. Como um usuário, eu quero **criar minhas próprias receitas**, para que eu as tenha todas organizadas no mesmo aplicativo.
5. Como um usuário, eu quero **ver meus marcadores e minhas receitas quando eu deixar o aplicativo e voltar mais tarde**, para que eu possa fechar o aplicativo com segurança após cozinhar.

---

### 2. FEATURES

#### USER STORIES → FEATURES

1. **Procurar receitas**:
   - Funcionalidade de busca: campo de entrada para enviar pedido à API com palavras-chave pesquisadas.
   - Exibir resultados com paginação.
   - Exibir receita com tempo de cozimento, porções e ingredientes.

2. **Atualizar o número de porções**:
   - Funcionalidade de alteração de porções: atualizar todos os ingredientes de acordo com o número atual de porções.

3. **Marcar receitas**:
   - Funcionalidade de marcação: exibir lista de todas as receitas marcadas.

4. **Criar minhas próprias receitas**:
   - O usuário pode fazer upload de receitas.

5. **Ver meus marcadores e minhas receitas quando eu deixar o aplicativo e voltar mais tarde**:
   - As receitas do usuário serão automaticamente marcadas.
   - O usuário pode ver apenas suas próprias receitas, não as de outros usuários.
   - Armazenar dados de marcadores no navegador usando armazenamento local.
   - Na carga da página, ler os marcadores do armazenamento local e exibir.
   
*/

///////////////////////////
// The MVC Architecture
/*

### 1. **Components of Any Architecture**
Este diagrama descreve cinco componentes essenciais que podem existir em qualquer arquitetura de software, destacando suas responsabilidades:

- **Business Logic**: 
  - Lida com a resolução de problemas reais de negócio, como operações de banco de dados, cálculos ou lógica de transações.
  - Exemplos: gerenciamento de mensagens, armazenamento de dados.
  
- **State**:
  - Armazena todos os dados da aplicação, representando o "estado" atual.
  - Deve ser a "fonte única de verdade", ou seja, o lugar central onde os dados são armazenados e sincronizados.
  - O estado e a interface de usuário (UI) devem estar sempre sincronizados.
  
- **HTTP Library**:
  - Gerencia requisições AJAX ou HTTP, que são necessárias para buscar ou enviar dados para servidores externos.
  - É opcional, mas comum em aplicações reais.

- **Application Logic (Router)**:
  - Focado em como a aplicação é estruturada e na navegação entre diferentes partes da aplicação (ex: manipulação de rotas e eventos de interface do usuário).
  
- **Presentation Logic (UI Layer)**:
  - Responsável por exibir o estado atual da aplicação para o usuário.
  - Garante que a interface reflete corretamente o que está acontecendo nos dados.

### 2. **Model-View-Controller (MVC) Architecture**
Este diagrama explica a arquitetura MVC, que é uma maneira comum de organizar código, especialmente em aplicações web. Ele divide o sistema em três partes principais:

- **Model**:
  - Contém a lógica de negócios, o estado da aplicação e os dados que são manipulados.
  - Pode interagir com serviços externos, bancos de dados, etc.
  - O modelo não conhece a interface do usuário.

- **Controller**:
  - Atua como ponte entre a visão (UI) e o modelo.
  - O controlador lida com a lógica da aplicação, escuta eventos da interface e despacha ações para o modelo e a visão.
  
- **View**:
  - Responsável pela apresentação, exibe a interface do usuário.
  - Atualiza com base nas alterações do controlador ou modelo.

### Fluxo de dados:
- O **usuário** interage com a **view**, que pode disparar eventos.
- A **view** se comunica com o **controller** para tratar esses eventos.
- O **controller** solicita ou modifica o **modelo**, e depois atualiza a **view** com os novos dados.
- O **modelo** envia dados de volta para o **controller** para que este possa atualizar a **view**.

Em resumo, o MVC separa claramente as preocupações: a apresentação, a lógica de negócios e o controle de eventos, 
facilitando a manutenção e escalabilidade de uma aplicação.

*/

//////////////////////////////////////////////////
// Event Handler in MVC: Publisher-Subscriber
/*
### Fluxo:
1. **Program Start (Início do programa)**:
   - Quando o programa inicia (`init()`), ele chama a função `controlRecipes()`.

2. **Controlador como Subscriber**:
   - A função `controlRecipes()` está no **controller.js** e é um "subscriber" (assinante). 
     Isso significa que ela deseja reagir a um evento que será emitido.

3. **View como Publisher**:
   - O método `addHandlerRender` na **classe RecipeView** é o "publisher" (publicador), ou seja, 
     ele sabe quando o evento ocorrerá, que neste caso é quando o usuário clicar em um resultado de busca.

4. **Escuta de Eventos na View**:
   - O `addHandlerRender` define um "event listener" (ouvinte de evento) para capturar o evento de 
     clique do usuário (como um clique em um botão ou link). Quando o evento acontece, ele chama a função
     `controlRecipes()` como uma callback.

### Resumo para revisão:
- **Publisher-Subscriber Pattern**: O controlador (controller.js) quer reagir a eventos emitidos pela View, então o controlador se inscreve (subscribe) ao evento. A View publica (emite) o evento e o controlador responde.
- **Separação de responsabilidades**:
  - **View**: Escuta eventos do DOM e os emite.
  - **Controller**: Manipula os eventos (contém a lógica da aplicação).
- **Eventos devem ser escutados na View e tratados no Controller**, para manter a separação entre a lógica da aplicação e a manipulação do DOM.

*/

