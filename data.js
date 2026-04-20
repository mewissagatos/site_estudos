const resumosData = [
    {
        title: "1. Segurança e Acesso",
        content: "O Banco de Dados atua como o 'cofre' que valida quem pode entrar no sistema. No login, as credenciais são enviadas ao servidor que consulta o BD. Se aprovado, uma <strong>Sessão</strong> é inicializada, permitindo que o usuário navegue sem digitar a senha a cada clique."
    },
    {
        title: "2. SQL vs No-SQL",
        content: "<strong>SQL (Relacional):</strong> Tabelas rígidas, escalabilidade vertical (melhorar o servidor). Ex: MySQL, Oracle.<br><br><strong>No-SQL (Não-Relacional):</strong> Flexível (documentos, grafos), escalabilidade horizontal (adicionar mais computadores). Ex: MongoDB, Redis."
    },
    {
        title: "3. Modelagem Relacional (MER)",
        content: "Usa <strong>Entidades</strong> (tabelas), <strong>Atributos</strong> (colunas) e <strong>Relacionamentos</strong> (ligações).<br>Atributo derivado é aquele calculado na hora (como Idade a partir da Data de Nascimento)."
    },
    {
        title: "4. Big Data e Análises",
        content: "O Big Data possui os 5 Vs (Volume, Velocidade, Variedade, Veracidade, Valor). Para analisar isso, usamos:<br>- <strong>Descritiva:</strong> O que aconteceu?<br>- <strong>Diagnóstica:</strong> Por que aconteceu?<br>- <strong>Preditiva:</strong> O que vai acontecer?<br>- <strong>Prescritiva:</strong> O que devo fazer?"
    },
    {
        title: "5. Estrela vs Floco de Neve",
        content: "No <strong>Modelo Estrela</strong>, a tabela Fato fica no centro ligada às Dimensões. É rápido, mas repete dados. O <strong>Floco de Neve</strong> 'quebra' as dimensões em sub-dimensões, economizando espaço, mas deixando as consultas (JOINs) mais lentas e complexas."
    }
];

const quizData = [
    // --- AS 15 QUESTÕES ORIGINAIS ---
    {
        question: "Qual tipo de escalabilidade é a mais comum e eficiente em bancos No-SQL, consistindo em adicionar mais servidores trabalhando em conjunto?",
        options: ["Escalabilidade Vertical", "Escalabilidade Horizontal", "Escalabilidade Diagonal", "Escalabilidade Circular"],
        answer: 1 
    },
    {
        question: "Na área de Data Science, se um sistema analisa dados passados para te dizer *o que vai acontecer no próximo mês*, qual tipo de análise ele está fazendo?",
        options: ["Descritiva", "Diagnóstica", "Preditiva", "Prescritiva"],
        answer: 2
    },
    {
        question: "O que caracteriza o modelo Floco de Neve (Snowflake) em relação ao modelo Estrela?",
        options: [
            "Ele não usa tabela de Fatos.",
            "As tabelas de dimensão são normalizadas (quebradas em sub-tabelas), economizando espaço.",
            "As consultas são mais rápidas pois não exigem JOINs.",
            "Só pode ser usado em bancos No-SQL."
        ],
        answer: 1
    },
    {
        question: "O que é um 'Atributo Derivado' em um modelo Entidade-Relacionamento?",
        options: [
            "Um atributo que vem de outro banco de dados.",
            "A chave primária da tabela.",
            "Um atributo que não é armazenado no banco, mas calculado a partir de outro (Ex: Idade).",
            "Um atributo que herda propriedades de uma classe."
        ],
        answer: 2
    },
    {
        question: "No controle de acesso de um sistema, o que significa dizer que 'a sessão de um usuário foi inicializada'?",
        options: [
            "Que o banco de dados foi criado.",
            "Que o usuário teve seu acesso liberado e o sistema gerou um identificador provisório para mantê-lo logado.",
            "Que o usuário alterou sua senha.",
            "Que a conexão com a internet caiu."
        ],
        answer: 1
    },
    {
        question: "Qual dessas opções é um exemplo clássico de um Banco de Dados No-SQL?",
        options: ["MySQL", "Oracle Database", "PostgreSQL", "MongoDB"],
        answer: 3
    },
    {
        question: "O que a 'Escalabilidade Vertical' envolve em um banco de dados SQL?",
        options: [
            "Adicionar mais computadores à rede.",
            "Melhorar o hardware do servidor atual (mais RAM, melhor Processador).",
            "Criar mais tabelas no banco.",
            "Mudar de SQL para No-SQL."
        ],
        answer: 1
    },
    {
        question: "Em Data Science, a análise que responde à pergunta 'O que eu devo fazer em relação a isso?' é a:",
        options: ["Análise Preditiva", "Análise Diagnóstica", "Análise Prescritiva", "Análise Descritiva"],
        answer: 2
    },
    {
        question: "No contexto de Big Data, o 'Volume' refere-se a:",
        options: [
            "A rapidez com que os dados chegam.",
            "A quantidade colossal de dados sendo gerada (Terabytes, Petabytes).",
            "A confiabilidade dos dados.",
            "O formato dos dados (áudio, vídeo, texto)."
        ],
        answer: 1
    },
    {
        question: "Qual o papel principal do Banco de Dados durante um processo de Login?",
        options: [
            "Criptografar a internet.",
            "Servir como um 'cofre de identidades' para comparar as credenciais digitadas com as armazenadas.",
            "Criar o layout da tela de login.",
            "Enviar e-mails para os usuários."
        ],
        answer: 1
    },
    {
        question: "Em um Modelo Relacional, o que a 'Cardinalidade' indica?",
        options: [
            "O número de tabelas no banco de dados.",
            "O tamanho máximo de um banco de dados.",
            "As regras de como as entidades se conectam (Ex: 1 para N, 1 para 1).",
            "O tipo de dado de uma coluna (Texto, Número)."
        ],
        answer: 2
    },
    {
        question: "Para o que serve a cláusula WHERE em um comando SQL?",
        options: [
            "Para deletar uma tabela.",
            "Para criar uma nova coluna.",
            "Para filtrar as linhas de acordo com uma condição.",
            "Para ordenar os resultados em ordem alfabética."
        ],
        answer: 2
    },
    {
        question: "Se você quiser encontrar a maior idade registrada na tabela, qual função SQL deve usar?",
        options: ["SUM(idade)", "AVG(idade)", "MAX(idade)", "MIN(idade)"],
        answer: 2
    },
    {
        question: "O que o caractere '%' faz no comando SQL: `WHERE nome LIKE 'S%'`?",
        options: [
            "Indica que o nome deve ter exatamente uma letra.",
            "Significa 'qualquer quantidade de caracteres'. Filtra quem começa com S.",
            "Calcula a porcentagem do nome.",
            "Retorna apenas pessoas que se chamam exatamente 'S'."
        ],
        answer: 1
    },
    {
        question: "No Modelo Estrela (Star Schema), como os dados são geralmente organizados?",
        options: [
            "Tudo em uma única tabela gigantesca.",
            "Em formatos de documentos JSON aninhados.",
            "Uma tabela de Fatos no centro, conectada a múltiplas tabelas de Dimensões ao redor.",
            "As tabelas de dimensão são quebradas em várias sub-dimensões."
        ],
        answer: 2
    },

    // --- AS 15 QUESTÕES NOVAS ---
    {
        question: "O que a sigla SQL significa em português?",
        options: [
            "Linguagem de Questão Simples",
            "Linguagem de Consulta Estruturada",
            "Sistema de Quantificação Local",
            "Software de Qualidade Logística"
        ],
        answer: 1 
    },
    {
        question: "Se um banco de dados No-SQL usa o formato de 'Grafos', ele é ideal para armazenar o quê?",
        options: [
            "Vídeos e músicas.",
            "Arquivos de texto como Word e PDF.",
            "Apenas números financeiros.",
            "Redes sociais e conexões complexas (ex: quem é amigo de quem)."
        ],
        answer: 3
    },
    {
        question: "No Modelo de Entidade-Relacionamento (MER), qual a função da 'Chave Primária' (Primary Key)?",
        options: [
            "Deletar a tabela inteira.",
            "Funcionar como um identificador único e exclusivo para cada registro da tabela (como se fosse um CPF).",
            "Criptografar as senhas.",
            "Fazer o backup do banco."
        ],
        answer: 1
    },
    {
        question: "Na arquitetura de um Data Warehouse (como no modelo Estrela), o que geralmente guardamos na 'Tabela de Fatos'?",
        options: [
            "Os eventos do negócio em si (transações métricas), como o número de Vendas ou Acessos.",
            "Os nomes das cidades e lojas.",
            "Os dados de login e senha dos funcionários.",
            "Apenas o ano atual."
        ],
        answer: 0
    },
    {
        question: "Na Análise Preditiva (Data Science), qual é o objetivo do sistema?",
        options: [
            "Verificar se o servidor está online.",
            "Tentar antecipar tendências e resultados futuros com base no histórico passado.",
            "Descobrir porque as vendas caíram mês passado.",
            "Apagar dados antigos."
        ],
        answer: 1
    },
    {
        question: "Quando um usuário faz Login, por que o sistema cria um 'Token' ou ID de Sessão para ele?",
        options: [
            "Para cobrar mais caro do usuário.",
            "Para que o servidor reconheça o usuário logado a cada clique, sem pedir que ele digite a senha toda vez.",
            "Para salvar espaço no HD do servidor.",
            "Para que a tela do aplicativo fique mais rápida."
        ],
        answer: 1
    },
    {
        question: "O que caracteriza a 'Escalabilidade Horizontal', que é muito comum em bancos No-SQL?",
        options: [
            "Conectar vários computadores comuns em rede (Cluster) para dividirem o processamento dos dados juntos.",
            "Trocar a placa mãe e o processador do servidor atual por um muito mais potente.",
            "Transformar a tabela vertical em uma tabela deitada.",
            "Instalar um novo sistema operacional."
        ],
        answer: 0
    },
    {
        question: "O pilar da 'Veracidade' no mundo do Big Data se preocupa principalmente com o quê?",
        options: [
            "A velocidade com que a internet baixa os dados.",
            "A garantia de que o dado coletado não está corrompido ou vindo de fontes duvidosas.",
            "O espaço em disco que o dado ocupa.",
            "A linguagem de programação usada."
        ],
        answer: 1
    },
    {
        question: "Se você precisa calcular a SOMA total de todos os valores de uma coluna no SQL (ex: somar todos os salários), qual função você usa?",
        options: ["MAX()", "AVG()", "COUNT()", "SUM()"],
        answer: 3
    },
    {
        question: "Como o Big Data se diferencia de um Banco de Dados tradicional no pilar 'Variedade'?",
        options: [
            "O Big Data só trabalha com um formato fixo.",
            "O Big Data varia o número de computadores todo dia.",
            "Ele analisa dados com estruturas muito diferentes ao mesmo tempo: textos soltos, imagens, logs, redes sociais.",
            "Ele tem várias telas diferentes."
        ],
        answer: 2
    },
    {
        question: "O que o filtro '%Silva%' (com % antes e depois) faz na cláusula LIKE do SQL?",
        options: [
            "Busca a palavra 'Silva' exatamente no meio da tabela.",
            "Deleta quem se chama Silva.",
            "Traz apenas pessoas que o nome completo é exatamente 'Silva'.",
            "Busca a palavra 'Silva' em qualquer parte do texto, não importa o que tenha antes ou depois."
        ],
        answer: 3
    },
    {
        question: "No SQL, para buscar informações de uma tabela, qual é o comando principal que usamos?",
        options: ["GET", "FETCH", "SELECT", "PULL"],
        answer: 2
    },
    {
        question: "Em Data Science, a Análise Prescritiva serve para:",
        options: [
            "Dizer que a memória do servidor está cheia.",
            "Sugerir ações que a empresa DEVE tomar baseadas nas previsões do sistema.",
            "Verificar quantos funcionários estão logados.",
            "Descrever o que aconteceu há 10 anos atrás."
        ],
        answer: 1
    },
    {
        question: "A cláusula 'IN' no SQL (Ex: WHERE status IN ('Ativo', 'Pendente')) funciona como um atalho para qual operador?",
        options: ["Vários operadores AND.", "Vários operadores OR.", "Vários comandos INSERT.", "Comandos JOIN."],
        answer: 1
    },
    {
        question: "Em um banco No-SQL do tipo 'Documento' (como MongoDB), os dados costumam ser salvos em qual formato amigável para programação?",
        options: ["Tabelas rígidas do Excel.", "Formato JSON (parecido com dicionários do Python ou objetos do JavaScript).", "Imagens PNG.", "Arquivos PDF."],
        answer: 1
    }
];

const sqlChallenges = [
    {
        id: 1,
        text: "Insira um registro na tabela 'cadastro' do banco 'Empresa'. Os valores devem ser: nome='Ana', idade=22, cidade='Rio de Janeiro'. (Dica: INSERT INTO ...)",
        expectedKeywords: ["insert", "into", "empresa.cadastro", "values", "ana", "22", "rio de janeiro"]
    },
    {
        id: 2,
        text: "Escreva uma query para selecionar todas as pessoas que moram em 'São Paulo' ou 'Rio de Janeiro'. (Dica: SELECT * FROM ... WHERE ...)",
        expectedKeywords: ["select", "from", "where", "sao paulo", "rio de janeiro", "or", "cidade", "="]
    },
    {
        id: 3,
        text: "Como você faria para calcular a MÉDIA das idades da tabela cadastro?",
        expectedKeywords: ["select", "avg", "idade", "from", "cadastro"]
    },
    {
        id: 4,
        text: "Escreva a consulta para verificar as pessoas que têm o nome com inicial 'S'. (Dica: usar LIKE).",
        expectedKeywords: ["select", "from", "where", "nome", "like", "s%"]
    },
    {
        id: 5,
        text: "Apresente as pessoas menores de idade (idade < 18) OU que moram em locais diferentes do 'Rio de Janeiro' (!= ou <>).",
        expectedKeywords: ["select", "from", "where", "idade", "<", "18", "or", "cidade", "rio de janeiro"]
    },
    {
        id: 6,
        text: "Escreva uma query para selecionar TODAS as colunas e todas as linhas da tabela 'cadastro'.",
        expectedKeywords: ["select", "*", "from", "cadastro"]
    },
    {
        id: 7,
        text: "Selecione as pessoas e as ordene pela idade, do mais novo para o mais velho. (Dica: ORDER BY coluna ASC).",
        expectedKeywords: ["select", "from", "cadastro", "order by", "idade"]
    },
    {
        id: 8,
        text: "Escreva uma consulta para contar a QUANTIDADE total de pessoas registradas na tabela. (Dica: usar COUNT(*)).",
        expectedKeywords: ["select", "count", "from", "cadastro"]
    },
    {
        id: 9,
        text: "Filtre as pessoas que moram em 'Belo Horizonte' E possuem idade estritamente MAIOR que 25 anos. (Dica: AND).",
        expectedKeywords: ["select", "from", "cadastro", "where", "belo horizonte", "and", "idade", ">", "25"]
    },
    {
        id: 10,
        text: "Para atualizar os dados: Mude a cidade da pessoa chamada 'Ana' para 'São Paulo'. (Dica: UPDATE tabela SET coluna=novo WHERE condicao).",
        expectedKeywords: ["update", "cadastro", "set", "sao paulo", "where", "nome", "ana"]
    }
];
