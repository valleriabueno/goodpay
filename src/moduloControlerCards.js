import cards from "./moduloCardsDados.js";

class CardsBuilder {
    selectCategoria() {
        const selectCategoria = cards.map((cards) => cards.categoria);
        const uniqueCategoria = [...new Set(selectCategoria)];
        const indexCategoria = Math.floor(Math.random() * uniqueCategoria.length)
        if (localStorage.getItem("cardCategoria") !== uniqueCategoria[indexCategoria]) {
            localStorage.setItem("cardCategoria", `${uniqueCategoria[indexCategoria]}`)
            return uniqueCategoria[indexCategoria]
        } else {
            return this.selectCategoria();
        }
    }
    addCards() {
        let categoria = this.selectCategoria()
        const filtroBloco1 = cards.filter((cards) => cards.categoria === categoria);
        return filtroBloco1;
    }
}

const cardsBuilder = new CardsBuilder();
export default cardsBuilder;
