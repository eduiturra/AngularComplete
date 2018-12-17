import { TipoObjetos } from "./TipoObjetos";
import { EvalFactoria, Recursos } from "../tipo-evaluacion/model";

export class Factoria{
    FactoriaID:string;
    TipoObjeto:TipoObjetos;
    Tipo:string;
    SubTipoFactoria:string;
    _EvalFactoria?:EvalFactoria;
    _RecursosContenido?:Recursos[];
    _RecursosEsteticos?:Recursos[];
    constructor( FactoriaID:string,
        TipoObjeto:TipoObjetos,
        Tipo:string,
        SubTipoFactoria:string,
        _EvalFactoria?:EvalFactoria,
        _RecursosContenido?:Recursos[],
        _RecursosEsteticos?:Recursos[]){
            this.FactoriaID = FactoriaID;
            this.TipoObjeto = TipoObjeto;
            this.Tipo = Tipo;
            this.SubTipoFactoria = SubTipoFactoria;
            this._EvalFactoria = _EvalFactoria;
            this._RecursosContenido = _RecursosContenido;
            this._RecursosEsteticos = _RecursosEsteticos;
    }
}