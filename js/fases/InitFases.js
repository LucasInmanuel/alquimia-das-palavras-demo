import Dia1_Npc1 from "./dia-1/npc-1/Npc1.js";

export default class InitFases {
  static selecionarDia(dia) {
    switch (dia) {
      case 1:
        Dia1_Npc1.load("npc-1.png");
        Dia1_Npc1.start("comprar", "prata", 2);
        break;
      case 2:
        break;
    }
  }
}
