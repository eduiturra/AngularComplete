import { Component, OnInit ,Input,Output,EventEmitter,ViewChild} from '@angular/core';
import {EvalFactoria, UsuarioEval, Preguntas} from '../model';
import {ModelsService} from '../models.service';
import { Tipo1Component } from './tipo1/tipo1.component';
@Component({
  selector: 'app-tipo-normal',
  templateUrl: './tipo-normal.component.html',
  styleUrls: ['./tipo-normal.component.css']
})
export class TipoNormalComponent implements OnInit {
  indice:number = 0;
  validarTipo:string;
  @ViewChild(Tipo1Component)
  private childComponent: Tipo1Component;
  Evaluacion:EvalFactoria;
  RespuestasPreguntas:UsuarioEval = new UsuarioEval();

  constructor(private modelsService:ModelsService) { }

  ngOnInit() {
    this.Evaluacion = this.modelsService.Evaluacion;
    this.validarTipo = "normal";
  }

outRespuesta(seleccionado:string){
    let correcta = this.Evaluacion.ValidarCorrecta(seleccionado,this.indice);
    this.RespuestasPreguntas.GuardarRespuesta(correcta,seleccionado,this.Evaluacion.GetPregunta(this.indice));
}

outCambiar(){  
    let validar = this.Evaluacion.ValidarTermino(this.indice);
    if(validar){
        this.RespuestasPreguntas.FinalizarEvaluacion(this.Evaluacion.GetCantidadPreguntas());
        this.childComponent.Finalizar();
    }else{
        this.indice++;
    }
}

 

}
