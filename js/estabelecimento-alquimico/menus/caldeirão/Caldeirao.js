import Armazem from "../../modal-armazem/Armazem.js";
import potionsList from "../../../listas/potions.js";

export default class Caldeirao {

    constructor(insideCaldeirao) {
        this.insideCaldeirao = insideCaldeirao;
    }

    crafting(dragItem) {

        this.insideCaldeirao.push(dragItem.id);
        var dropCaldeirao = document.getElementById("caldeirao");

        if (this.insideCaldeirao.toString() === "alecrim") {
            dropCaldeirao.setAttribute("src", "images/sprite-caldeirão/caldeirão-alecrim.png");
        }

        //POÇÃO COMPRAR
        if (this.insideCaldeirao.toString() === "alecrim,alecrim") {
            this.insideCaldeirao = []; //LIMPAR CALDEIRÃO
            this.potionComprar(dropCaldeirao);
        }

    }

    potionComprar(dropCaldeirao) {

        dropCaldeirao.setAttribute("src", "images/sprite-caldeirão/caldeirão-alecrim-alecrim.png");

        var barraProgress = document.querySelector("#barra-progresso div");
        barraProgress.style.transition = "2s";
        barraProgress.style.width = "100%";
        setTimeout(() => {

            dropCaldeirao.setAttribute("src", "images/sprite-caldeirão/caldeirão.png");
            barraProgress.style.transition = "none";
            barraProgress.style.width = "0%";
            Armazem.add(potionsList().comprar);

        }, 2000);

    }

}
