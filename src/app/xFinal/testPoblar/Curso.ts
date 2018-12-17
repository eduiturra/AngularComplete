import { Cursos } from "../modelos/Cursos";
import { PerfilesCursosPoblar } from "./PerfilesCurso";

export const NuevoCurso:Cursos = new Cursos(
    "IDCUrso1",
     "Rpe2",
     "este es un curso que se trata de Reseñas",
      new Date(),
     true,
      [PerfilesCursosPoblar]
)