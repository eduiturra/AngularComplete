import { TipoRecursos } from "./TipoRecursos";

export class Recursos{
    RecursosID:string;
    Material:string;
    _TipoRecursos:TipoRecursos;  
    constructor(RecursosID:string,
        Material:string,
        _TipoRecursos:TipoRecursos){
            this.RecursosID = RecursosID;
            this.Material = Material;
            this._TipoRecursos = _TipoRecursos;
    } 
}