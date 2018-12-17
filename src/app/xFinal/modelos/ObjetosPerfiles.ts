import { Factoria } from "./Factoria";

export class ObjetosPerfiles{
    Nombre:string;
    ObjetosPerfilesID:string;
    Indice:number;
    _Factoria?:Factoria;
    _SiguienteObjeto?:ObjetosPerfiles;
    _ObjetoDependencia?:ObjetosPerfiles;
    _ObjetosPerfilesPadre?:ObjetosPerfiles;
    _ObjetosPerfilesHijo?:ObjetosPerfiles[];
    constructor(Nombre:string,
        ObjetosPerfilesID:string,
        Indice:number,
        _Factoria?:Factoria,
        _ObjetosPerfilesPadre?:ObjetosPerfiles,
        _ObjetosPerfilesHijo?:ObjetosPerfiles[],
        _SiguienteObjeto?:ObjetosPerfiles,
        _ObjetoDependencia?:ObjetosPerfiles){
            this.Nombre = Nombre;
            this.ObjetosPerfilesID = ObjetosPerfilesID;
            this.Indice = Indice;
            this._Factoria = _Factoria;
            this._SiguienteObjeto = _SiguienteObjeto;
            this._ObjetoDependencia = _ObjetoDependencia;
            this._ObjetosPerfilesPadre = _ObjetosPerfilesPadre;
    }
}