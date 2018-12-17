import { Estados } from './Estados';
import { ObjetosPerfiles } from "./ObjetosPerfiles";

export class UsuarioConvocatoriaObjetos{
    UsuarioConvocatoriaObjetosID:string;
    FechaInicio:Date;
    FechaTermino?:Date;
    _Estado:Estados;
    intentos:number;
    _ObjetosPerfil:ObjetosPerfiles;
    constructor(UsuarioConvocatoriaObjetosID:string,
        FechaInicio:Date,
        _Estado:Estados,
        intentos:number,
        _ObjetosPerfil:ObjetosPerfiles){
            this.UsuarioConvocatoriaObjetosID = UsuarioConvocatoriaObjetosID;
            this.FechaInicio = FechaInicio;
            this._Estado = _Estado;
            this.intentos = intentos;
            this._ObjetosPerfil = _ObjetosPerfil;
    }
}