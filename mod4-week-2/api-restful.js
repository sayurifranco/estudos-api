// Mas o que seria NodeJS?
// Trata-se de uma plataforma open source (código livre) que permite 
// a execução da linguagem de programação Javascript para o código 
// executado do lado do servidor, considerando a estrutura 
// cliente-servidor que discutimos anteriormente. Nada mais é que 
// de um interpretador de javascript que é utilizado nos navegadores 
// de internet.

// O criador do NodeJS é Ryan Dahl, que, ao atuar em um de seus 
// projetos, encontrou um problema no qual percebeu que as 
// tecnologias da época não forneciam um suporte aprimorado 
// ao processo de I/O (troca de dados do tipo entrada e saída). 
// Essa razão o fez estudar e criar uma tecnologia que pudesse 
// trabalhar bem com I/O assíncrono e resolver as dificuldades 
// das tecnologias naquele momento.

// Gerenciadores de pacote e frameworks
// São gerenciadores através dos quais conseguimos instalar 
// bibliotecas externas (biblioteca de terceiros) em nossos 
// projetos, e também criar nossas próprias bibliotecas para 
// que outras pessoas as utilizem em seus projetos. Atualmente 
// utilizamos o NPM (Node Package Manager) e o Yarn como 
// gerenciadores em nossos projetos que utilizam NodeJS.

// Para pesquisar livrarias de suporte, também chamadas de 
// plugins de suporte, seguem alguns links de apoio:

// NPM — uma excelente ferramenta YARN
// Recapitulando, o API é um acrônimo para Application Programming 
// Interface (em português significa interface de programação de 
// aplicativos). É um conjunto de especificações e requisitos 
// que determina como um aplicativo se comunica com outro.

// E, supondo que você está desenvolvendo um e-commerce, vamos 
// utilizar (ou criar) um serviço de frete para demonstrar os 
// valores e o tempo de entrega a seus usuários. Com isto, podem 
// ocorrer necessidades de utilizarmos uma ou mais APIs de terceiros, 
// como, por exemplo, a dos Correios. Assim, não precisamos 
// desenvolver esse serviço, apenas é necessário consumir essa 
// API e consequentemente é importante que essa API tenha uma boa 
// documentação para o desenvolvedor/equipe de projeto.

// O mesmo vale para o caso de você estar criando sua própria API. 
// Você deve fornecer uma boa documentação para que outros 
// desenvolvedores possam consumir sua API, saber as rotas que podem 
// acessar, quais os parâmetros enviar e os tipos de retornos que 
// ele possa ter. Nesses casos, o uso de SWAGGER ou outra base de 
// documentação é muito importante para se manter um projeto e 
// comunicação fluídos, e para alcançar bons resultados durante o 
// desenvolvimento de testes e da própria aplicação/software.

// Relembrando: o que é REST?
// REST é um acrônimo que significa Representation State Transfer 
// (transferência representacional de estado), e podemos dizer que 
// trata-se de um modelo de arquitetura. E, quando utilizamos os 
// seus conceitos para criar uma API, chamamos nossa aplicação 
// desenvolvida de API REST.

// Regras aplicadas ao REST:

// Client-Server: tem que existir os dois papéis, o client (cliente) 
// e o server (servidor). Não necessariamente precisa ser front-end e 
// back-end, podemos ter, por exemplo, uma API que consome outra API.
// Stateless: o sistema não pode ter sessões amarradas/criadas para o 
// cliente, e as requisições têm que ter todos os dados para o 
// processo ser realizado e a resposta ser completa.
// Cache: precisa permitir que o cache seja feito, caso necessário.
// Interface uniforme: a API não pode fazer distinção de clientes. 
// Por exemplo, não pode diferenciar e processar algo diferente para 
// o navegador, app mobile etc.
// Camadas: com sistemas em camadas entre o cliente e a API, deve ser 
// possível adicionar algum serviço, como por exemplo log da aplicação
// (log: histórico das atividades realizadas na comunicação com API).

// Código sob demanda: por exemplo, javascript importando direto do 
// servidor da API (Saiba mais clicando aqui).

// Relembrando alguns conceitos

// Métodos de requisições da API
// GET — Leitura de dados, quando precisamos buscar uma informação 
// da nossa aplicação.

// POST — Criação de dados, quando precisamos gravar dados na 
// aplicação.

// PUT — Atualização de dados, quando precisamos atualizar alguma 
// informação da nossa aplicação.

// DELETE — Deleção de dados, quando precisamos deletar alguma 
// informação da nossa aplicação.

// PATCH — Atualização parcial dos dados, quando precisamos 
// atualizar somente uma parte das informações da nossa aplicação.

// HTTP Codes
// 1XX: Informativo — a solicitação foi aceita ou o processo continua 
// em andamento

// 2XX: Confirmação

// 200: Requisição bem-sucedida
// 201: Created — geralmente usado para o método POST após uma inserção.

// 3XX: Redirecionamento

// 301 — Moved Permanently (quando algo foi movido permanentemente)
// 302 — Moved

// 4XX: Erro do client

// 400 — Bad Request
// 401 — Unauthorized
// 403 — Forbidden
// 404 — Not Found
// 422 — Unprocessable Entity

// 5XX: Erro no server — o servidor falhou ao concluir a solicitação

// 500 — Internal server error
// 502 — Bad Gateway

// Parâmetros das Requisições
// Header Params: parâmetros que vão no cabeçalho das requisições, 
// como por exemplo tokens, métodos, controle de sessão, entre outros.

// Query Params: parâmetros inseridos na url, por exemplo, quando 
// queremos fazer paginação. São definidos pela chave, valor e também 
// tem o delimitador quando necessário.

// Route Params: são parâmetros inseridos nas rotas da requisição.

// Body Params: são parâmetros que enviamos no corpo das requisições.

// Boas práticas API REST

// Utilizar corretamente os métodos HTTPUtilizar sempre o retorno com 
// status das respostasPadronizar as nomenclaturas sempre em letras 
// minúsculas. Alguns exemplos:
// Para busca de usuários 
// – GET:  http://enderecoservidor.net/v1/usersPara busca de usuário 
// POR ID 

// – GET: http://enderecoservidor.net/v1/users/1 Para busca de 
// usuários por ENDEREÇO 

// – GET: http://enderecoservidor.net/v1/users/1/addressDeletar 
// usuário 

// – DELETE: http://enderecoservidor.net/v1/users/1Atualização de 
// usuário 

// – PATCH: http://enderecoservidor.net/v1/users/1/staus 
