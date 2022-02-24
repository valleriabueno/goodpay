import controlerUserLogin from './moduloControlerLogin.js'
import controleRotasApp from './moduloControleRotas.js'
import cardsBuilder from './moduloControlerCards.js'
import comunicacaoModal from './moduloComunicacaoDados.js'
import userLogin from './moduloDados.js'
import controleTextoImagemBanner from "./moduloControlerBanner.js"
import controllerMenuAjuda from "./moduloControllerAjuda.js";

validaRecuperarSenha()

switch (window.location.pathname) {
    case "/app.html":
        controllerApp();
        break;
    case "/index.html":
        adicionarBloco();
        break;
    default:
}
// Criando submenu de ajuda. # TEAM-35
controllerMenuAjuda.construirSubMenuAjuda
window.onload = controllerMenuAjuda.listaSugestao;

// Adicionando cards
function adicionarBloco() {
    let blocoCards = cardsBuilder.addCards()
    blocoCards.forEach((cards, index) => {
        document.querySelector(`#cardImagem${index + 1}`).innerHTML = `
    <img src="${cards.img}" class="card-img-top"/>`
        document.getElementById(`cardTitulo${index + 1}`).innerHTML = cards.title
        document.getElementById(`cardTexto${index + 1}`).innerHTML = cards.body
        document.getElementById(`cardRodape${index + 1}`).innerHTML = cards.date
    })

    setTimeout(adicionarBloco, 90000)
}

//Trazendo elementos do Bootstrap para uso da main Javascript.
var myModal = new bootstrap.Modal(document.getElementById('myModal'))
//inserindo texto com operação do recaptcha
var display = controlerUserLogin.numberGenerator()
document.getElementById(
    'logyQuestion'
).innerHTML = `Resolva a operação: ${display[0].num01} + ${display[0].num02}`
//Ordem para executar e validar o Login.
const entrarUsuario = document.getElementById('btnEntrar')
entrarUsuario.addEventListener('click', event => {
    let user = document.getElementById('usuario').value,
        senha = document.getElementById('senha').value,
        recaptcha = document.getElementById('recaptcha').value
    let alertModal = controlerUserLogin.loginInfo(user, senha, recaptcha)

    //Função para encontrar o usuário Admin
    function findAdmin(user) {
        return user.id === '1003'
    }

    //Função para encontrar as informações do Modal do usuário Admin
    function findAdminModal(user) {
        return user.idModal === 'adminListaUsuario1'
    }

    // Listagem de Usuários inseridas no bodyModal
    comunicacaoModal.find(findAdminModal).bodyModal =
        controlerUserLogin.usuariosListagem()

    if (
        // Condição para exibir o adminModal
        user === userLogin.find(findAdmin).username &&
        senha === userLogin.find(findAdmin).senha &&
        bodyModal === comunicacaoModal.find(findAdminModal).bodyModal
    ) {
        document.getElementById('titleModal').innerHTML = alertModal.title
        document.getElementById('bodyModal').innerHTML = alertModal.bodyModal
        document.getElementById('btnModalClose').innerHTML = alertModal.b1
        document.getElementById('btnModalSave').innerHTML = alertModal.b2
    } else {
        document.getElementById('titleModal').innerHTML = alertModal.title
        document.getElementById('bodyModal').innerHTML = alertModal.bodyModal
        document.getElementById('btnModalClose').innerHTML = alertModal.b1
        document.getElementById('btnModalSave').innerHTML = alertModal.b2
    }

    myModal.show()
    if (alertModal.idModal !== 'tentativasDemais1') {
        setTimeout(carregarPagina, 2000)
        function carregarPagina() {
            window.location.href = controleRotasApp.validaRota(
                localStorage.status,
                alertModal.idModal
            )
        }
    }
})
//Ordem para criar um novo usuário.
const novoUsuario = document.getElementById('btnNovoUsuario')
novoUsuario.addEventListener('click', event => {
    window.location.href = controleRotasApp.validaRota(
        'false',
        'usuarioNaoExiste1'
    )
})

// Controle de acesso ao App.html
var timer
function resetTimer() {
    clearTimeout(timer)
    timer = setTimeout(e => {
        localStorage.clear();
        if (document.getElementById('myModalApp')) {
            var myModalApp = new bootstrap.Modal(document.getElementById('myModalApp'))
            document.getElementById('titleModalApp').innerHTML = 'Erro!'
            document.getElementById('bodyModalApp').innerHTML = 'Sua sessão expirou!'
            document.getElementById('btnModalApp').innerHTML = 'Sair'
            document.getElementById('btnModalApp').addEventListener('click', e => {
                window.location.pathname = '/index.html'
            })
            document.getElementById('btnModalCloseApp').addEventListener('click', e => {
                window.location.pathname = '/index.html'
            })
            myModalApp.show();
        }
    }, 300000)
};
if (window.location.pathname != 'app.html') {
    localStorage.removeItem('email')
    localStorage.removeItem('userName')
    localStorage.removeItem('contador')
    localStorage.removeItem('status')
}

function controllerApp() {
    var myModalApp = new bootstrap.Modal(document.getElementById('myModalApp'))
    document.getElementById('emailBadge').innerHTML = localStorage.email

    document.getElementById(
        'titleModalApp'
    ).innerHTML = `Seja bem vindo, ${localStorage.userName}!`

    document.getElementById('btnSair').addEventListener('click', e => {
        localStorage.clear()
        window.location.pathname = '/index.html'
    })
    // Detector de  inatividade!
    window.onload = resetTimer
    document.onmousemove = resetTimer
    document.onkeydown = resetTimer

    if (!localStorage.email) {
        document.getElementById('titleModalApp').innerHTML = 'Erro!'
        document.getElementById('bodyModalApp').innerHTML =
            'Você não possui permissão para acessar essa página!'
        document.getElementById('btnModalApp').innerHTML = 'Voltar'
        document.getElementById('btnModalApp').addEventListener('click', e => {
            window.location.pathname = '/index.html'
        })
        document.getElementById('btnModalCloseApp').addEventListener('click', e => {
            window.location.pathname = '/index.html'
        })

        myModalApp.show()
    } else if (localStorage.getItem('contador') === null) {
        myModalApp.show()
        localStorage.setItem('contador', 'feito')
    }

};

//Recuperar senha
function validaRecuperarSenha() {
    if (window.location.pathname === "/recuperar.html") {
        const campoRecuperarSenha = document.getElementById('btnRecuperar')
        campoRecuperarSenha.addEventListener('click', (event) => {
            let nome = document.getElementById('nome').value
            let email = document.getElementById('email').value
            controlerUserLogin.conferirUsuario(nome, email)
        })
    }
};

//Mudar Banner
controleTextoImagemBanner.indicarIntervalo()