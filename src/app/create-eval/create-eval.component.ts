import { Component, OnInit } from '@angular/core';
import {EvaluacionService} from "../evaluacion.service"
import {Evaluacion} from '../models/evaluacion'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-create-eval',
  templateUrl: './create-eval.component.html',
  styleUrls: ['./create-eval.component.css']
})
export class CreateEvalComponent implements OnInit {
  evaluaciones:Evaluacion = {
    nombre:"eval",
    fechaCreacion:new Date(),
    tipo : "nommal",
    abierto:true
  }
  constructor() { }

  ngOnInit() {
  }

  presionar(x:any){
  }

  abrir(x:NgForm){
    if(x.valid){
      this.evaluaciones = x.value;
      console.log(this.evaluaciones);
    }
    
  }

}
