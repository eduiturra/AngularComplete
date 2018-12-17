import { Animaciones } from '../../animaciones';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {EvalFactoria, UsuarioEval, Preguntas} from '../../model';
import {trigger,state,style,animate,transition, keyframes} from '@angular/animations';
@Component({
  selector: 'app-tipo2',
  templateUrl: './tipo2.component.html',
  styleUrls: ['./tipo2.component.css'],
  animations:[
    Animaciones.createTrigger('evalState',"500ms")
  ]
})
export class Tipo2Component implements OnInit {
  @Input() preguntas :Preguntas; 
  @Output() outCambiars = new EventEmitter();
  @Output() outRespuesta = new EventEmitter();
  @Input() respuestas:UsuarioEval;
  @Input() evaluacion:EvalFactoria;
  respuesta:string;
  indiceRespuestas:number = 0;
  state:string = 'inactive';
  constructor() { }

  ngOnInit() {
    
  }
  responder(){
    if(this.respuesta != null){  
        this.outRespuesta.emit(this.respuesta);
        this.activarAnimacion();

    }
  }

  animEnd(event){
    this.outCambiars.emit();
    this.ocultarSeleccionado();
    this.indiceRespuestas++;                             
  }



  Seleccionado(xrepuesta:string){
    this.respuesta = xrepuesta;
  }
  
  Finalizar(){
  }


  private activarAnimacion(){
    this.state = this.state === 'active'? 'inactive' : 'active';
  }
  private ocultarSeleccionado(){
    this.respuesta = null;
  }

}
