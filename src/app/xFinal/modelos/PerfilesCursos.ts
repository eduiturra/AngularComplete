import { ObjetosPerfiles } from "./ObjetosPerfiles";
import { Cursos } from "./Cursos";
import { Convocatoria } from "./Convocatoria";

export class PerfilesCursos{
    PerfilCursoID:string;
    Nombre:string;
    _ObjetosPerfiles:ObjetosPerfiles[];
    _Curso:Cursos;
    _Convocatoria?:Convocatoria[];
    constructor( PerfilCursoID:string,
        Nombre:string,
        _ObjetosPerfiles:ObjetosPerfiles[],
        _Curso:Cursos,
        _Convocatoria?:Convocatoria[]){
            this.PerfilCursoID = PerfilCursoID;
            this.Nombre = Nombre;
            this._ObjetosPerfiles = _ObjetosPerfiles;
            this._Convocatoria = _Convocatoria;
            this._Curso = _Curso;
    }

    buscarCursos(rut:string){
        return this._Convocatoria.filter(a=>a._UsuarioConvocatoria.filter(x=>x._Usuario.rut == rut));
    }

    MapearObjetosHijos(xObjetosPerfiles?:ObjetosPerfiles):ObjetosPerfiles[]{
        if(xObjetosPerfiles){
            return  this._ObjetosPerfiles.filter((a)=>a._ObjetosPerfilesPadre == xObjetosPerfiles);
        }else{
            return this._ObjetosPerfiles.filter(a=>a._ObjetosPerfilesPadre == null);
        }
    }
}