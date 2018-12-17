import { Component, OnInit } from '@angular/core';
import {Evaluacion} from '../models/evaluacion'
import {EvaluacionService} from "../evaluacion.service";
import {Observable} from  'rxjs/Rx';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {
  xEvaluacionService:Evaluacion[];
  constructor(private EvaluacionService:EvaluacionService) { }

  ngOnInit() {
   this.EvaluacionService.getEval().subscribe(result => {
       this.xEvaluacionService= result;
    });
  }

}
