import { NuevoCurso } from './Curso';
import { PerfilesCursos } from "../modelos/PerfilesCursos";
import { ObjetosPerfilesPoblar, ObjetosPerfiles2Poblar } from "./ObjetosPerfiles";
import { ConvocatoriaPoblar } from "./Convocatoria";


export const PerfilesCursosPoblar:PerfilesCursos = new PerfilesCursos(
    "IDPerfilCurso1",
    "PerfilNormal",
    [ObjetosPerfilesPoblar,ObjetosPerfiles2Poblar],
    NuevoCurso,
    [ConvocatoriaPoblar]
);