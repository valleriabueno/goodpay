import rotaApp from "./moduloRotas.js";

class ControleRotasApp{
    constructor(status, idRota, tela, linkUrl){
        this.status = status;
        this.idRota = idRota;
        this.tela = tela;
        this.linkUrl = linkUrl;
    }
    validaRota(status, idRota){
        //Ao receber tentativasDemais1 redireciona para o mesma página de falhaLogin1
        if(idRota === "tentativasDemais1") idRota = "falhaLogin1";
        if(status === "true"){
            return (rotaApp.find(i=>i.idRota === idRota).linkUrl);
        } else {
            return (rotaApp.find(i=>i.idRota === idRota).linkUrl);
        }
    } 
    listarRota() {
        let addHtml = "";
        let classeTab = `table table-dark table-striped table-hover table bordered border-light`;
        addHtml += `<table class="${classeTab}>"
        <thead>
        <tr>
        <th>Id da rota</th>
        <th>Tela</th>
        <th>Link da rota</th>
        </tr>
        </thead>
        <tbody>`;
        rotaApp.forEach((rotaApp, index) => {
            addHtml += `<tr>
            <td>${rotaApp.idRota}</td>
            <td>${rotaApp.tela}</td>
            <td>${rotaApp.linkUrl}</td>
            </tr>`
        });

        addHtml += `</tbody></table>`;
        return addHtml;
    }    
}

const controleRotasApp = new ControleRotasApp();
export default controleRotasApp;