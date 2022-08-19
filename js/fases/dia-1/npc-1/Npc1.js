import falas from './falas.js';

export default class Npc1 {

  static load() {
    const areaFases = document.getElementById("area-fases");
    areaFases.innerHTML = `
        <img id="npc" src="images/npcs/npc-1.png" />
        <div id="caixa-dialogo">
            <p></p>
            <div id="caixa-escolhas"></div>
        </div>
    `;
  }

  static start() {

    const spriteNPC = document.getElementById("npc");
    var delayNPC = 1000;
    setTimeout(() => {
      spriteNPC.style.left = "25%"; //AÇÃO DE ENTRADA DO NPC
    }, delayNPC)

    let caixaDialogo = document.querySelector("#caixa-dialogo p");
    let caixaEscolhas = document.getElementById("caixa-escolhas");

    var indexLetra = 0;
    var indexDialogo = 0;
    var tipoEscoha = "A";

    var delayCaixaDialogo = 2000 + delayNPC;
    setTimeout(() => {
      caixaDialogo.parentElement.style.opacity = "1";
      digitarDialogo(indexLetra, indexDialogo, tipoEscoha);
    }, delayCaixaDialogo);

    function digitarDialogo(iLetra, iDialogo, pTipoEscoha) {

      var dialogoNPC;
      var escolhasUser;
      if (pTipoEscoha === "A") {
        dialogoNPC = falas()[iDialogo].npc_A;
        escolhasUser = falas()[iDialogo].user_A;
      } else if (pTipoEscoha === "B") {
        dialogoNPC = falas()[iDialogo].npc_B;
        escolhasUser = falas()[iDialogo].user_B;
      }

      if (dialogoNPC != undefined) {

        caixaDialogo.innerHTML += dialogoNPC.charAt(iLetra);

        if (iLetra < dialogoNPC.length) {
          indexLetra++
          setTimeout(() => {
            digitarDialogo(indexLetra, iDialogo, pTipoEscoha);
          }, 50)
        } else {

          caixaEscolhas.innerHTML = escolhasUser;
          clicarBtnsEscolhas();
          inputPalavraEscolhas();
          dropPotionEscolhas();

        }

      } else {
        caixaDialogo.parentElement.style.opacity = "0";
        var moedaBronze = document.querySelector("#qtd-moeda-bronze span");
        var qtdMoedaBronze = Number(moedaBronze.innerHTML);
        moedaBronze.innerHTML = qtdMoedaBronze + 5;
      }

    }

    function clicarBtnsEscolhas() {
      var btnEscolhas = document.querySelectorAll("#caixa-escolhas button");
      btnEscolhas.forEach((value, index) => {
        btnEscolhas[index].addEventListener("click", () => {

          caixaDialogo.innerHTML = "";
          caixaEscolhas.innerHTML = "";
          indexLetra = 0;
          indexDialogo++;

          switch (value.id) {
            case "A":
              tipoEscoha = "A";
              digitarDialogo(indexLetra, indexDialogo, tipoEscoha);
              break;
            case "B":
              tipoEscoha = "B";
              digitarDialogo(indexLetra, indexDialogo, tipoEscoha);
            case "":
              digitarDialogo(indexLetra, indexDialogo, tipoEscoha);
              break;
          }

        });
      });
    }

    function inputPalavraEscolhas() {

      var inputEscolha = document.getElementById("palavrEsqci");
      if (inputEscolha != null) {

        inputEscolha.addEventListener("keyup", () => {
          if (inputEscolha.value.toLowerCase() === "comprar") {
            caixaDialogo.innerHTML = "";
            caixaEscolhas.innerHTML = "";
            indexLetra = 0;
            indexDialogo++;
            digitarDialogo(indexLetra, indexDialogo, tipoEscoha);
          }
        });

      }
    }

    function dropPotionEscolhas() {
      var dragItem = null;
      document.body.addEventListener("dragstart", function (event) {
        dragItem = event.target;
      });

      var dropPotion = document.getElementById("drop-potion");
      if (dropPotion != null) {
        dropPotion.addEventListener("drop", () => {
          console.log(dragItem.id)
          if (dragItem.id === "potion-comprar") {
            caixaDialogo.innerHTML = "";
            caixaEscolhas.innerHTML = "";
            indexLetra = 0;
            indexDialogo++;
            digitarDialogo(indexLetra, indexDialogo, tipoEscoha)
          }
        });

      }
    }

  }

}