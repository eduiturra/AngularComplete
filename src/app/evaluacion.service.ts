import { Injectable } from '@angular/core';
import {Evaluacion} from './models/evaluacion';
import 'rxjs/Rx';
import {Observable} from  'rxjs/Rx';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EvaluacionService {
   readonly URLJson:string = "../../assets/evaluaciones.json";
   Evaluaciones:Evaluacion[] = [{
    nombre:"eval",
    fechaCreacion:new Date(),
    tipo : "nommal",
    abierto:true
  },
  {
    nombre:"eval2",
    fechaCreacion:new Date(),
    tipo : "nommal2",
    abierto:true
  }]

  constructor(private http:HttpClient){
  }

  getEval():Observable<Evaluacion[]>{
      return this.http.get<Evaluacion[]>(this.URLJson);
  }

}
