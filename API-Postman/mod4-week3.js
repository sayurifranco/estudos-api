// Que testes devo realizar em uma API REST?
// No início, quando estamos criando nosso cenário de teste 
// para API, devemos conhecer sua documentação. Uma API bem 
// documentada com Swagger ajuda muito nessas horas, pois 
// através dela nós saberemos os recursos, corpo de mensagem, 
// e estrutura que podemos validar.

// Dados (informações) de uma requisição de API:

// Method
// URI
// Headers
// Query Parameters
// Body


// Dados para uma resposta:

// Headers
// Body
// Status code


// Comportamento de solicitação:

// Validar os dados de retorno
// Validar os headers da resposta
// Validar se a resposta está de acordo. 
// Validar se após a alteração do content-type alterado, o 
// comportamento continua o mesmo
// Validar se a estrutura do JSON ou XML está correta
// Validar se, quando der erro, o status está de acordo 
// com os códigos de erro
// Validar qual será o comportamento da requisição caso 
// ela esteja com informações incompletas

// Ferramentas de teste REST API

// Com a análise inicial da documentação e levantamento 
// dos principais pontos a serem testados, faz-se 
// necessário escolher a ferramenta para a realização 
// dos testes iniciais. 

// O mercado atual disponibiliza uma variedade de 
// ferramentas, mas deve-se escolher a que melhor 
// atenda ao cenário do seu projeto.

// Como exemplo, podemos citar:

// Postman
// Newnam
// Apache Jmeter
// SoapUI
// Rest Assured
// Restlet
// RoboHydra
// Gatling

// Postman/Newman

// Postman é uma ferramenta para  realizar os comandos de 
// REST Client muito popular entre os desenvolvedores que 
// precisam fazer um pedido HTTP, o que ajuda a validar os 
// testes realizados. Já o Newman é uma ferramenta que executa 
// coleções de testes criados pelo Postman por linhas de 
// comandos. Ele facilita o uso de softwares de integração 
// contínua auxiliando a validação de uma API após a geração 
// de um build, a chamada validação em PIPELINE ou CICD 
// (Continuous Integration with Continuous Development)