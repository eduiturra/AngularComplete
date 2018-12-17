import { PerfilesCursos } from "./PerfilesCursos";

export class Cursos {
    CursoID:string;
    Nombre:string;
    Reseña:string;
    Preview?:string;
    FechaCreacion:Date;
    Activo:Boolean;
    _PerfilesCurso:PerfilesCursos[];
    constructor(CursoID:string,
        Nombre:string,
        Reseña:string,
        FechaCreacion:Date,
        Activo:Boolean,
        _PerfilesCurso:PerfilesCursos[],
        Preview?:string){
            this.CursoID = CursoID;
            this.Nombre = Nombre;
            this.Reseña = Reseña;
            this.FechaCreacion = FechaCreacion;
            this.Activo = Activo;
            this._PerfilesCurso = _PerfilesCurso;
            this.Preview = Preview;
    }
}