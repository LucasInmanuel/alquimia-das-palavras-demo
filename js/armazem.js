var itensArr = [];
var impedir = true;
export default function initArmazem(pItens, p2Itens) {
  var modalArmazem = document.getElementById("modal-armazem");
  modalArmazem.style.display = "block";

  if (impedir && p2Itens != false) {
    itensArr.push(pItens);
    itensArr.push(p2Itens);
    impedir = false;
  } else {
    itensArr.push(pItens);
  }

  var armazemItens = document.getElementById("armazem-itens");
  armazemItens.innerHTML = itensArr.join(" ");

  var fecharArmazem = document.getElementById("fechar-armazem");
  fecharArmazem.addEventListener("click", () => {
    modalArmazem.style.display = "none";
  });

  modalArmazem.addEventListener("dragleave", (event) => {
    if (event.clientX < 623) {
      modalArmazem.style.display = "none";
    }
  });

  var indexDelItem = 0;
  var reveladorSimples = document.getElementById("revelador-simples");
  var palavrEsqci = document.getElementById("palavrEsqci");
  if (reveladorSimples != null && palavrEsqci != null) {
    reveladorSimples.addEventListener("click", () => {
      document
        .getElementById("palavrEsqci")
        .setAttribute("placeholder", "Qual é a palavra? xxxpxxx");
      reveladorSimples.remove();
      indexDelItem = itensArr.indexOf(p2Itens);
      itensArr.splice(indexDelItem, 1);
    });
  }
}
