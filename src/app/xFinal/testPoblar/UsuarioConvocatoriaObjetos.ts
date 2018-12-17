import { Estados } from './../modelos/Estados';
import { UsuarioConvocatoriaObjetos } from "../modelos/UsuarioConvocatoriaObjetos";
import { ObjetosPerfilesPoblar } from "./ObjetosPerfiles";

export const UsuarioConvocatoriaObjetosPoblar:UsuarioConvocatoriaObjetos = new UsuarioConvocatoriaObjetos(
    "dfwefwefwe",
    new Date(),
    Estados.NoIniciado,
    0,
    ObjetosPerfilesPoblar 
);