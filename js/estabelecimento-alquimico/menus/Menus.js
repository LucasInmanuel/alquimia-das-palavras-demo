export default class Menus {
    static load() {
        //MENUS
        var telaMenus = document.getElementById("menus");
        telaMenus.innerHTML = `
            <div id="btns-modals">
                <button id="btn-openArmazem" class="btn-menus">Armazem</button>
                <button id="btn-openFornecedores" class="btn-menus">Fornecedores</button>
            </div>
            <div id="area-crafting">
                <h1>Área de crafting</h1>
                <img width="300px" id="caldeirao" src="images/sprite-caldeirão/caldeirão.png" />
                <div id="barra-progresso">
                <div></div>
                </div>
            </div>
            <img id="img-openGrimorio" width="180px" src="images/dicio-fechado.png" />
        `;
    }
}