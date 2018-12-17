import { Estados } from './Estados';
import { Usuario } from "./Usuario";
import { Convocatoria } from "./Convocatoria";
import { UsuarioConvocatoriaObjetos } from "./UsuarioConvocatoriaObjetos";

export class UsuarioConvocatoria{
    UsuarioConvocatoriaID:string;
    Estados:Estados;
    FechaInicio?:Date;
    FechaTermino?:Date;
    Aprobado?:Boolean;
    _Usuario:Usuario;
    _Convocatoria:Convocatoria;
    _UsuarioConvocatoriaObjetos?:UsuarioConvocatoriaObjetos[];

    constructor(UsuarioConvocatoriaID:string,
        _Usuario:Usuario,
        _Convocatoria:Convocatoria,
        _Estados:Estados,
        _UsuarioConvocatoriaObjetos?:UsuarioConvocatoriaObjetos[] 
        ){
            this.UsuarioConvocatoriaID = UsuarioConvocatoriaID;
            this._UsuarioConvocatoriaObjetos = _UsuarioConvocatoriaObjetos;
            this._Usuario = _Usuario;
            this._Convocatoria = _Convocatoria;
            this.Estados = _Estados;
    }
}