import EstabelecimentoAlquimico from "./estabelecimento-alquimico/Estabelecimento-alquimico.js";
import Armazem from "./estabelecimento-alquimico/modal-armazem/Armazem.js";
import Caldeirao from "./estabelecimento-alquimico/menus/caldeirão/Caldeirao.js";
import Grimorio from "./estabelecimento-alquimico/modal-grimório/Grimorio.js";
import InitFases from "./fases/InitFases.js";

//TELA DO GAME
var game = document.getElementById("game");
var estabelecimentoAlquimico = new EstabelecimentoAlquimico(game);
estabelecimentoAlquimico.load();

//CALDEIRÃO
var dragItem = null;
document.body.addEventListener("dragstart", function (event) {
  dragItem = event.target;
});
document.body.addEventListener("dragover", function (event) {
  event.preventDefault();
});
var caldeirao = new Caldeirao([]);
var dropCaldeirao = document.getElementById("caldeirao");
dropCaldeirao.addEventListener("drop", () => {
  caldeirao.crafting(dragItem);
});

//ARMAZEM

//mostra o modal armazem
var openArmazem = document.getElementById("btn-openArmazem");
openArmazem.addEventListener("click", () => {
  Armazem.showOrHide("show");
});
//esconde o modal armazem quando clicar no botão X
var closeArmazem = document.getElementById("btn-closeArmazem");
closeArmazem.addEventListener("click", () => {
  Armazem.showOrHide("hide");
});
closeArmazem.parentElement.addEventListener("dragleave", (event) => {
  if (event.clientX < 623) {
    Armazem.showOrHide("hide");
  }
});
Armazem.add('<img id="revelador-simples" src="images/revelador-simples.png" title="Revelador Simples" />');
Armazem.add('<img id="alecrim" src="images/alecrim.png" title="Alecrim" />');

//GRIMORIO

//mostra o modal e muda imagem do grimorio para aberto
var openGrimorio = document.getElementById("img-openGrimorio");
openGrimorio.addEventListener("click", () => {
  Grimorio.showOrHide("show");
});
//esconde o modal e muda imagem do grimorio para fechado
var closeGrimorio = document.getElementById("btn-closeGrimorio");
closeGrimorio.addEventListener("click", () => {
  Grimorio.showOrHide("hide");
});


//INICIAR FASES
var placaLoja = document.querySelector("#status img");
var ativarFase = true;

placaLoja.addEventListener("click", () => {

  placaLoja.setAttribute("src", "images/placa-aberto.png");
  InitFases.selecionarDia(1);

});


//desativa arrastar da imagem do caldeirão
dropCaldeirao.addEventListener("dragstart", (e) => {
  e.preventDefault();
});
//desativa arrastar da imagem do grimorio
openGrimorio.addEventListener("dragstart", (e) => {
  e.preventDefault();
});
placaLoja.addEventListener("dragstart", (e) => {
  e.preventDefault();
}); //DESATIVAR ARRASTAR IMAGEM PLACA DA LOJA
