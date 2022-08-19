export default class Cenario {
    static load() {
        //CENÁRIO
        var cenas = document.getElementById("cenario");
        cenas.innerHTML = `
            <div id="area-fases"></div>
            <div id="balcao"></div><!--balcao-->
        `;
    }
}