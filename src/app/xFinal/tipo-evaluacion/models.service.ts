import { Injectable } from '@angular/core';
import {EvalFactoria, UsuarioEval, Preguntas,Factoria,Evaluacion,Recursos} from './model';

@Injectable()
export class ModelsService {
  Evaluacion:EvalFactoria = poblarEvalFactoria;
  constructor() { 

  }

}


export module Factoria1Preguntas{
  export const pregunta1: Preguntas = new Preguntas("1","Primera Eval",1,"Pregunta1","Alt1","Alt2","Alt3","Alt4","a");
  export const pregunta2: Preguntas = new Preguntas("2","Primera Eval",2,"Pregunta2","Alt1","Alt2","Alt3","Alt4","b");
  export const pregunta3: Preguntas = new Preguntas("3","Primera Eval",3,"Pregunta3","Alt1","Alt2","Alt3","Alt4","c");
  export const pregunta4: Preguntas = new Preguntas("4","Primera Eval",4,"Pregunta4","Alt1","Alt2","Alt3","Alt4","d");
  export const pregunta5: Preguntas = new Preguntas("5","Primera Eval",5,"Pregunta5","Alt1","Alt2","Alt3","Alt4","a");
  export const preguntas:Preguntas[] = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5];
}
export const poblarRecursos:Recursos[] = [{RecursosID:"1",Ruta:"assets/factoria1/IcoPreguntas.png",_TipoRecurso:1}];
export const poblarFactoria:Factoria = new Factoria("Factoria1","Factoria1","Descripcion",poblarRecursos);
export const poblarEvaluacion:Evaluacion = new Evaluacion("1","Eval1","Reseña",new Date("15/10/2018"),"0170812506",Factoria1Preguntas.preguntas);
export const poblarEvalFactoria:EvalFactoria = new EvalFactoria("EvalFactoria1",poblarEvaluacion,poblarFactoria,5,false,new Date(),true,"0170812506");
