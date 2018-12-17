import { Factoria } from "../modelos/Factoria";
import { TipoObjetos } from "../modelos/TipoObjetos";

export const FactoriaPoblar:Factoria = new Factoria(
    "FactoriaID1",
    TipoObjetos.Home,
    "normal",
    "tipo1"
);