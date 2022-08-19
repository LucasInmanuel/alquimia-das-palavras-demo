import Npc1 from "./dia-1/npc-1/Npc1.js";

export default class InitFases {
    static selecionarDia(dia) {
        switch (dia) {
            case 1:
                Npc1.load();
                Npc1.start();
                break;
        }
    }
}