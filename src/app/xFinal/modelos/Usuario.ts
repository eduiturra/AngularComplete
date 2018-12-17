import { UsuarioConvocatoria } from "./UsuarioConvocatoria";
import { Cursos } from "./Cursos";

export class Usuario{
    rut:string;
    nombre:string;
    clave:string;
    email:string;
    sexo:string;
    FechaNacimiento:Date;
    nacionalidad:string;
    _UsuarioConvocatoria?:UsuarioConvocatoria[];
    constructor(rut:string,
        nombre:string,
        clave:string,
        email:string,
        sexo:string,
        fechaNacimiento:Date,
        nacionalidad:string,
        _UsuarioConvocatoria?:UsuarioConvocatoria[]){
            this.rut = rut;
            this.clave = clave;
            this.email = email;
            this.sexo = sexo;
            this.FechaNacimiento = fechaNacimiento;
            this.nacionalidad = nacionalidad;
            this._UsuarioConvocatoria = _UsuarioConvocatoria;
    }


}