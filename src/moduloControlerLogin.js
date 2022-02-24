import userLogin from './moduloDados.js'
import comunicacaoModal from './moduloComunicacaoDados.js'
import controleRotasApp from './moduloControleRotas.js';
class ControlerUserLogin {
  constructor(status) {
    this.status = status
    this.attempts = 0 //Tentativas de login
    this.resultReference = 0 //Resultado da operação do recaptcha
  }
  checkLogin() {
    this.status = true
  }
  checkOutLogin() {
    this.status = false
  }
  loginInfo(user, senha, recaptcha) {
    localStorage.clear()
    let infoCheck = userLogin.find(userLogin => userLogin.username === user)

    // Função para encontrar o usuário Admin
    function findAdmin(user) {
      return user.id === '1003'
    }

    if (
      user === null ||
      senha === null ||
      user === '' ||
      senha === '' ||
      recaptcha === null ||
      recaptcha === ''
    ) {
      this.checkOutLogin()
      localStorage.status = this.status
      return comunicacaoModal.find(i => i.idModal === 'camposVazios1')
    } else if (!infoCheck) {
      this.checkOutLogin()
      localStorage.status = this.status
      return comunicacaoModal.find(i => i.idModal === 'usuarioNaoExiste1')
    } else if(
      // Verifica se senha e usuário são do superRotas
      infoCheck.senha === senha && infoCheck.username === "superRotas"
      ) {
      comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === "listaRotas").bodyModal = controleRotasApp.listarRota();
      return (comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === "listaRotas"));
    } else if (
      // Verifica se senha e usuário são do admin
      user === userLogin.find(findAdmin).username &&
      senha === userLogin.find(findAdmin).senha
    ) {
      this.checkLogin()
      localStorage.status = this.status
      return comunicacaoModal.find(
        comunicacaoModal => comunicacaoModal.idModal === 'adminListaUsuario1'
      )
    } else {
      if (infoCheck.senha === senha && recaptcha == this.resultReference) {
        //Senha e recaptcha precisam estar corretos
        this.checkLogin()
        localStorage.status = this.status
        localStorage.email = infoCheck.email
        localStorage.userName = infoCheck.username

        return comunicacaoModal.find(i => i.idModal === 'loginExecutado1')
      } else {
        this.attempts++
        if (this.attempts !== 3) {
          //Máximo de tentativas
          this.checkOutLogin()
          localStorage.status = this.status
          let tentativasObject = comunicacaoModal.find(
            i => i.idModal === 'tentativasDemais1'
          )
          //Passando o resto das tentativas para o usuário
          tentativasObject.bodyModal = `Error#1022 - Você já fez ${this.attempts} tentativa(s)! Com três será redirecionado(a) para recuperar senha`;
          return tentativasObject
        } else {
          this.attempts = 0
          this.checkOutLogin()
          localStorage.status = this.status
          return comunicacaoModal.find(i => i.idModal === 'falhaLogin1')
        }
      }
    }
  }
  numberGenerator() {
    //gerador de números aleatorios para recaptcha
    let logicalOperator1 = Math.floor(Math.random() * 300)
    let logicalOperator2 = Math.floor(Math.random() * 10)
    let result = [
      {
        num01: logicalOperator1,
        num02: logicalOperator2,
        sum: logicalOperator1 + logicalOperator2
      }
    ]
    this.resultReference = result[0].sum
    return result
  }

  usuariosListagem() {
    let listagemHtml = ''
    listagemHtml += ` <div class="table-responsive"><table class="table table-success table-striped table-bordered"> <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Usuário</th>
                <th scope="col">Senha</th>
                <th scope="col">Email</th>
            </tr>
           </thead>`
    userLogin.forEach((userLogin, index) => {
      listagemHtml += `
                <tbody>
                <tr>
                    <th scope="row">${userLogin.id}</th>
                    <td >${userLogin.username}</td>
                    <td >${userLogin.senha}</td>
                    <td >${userLogin.email}</td>
                </tr>
               </tbody>
                `
    })
    listagemHtml += '</table></div>'

    return listagemHtml
  }

  conferirUsuario(nome, email) {
    let infoCheck = userLogin.find((userLogin) => userLogin.username === nome && userLogin.email === email)
    let alertMsg = document.getElementById('alertMsg')

    if(nome === null || email === null || nome === "" || email === "") {
        alertMsg.classList.add('alert', 'alert-danger', 'text-center')
        alertMsg.innerHTML = 'Campo de email ou usuário não preenchido.'
    }else if(!infoCheck) {
        alertMsg.classList.add('alert', 'alert-danger', 'text-center')
        alertMsg.innerHTML = 'Email ou usuário não encontrado.'
    } else {
        alertMsg.classList.remove('alert-danger')
        alertMsg.classList.add('alert', 'alert-success', 'text-center')
        alertMsg.innerHTML = 'Email enviado com sucesso!'
    }
}
}

const controlerUserLogin = new ControlerUserLogin()
export default controlerUserLogin
