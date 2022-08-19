export default class Status {
    static load() {
        var status = document.getElementById("status");
        status.innerHTML = `
            <h3>Status</h3>
            <img src="images/placa-fechado.png" alt="Placa de fechado" />
            <div id="btns-config">
                <button id="btn-audio"><img src="./images/sound-icon.png" /></button>
            </div>
        `;

    }
}