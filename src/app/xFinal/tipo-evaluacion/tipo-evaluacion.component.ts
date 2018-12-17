import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-evaluacion',
  templateUrl: './tipo-evaluacion.component.html',
  styleUrls: ['./tipo-evaluacion.component.css']
})
export class TipoEvaluacionComponent implements OnInit {
  validarTipo:string = "normal";
  constructor() { }

  ngOnInit() {
   
  }


}
