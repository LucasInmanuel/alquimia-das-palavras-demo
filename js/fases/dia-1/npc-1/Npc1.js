import falas from "./falas.js";
import UsarItens from "../../usar-itens/UsarItens.js";

export default class Npc1 {
  static load(npc) {
    const areaFases = document.getElementById("area-fases");
    areaFases.innerHTML = `
        <img id="npc" src="images/npcs/${npc}" />
        <div id="caixa-dialogo">
            <p></p>
            <div id="caixa-escolhas"></div>
        </div>
    `;
  }

  static start(palavraEsquecida, tipoMoeda, qtdMoeda) {
    const spriteNPC = document.getElementById("npc");
    var delayNPC = 1000;
    setTimeout(() => {
      spriteNPC.style.left = "25%"; //AÇÃO DE ENTRADA DO NPC
    }, delayNPC);

    let caixaDialogo = document.querySelector("#caixa-dialogo p");
    let caixaEscolhas = document.getElementById("caixa-escolhas");

    var indexLetra = 0;
    var indexDialogo = 0;
    var tipoEscolha = "A";

    var delayCaixaDialogo = 2000 + delayNPC;
    setTimeout(() => {
      caixaDialogo.parentElement.style.opacity = "1";
      digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
    }, delayCaixaDialogo);

    function digitarDialogo(iLetra, iDialogo, pTipoEscolha) {
      var dialogoNPC;
      var escolhasUser;
      if (pTipoEscolha === "A") {
        dialogoNPC = falas()[iDialogo].npc_A;
        escolhasUser = falas()[iDialogo].user_A;
      } else if (pTipoEscolha === "B") {
        dialogoNPC = falas()[iDialogo].npc_B;
        escolhasUser = falas()[iDialogo].user_B;
      }

      if (dialogoNPC != undefined) {
        caixaDialogo.innerHTML += dialogoNPC.charAt(iLetra);

        if (iLetra < dialogoNPC.length) {
          indexLetra++;
          setTimeout(() => {
            digitarDialogo(indexLetra, iDialogo, pTipoEscolha);
          }, 50);
        } else {
          caixaEscolhas.innerHTML = escolhasUser;

          var potion = "potion-" + palavraEsquecida;

          //CLIQUE NAS ESCOLHAS
          var btnEscolhas = document.querySelectorAll("#caixa-escolhas button");
          clickButtons(btnEscolhas);

          //DIGITE A PALAVRA ESQUECIDA
          var inputEscolha = document.getElementById("palavraEsqueci");
          inputPalavraEsquecida(inputEscolha, palavraEsquecida);

          //ENTREGUE A POÇÃO CORRETA PARA O CLIENTE
          var dropPotion = document.getElementById("drop-potion");
          areaDropPotion(dropPotion, potion);

          //ITEM PARA AJUDA NA IDENTIFICAÇÃO DA PALAVRA
          if (inputEscolha != null) {
            var usarItens = new UsarItens(palavraEsquecida);

            var dropItem = document.getElementById("drop-item");
            usarItens.dropItem(dropItem);
          }
        }
      } else {
        //ANIMAÇÃO DE SÁIDA DO NPC
        caixaDialogo.parentElement.style.opacity = "0";
        spriteNPC.style.transform = "scaleX(-1)";
        setTimeout(() => {
          spriteNPC.style.left = "-50%";
        }, 2000);

        //DEFINE A QUANTIDADE DE MOEDAS GANHAS
        var moeda = document.querySelector(`#qtd-moeda-${tipoMoeda} span`);
        var qtd = Number(moeda.innerHTML);
        moeda.innerHTML = qtd + qtdMoeda;
      }
    }

    function clickButtons(buttons) {
      buttons.forEach((value, index) => {
        buttons[index].addEventListener("click", () => {
          caixaDialogo.innerHTML = "";
          caixaEscolhas.innerHTML = "";
          indexLetra = 0;
          indexDialogo++;

          switch (value.id) {
            case "A":
              tipoEscolha = "A";
              digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
              break;
            case "B":
              tipoEscolha = "B";
              digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
            case "":
              digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
              break;
          }
        });
      });
    }

    function inputPalavraEsquecida(input, palavraEsquecida) {
      if (input != null) {
        input.placeholder =
          "Qual é a palavra? " + palavraEsquecida.replaceAll(/[a-zA-Z]/g, "*");

        input.addEventListener("keyup", () => {
          if (input.value.toLowerCase() === palavraEsquecida) {
            caixaDialogo.innerHTML = "";
            caixaEscolhas.innerHTML = "";
            indexLetra = 0;
            indexDialogo++;
            digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
          }
        });
      }
    }

    function areaDropPotion(areaDrop, potion) {
      var dragElement = null;
      document.body.addEventListener("dragstart", function (event) {
        dragElement = event.target;
      });

      if (areaDrop != null) {
        areaDrop.addEventListener("drop", () => {
          if (dragElement.id === potion) {
            caixaDialogo.innerHTML = "";
            caixaEscolhas.innerHTML = "";
            indexLetra = 0;
            indexDialogo++;
            digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
          }
        });
      }
    }
  }
}
