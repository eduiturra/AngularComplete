import { Evaluacion } from './../../model';
import { Animaciones } from '../../animaciones';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {EvalFactoria, UsuarioEval, Preguntas} from '../../model';
import {trigger,state,style,animate,transition, keyframes} from '@angular/animations';
@Component({
  selector: 'app-tipo1',
  templateUrl: './tipo1.component.html',
  styleUrls: ['./tipo1.component.css'],
  animations:[
    Animaciones.createTrigger('evalState',"500ms")
  ]
})
export class Tipo1Component implements OnInit {
  @Input() preguntas :Preguntas; 
  @Output() outCambiars = new EventEmitter();
  @Output() outRespuesta = new EventEmitter();
  @Input() respuestas:UsuarioEval;
  @Input() evaluacion:EvalFactoria;
  mostrarFeedback:boolean;
  respuesta:string;
  indiceRespuestas:number = 0;
  state:string = 'inactive';
  constructor() { }

  ngOnInit() {
    
  }

  obtenerRecurso(){
  }
  responder(){
    if(this.respuesta != null){  
        this.outRespuesta.emit(this.respuesta);
        this.mostrarFeedback = true;  
        console.log(this.respuestas.ValidarBuenaIndice[this.indiceRespuestas]);
    }
  }

  siguiente(){
    this.state = this.state === 'active'? 'inactive' : 'active'
    this.outCambiars.emit();
    this.respuesta = null;
    this.mostrarFeedback = false;
    this.indiceRespuestas++;
  }

  Seleccionado(xrepuesta:string){
    this.respuesta = xrepuesta;
  }
  
  Finalizar(){
    console.log(this.respuestas);
  }

}
