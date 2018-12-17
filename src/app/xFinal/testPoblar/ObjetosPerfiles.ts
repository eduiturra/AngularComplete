import { ObjetosPerfiles } from "../modelos/ObjetosPerfiles";
import { FactoriaPoblar } from "./Factoria";

export const ObjetosPerfilesPoblar:ObjetosPerfiles = new ObjetosPerfiles(
    "ObjPerfilID1",
    "Módulo 1",
    1,
    FactoriaPoblar
);
export const ObjetosPerfiles2Poblar:ObjetosPerfiles = new ObjetosPerfiles(
    "ObjPerfilID2",
    "Home",
    1,
    FactoriaPoblar,
    ObjetosPerfilesPoblar
);