export default class PainelMoedas {
    static load() {
        var painelMoedas = document.getElementById("painel-moedas");
        painelMoedas.innerHTML = `
        
            <div id="qtd-moeda-bronze">
                <img width="80px" src="images/moeda-bronze.png" title="Moeda de bronze" />
                <span>5</span>
            </div>
            <div id="qtd-moeda-prata">
                <img width="80px" src="images/moeda-prata.png" title="Moeda de prata" />
                <span>0</span>
            </div>
            <div id="qtd-moeda-ouro">
                <img width="80px" src="images/moeda-ouro.png" title="Moeda de ouro" />
                <span>0</span>
            </div>

        `;
    }
}