import { UsuarioConvocatoria } from "./UsuarioConvocatoria";
import { PerfilesCursos } from "./PerfilesCursos";

export class Convocatoria{
    ConvocatoriaID:string;
    FechaInicio:Date;
    Fechatermino?:Date;
    _UsuarioConvocatoria?:UsuarioConvocatoria[];
    _PerfilesCursos:PerfilesCursos;
    constructor( ConvocatoriaID:string,
        FechaInicio:Date,
        _PerfilesCursos:PerfilesCursos,
        _UsuarioConvocatoria?:UsuarioConvocatoria[],
         Fechatermino?:Date
         ){
            this.ConvocatoriaID = ConvocatoriaID;
            this.FechaInicio = FechaInicio;
            this._UsuarioConvocatoria = _UsuarioConvocatoria;
            this.Fechatermino = Fechatermino;
            this._PerfilesCursos = _PerfilesCursos;
    }
}