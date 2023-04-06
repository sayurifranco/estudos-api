// Seguem aqui os comandos básicos relacionados aos métodos de requisições HTTP:

// * GET — Solicita ao servidor um recurso chamado de solicitação URl. Este é o método padrão, pois é a forma como o browser chama o servidor quando digita-se uma URL para que ele a recupere.

// * POST — Contém um corpo nos quais seus parâmetros de solicitação já são codificados. O mais frequente uso desse método é na submissão de formulários.

// * HEAD — Similar ao método GET, o servidor apenas retoma a linha de resposta e os cabeçalhos de resposta.

// * PUT — Esse método permite o envio de arquivos para o servidor Web.

// * DELETE — Permite a exclusão de documentos dentro do servidor Web.

// * OPTIONS — É possível fazer uma consulta de quais comandos estão disponíveis para um determinado usuário.

// * TRACE — Permite depurar as requisições, devolvendo o cabeçalho de um documento.

// As requisições consistem nos seguintes elementos:

// Um método HTTP: geralmente é um verbo/comando como GET, POST, PUT, entre outros listados anteriormente, ou um substantivo como OPTIONS ou HEAD que define qual operação o cliente quer fazer.
// Tipicamente, um cliente quer PEGAR um recurso (usando GET) ou um cliente quer PUBLICAR dados de um formulário HTML (usando POST), embora mais operações podem ser necessárias em outros casos.

// O caminho do recurso a ser buscado, utilizando a URL do recurso sem os elementos que são de contexto — por exemplo, sem o protocolo (http://), o domínio domain (aqui como developer.mozilla.org), ou a porta port TCP (aqui indicada pelo 80 que é ocultado por ser o número da porta padrão). A versão do protocolo HTTP. Cabeçalhos opcionais que contêm informações adicionais para os servidores. Ou um corpo de dados, para alguns métodos como POST, similares aos corpos das respostas, que contêm o recurso requisitado.

// Após realizada a requisição, uma resposta no protocolo HTTP será emitida com dois itens básicos: o header (cabeçalho) e corpo.

// A informação do header realiza três verificações inicialmente:

// Identifica o protocolo que está sendo usado no browser; Solicita confirmação de que tudo ocorreu corretamente; Verifica o tipo de conteúdo que está incluído no corpo (o corpo possui o conteúdo que o browser exibirá).
// Para auxiliar o processo de análise da comunicação HTTP, existem algumas respostas que o servidor encaminha para o browser; são informações que os testadores devem entender e interpretar para um diagnóstico do comportamento das respostas. Muitas dessas respostas são comumente vistas por programadores e testadores, sendo representadas por um número indicado pelo problema ocorrido.

// Abaixo estão listados os mais comuns:

// 200 (OK) — Informa que a confirmação da requisição foi respondida com sucesso. 304 (NOT MODIFIED) — Informa que os recursos não foram modificados desde a última vez que foi feito um pedido. Isso ocorre por causa dos mecanismos de cache do browser. 401 (UNAUTHORIZED) — Informa que o cliente não tem acesso para acessar a área requisitada. Ocorre muito em intranets de acesso privado que precisam ser acessadas com um usuário e senha. 403 (FORBIDDEN) — Informa que o acesso à área requisitada falhou. Isso pode ocorrer em caso de acesso a áreas que exigem login e senha e não houve autorização para aquele usuário. 404 (NOT FOUND) — Não encontrado. Ocorre quando o usuário tenta acessar uma área inexistente no endereço passado, por exemplo, páginas removidas ou recursos excluídos.

// Mas afinal: o que é API?
// Uma API é um conjunto de definições e protocolos (regras para troca de dados), usado no desenvolvimento e na integração de aplicações. Em algumas literaturas, as APIs são descritas como um contrato entre um provedor e um usuário de informações, estabelecendo o conteúdo exigido pelo consumidor (a chamada) e o conteúdo exigido pelo solicitante (a resposta). Um bom exemplo seria o design de uma API para ser utilizada em um serviço meteorológico, que pode especificar que, ao usuário fornecer um CEP , o solicitante receberá uma resposta em duas partes: a primeira contendo a temperatura mais elevada e a segunda com a temperatura mais baixa.  

// Ao interagir com um computador ou sistema para recuperar informações ou executar uma função, uma API ajuda a comunicar o que você quer ao sistema, para que ele entenda e realize o que foi solicitado. 

// Sendo assim, as APIs operam como um mediador entre os usuários ou clientes e os recursos ou serviços web que eles querem obter. As APIs também fornecem para organizações a possibilidade de compartilhar recursos e informações e, ao mesmo tempo, manter a segurança, o controle e a obrigatoriedade de autenticação, pois permitem determinar quem tem acesso e o que pode ser acessado. 

// Uma vantagem de se usar APIs é que não é necessário saber todos os detalhes sobre o armazenamento em cache, como os recursos são recuperados ou qual é a origem deles. Com isso, as aplicações se tornam menos dependentes de capacidade de memória ou gestão de variáveis desnecessárias.

// SOAP
// O SOAP é um protocolo de transferência de mensagens em formato XML para uso em ambientes distribuídos. O padrão SOAP funciona como um tipo de framework que permite a interoperabilidade entre diversas plataformas com mensagens personalizadas.

// Aplicando este padrão em Web Services, geralmente se utiliza o WSDL para descrever a estrutura das mensagens SOAP e as ações possíveis em um endpoint.

// Uma das maiores vantagens disso é que várias linguagens e ferramentas conseguem ler e gerar mensagens facilmente. Várias linguagens de programação permitem a geração de objetos de domínio, Stubs e Skeletons a partir da definição do WSDL, permitindo a comunicação remota via RPC através de chamadas a métodos remotos, inclusive com argumentos complexos, como se fossem chamadas locais.

// Um problema comum deste padrão é que ele adiciona um overhead considerável, tanto por ser em XML quanto por adicionar muitas tags de meta-informação. Além disso, a serialização e desserialização das mensagens pode consumir um tempo considerável, ou seja, pode tornar a troca de dados mais lenta dependendo do volume de informações a ser utilizado.

// REST
// O REST é outro um protocolo de comunicação baseado no protocolo de hipermídia, o já mencionado  HTTP. No entanto, ele não impõe restrições ao formato da mensagem, apenas no comportamento dos componentes envolvidos.

// Neste item, a maior vantagem é sua flexibilidade. O desenvolvedor pode optar pelo formato mais adequado para as mensagens do sistema de acordo com sua necessidade específica. Os formatos mais comuns são JSON, XML e texto puro, mas em teoria qualquer formato pode ser usado, assim temos outra vantagem: quase sempre Web Services que usam REST são mais "leves" e, portanto, mais rápidos.

// Mas nem tudo são flores. O problema com o REST pode surgir justamente por causa de suas vantagens, pois, como a definição do corpo de dados fica totalmente a cargo do desenvolvedor, os problemas de interoperabilidade são mais comuns.

// SOAP ou REST, eis a questão
// Em geral, SOAP é uma boa opção para instituições com padrões rígidos e ambientes complexos (várias plataformas e sistemas). Muitas ferramentas corporativas tiram vantagem do padrão e possibilitam filtragem, enfileiramento, classificação e redirecionamento das mensagens trocadas entre sistemas.

// No restante, para uso no dia-a-dia, não há muitos motivos concretos para não se usar REST e JSON. Praticamente todas as plataformas e linguagens modernas suportam esses conceitos, e a solução final é muito mais simples do que o equivalente em SOAP.

// Além disso, integrações com alto volume de requisições são inviáveis em SOAP. REST é capaz de atender volume e complexidade sem dificuldades, exigindo apenas um mínimo de experiência do desenvolvedor para estabelecer e reforçar os padrões adequados.

// JSON e XML
// O que é XML?

// O XML é um formato de dados que foi consolidado em meados da década de 1990. O objetivo deste tipo de arquivo é criar um formato que poderia ser lido por software e que tivesse flexibilidade e simplicidade, visando, entre outras coisas:

// – Possibilidade de criação de tags (você é quem cria as tags/palavra-chave para buscar específicas de determinadas informações)
// – Concentração na estrutura da informação e não em sua aparência

// O que é JSON?

// A extensão JSON é o acrônimo para JavaScript Object Notation. É um formato de padrão aberto que utiliza texto legível a humanos para transmitir objetos de dados consistindo de pares atributo-valor.
