import { UsuarioConvocatoria } from "../modelos/UsuarioConvocatoria";
import { UsuarioPoblar } from "./Usuario ";
import { ConvocatoriaPoblar } from "./Convocatoria";
import { UsuarioConvocatoriaObjetosPoblar } from "./UsuarioConvocatoriaObjetos";
import { Estados } from "../modelos/Estados";

export const UsuarioConvocatoriaPoblar:UsuarioConvocatoria = new UsuarioConvocatoria(
    "UsuatioID",
    UsuarioPoblar,
    ConvocatoriaPoblar,
    Estados.NoIniciado,
    [UsuarioConvocatoriaObjetosPoblar]
);