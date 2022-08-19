export default class Grimorio {

    static load() {
        //CRIANDO MODAL GRIMÓRIO
        var modalGrimorio = document.getElementById("modal-grimorio");
        modalGrimorio.innerHTML = ` 
            <h1>Palavras e suas receitas</h1>  
            <div>
                <div id="dicio-pagLeft">
                    <p style="font-size:22px"><b>Correr:</b> feito com 1 essência de velocidade.</p>
                    <p style="font-size:22px"><b>Cortar:</b> feito com 1 objeto afiado.</p>
                    <p style="font-size:22px"><b>Comprar:</b> feito com 2 alecrins.</p>
                </div><!--dicio-pagLeft-->
                <div id="dicio-pagRight">
                    
                </div><!--dicio-pagRight-->
            </div>
            <button id="btn-closeGrimorio" style="position:absolute;top:0;right:0;">X</button>
        `;
    }

    static showOrHide(showOrHide) {
        var modalGrimorio = document.getElementById("modal-grimorio");
        var openGrimorio = document.getElementById("img-openGrimorio");
        if (showOrHide === "show") {
            //ALTERAR O LIVRO PARA ABERTO
            modalGrimorio.style.display = "block";
            openGrimorio.setAttribute("src", "images/dicio-aberto.png");
            openGrimorio.setAttribute("width", "350px");

        } else if (showOrHide === "hide") {
            //ALTERAR O LIVRO PARA FECHADO
            modalGrimorio.style.display = "none";
            openGrimorio.setAttribute("src", "images/dicio-fechado.png");
            openGrimorio.setAttribute("width", "180px");
        }

    }

}

