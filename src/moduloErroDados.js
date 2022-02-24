const ajudaDados = [
    {
        // ERRO LOGIN - USUARIO INVALIDO
        id: "1011",
        idTitle: "gp-error#1011",
        title: "Não encontramos o usuário",
        desc: "Os nomes de usuários são únicos, verifique se esta escrito corretamente. Os nomes de usuário podem conter letras minúsculas e/ou números. Não pode ter espaço entre os caracteres (Ex: nomeapelido).",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Caso o usuário não esteja cadastrado, cadastre-se (Acessando o menu do site, clique na aba 'Entre no GoodPay' e no botão 'Novo Usuário'.)",
    },
    {
        // ERRO LOGIN - SENHA INVALIDA OU RECAPTCHA INVALID
        id: "1022",
        idTitle: "gp-error#1022",
        title: "Esqueceu seu Login?",
        desc: "Erro gerado por senha invalida ou resposta do reCAPTCHA inválida. A senha deve conter entre 8 e 20 caracteres. Com no mínimo: 1 letra maiúscula, 1 letra minúscula, 1 número e um caracter especial(@ # $ % & *).",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Caso o erro permaneça, Acesse a aba de recuperação de senha e clique no botão 'Recuperar senha'.",
    },
    {
        // ERRO LOGIN - CAMPOS VAZIOS
        id: "1033",
        idTitle: "gp-error#1033",
        title: "Campo Vazio",
        desc: "Verifique se todos os campos estão preenchidos corretamente.(usuário, senha, reCAPTCHA)",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Todos os campos precisam estar corretamente preenchidos para realizar o login.",
    },
    {
        // ERRO RECUPERAÇÃO DE SENHA - USUARIO / EMAIL INVALIDO
        id: "1044",
        idTitle: "gp-error#1044",
        title: "Campo de email ou usuário não preenchidos",
        desc: "Os campos não foram devidamente preenchidos. ",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Verifique se todos os campos estão preenchidos corretamente para prosseguir a recuperação da senha.",
    },
    {
        // ERRO RECUPERAÇÃO DE SENHA - USUARIO / EMAIL NÃO CADASTRADOS
        id: "1055",
        idTitle: "gp-error#1055",
        title: "Email ou usuário não encontrados",
        desc: "Infelizmente não foi encontrado nenhum dado com o email e usuário informado. Verifique se todos os dados estão preenchidos corretamente.",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Aparentemente, se o erro persistir, significa que você não esta cadastrado no nosso sistema. Cadastre-se no nosso menu, clicando na aba 'Entre no GoodPay' e no botão 'Novo Usuário'.",
    },
    {
        // ERRO REGISTRO - EMAIL
        id: "1066",
        idTitle: "gp-error#1066",
        title: "Não foi possível cadastrar o e-mail",
        desc: "Infelizmente o e-mail fornecido não pode ser cadastrado. Verifique se o e-mail está correto.",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "O e-mail deve estar completo, contendo @ e o provedor. Verifique se o e-mail está correto.",
    },
    {
        // ERRO REGISTRO - USUARIO INVALIDO
        id: "1077",
        idTitle: "gp-error#1077",
        title: "Não foi possível cadastrar o usuário",
        desc: "Os nomes de usuários são únicos, verifique se esta escrito corretamente. Os nomes de usuário podem conter letras minúsculas e/ou números. Não pode ter espaço entre os caracteres (Ex: nomeapelido).",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Caso  o nome escolhido ja tenha sido cadastrado, escolha outro nome.",
    },
    {
        // ERRO REGISTRO - SENHA INVALIDA
        id: "1088",
        idTitle: "gp-error#1088",
        title: "Não foi possível registrar a senha",
        desc: "A senha deve conter entre 8 e 20 caracteres. Com no mínimo: 1 letra maiúscula, 1 letra minúscula, 1 número e um caracter especial(@ # $ % & *).",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Verifique se a senha está contendo todos os requisitos para ser cadastrada.",
    },
    {
        // ERRO REGISTRO - SENHA REPETIDA INVALIDA
        id: "1099",
        idTitle: "gp-error#1099",
        title: "Senhas não conferem",
        desc: "A senha deve conter entre 8 e 20 caracteres. Com no mínimo: 1 letra maiúscula, 1 letra minúscula, 1 número e um caracter especial(@ # $ % & *). Ambos os campos tem que ser iguais.",
        idBusca: function () {
            return this.idTitle + " " + this.title + " " + this.desc;
        },
        msg: "Verifique se a senha está contendo todos os requisitos para ser cadastrada e se ambos os campos estão corretamente preenchidos.",
    },
];

export default ajudaDados;
