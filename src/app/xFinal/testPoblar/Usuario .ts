import { Usuario } from "../modelos/Usuario";
import { UsuarioConvocatoriaPoblar } from "./UsuarioConvocatoria";

export const UsuarioPoblar:Usuario = new Usuario(
    "0170812506",
    "Eduardo",
    "12345",
    "Chileno",
    "M",
    new Date("1988/07/23"),
    "edu.iturra.analista@gmail.com",
    [UsuarioConvocatoriaPoblar]
);