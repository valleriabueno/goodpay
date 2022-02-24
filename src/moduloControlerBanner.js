import muda from './moduloBannerDados.js'

class ControleTextoImagemBanner{
    constructor(){
        this.imagemAtual = 0; //inicialização da classe
        this.bannerHtml = "";
    }

    //método para substituir as informações
    rotacionarBanner(){
        this.imagemAtual = (this.imagemAtual + 1) % muda.length; 
        document.querySelector(".card-img-top").src= muda[this.imagemAtual].img;
        document.querySelector(".card-title").innerText= muda[this.imagemAtual].h5;
        document.querySelector(".card-text").innerText= muda[this.imagemAtual].p;
        document.querySelector(".text-muted").innerHTML= muda[this.imagemAtual].data;
    }
  
    //método para indicar o tempo de troca
    indicarIntervalo(){
        setInterval(this.rotacionarBanner.bind(this), 18000);
    }
  }

  const controleTextoImagemBanner = new ControleTextoImagemBanner();
  export default controleTextoImagemBanner;
  