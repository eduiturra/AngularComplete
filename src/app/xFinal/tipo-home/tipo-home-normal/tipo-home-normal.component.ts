import { Component, OnInit } from '@angular/core';
import {PoblarMapeoObjetos,MapeoObjetos} from '../models'
import {NuevoCurso} from '../../TestPoblar/Curso'

@Component({
  selector: 'app-tipo-home-normal',
  templateUrl: './tipo-home-normal.component.html',
  styleUrls: ['./tipo-home-normal.component.css']
})
export class TipoHomeNormalComponent implements OnInit {
  mapeoObjeto: MapeoObjetos[];
  constructor() { 
  }

  ngOnInit() {
    var objeto = NuevoCurso._PerfilesCurso[0]._ObjetosPerfiles[0];
    console.log(NuevoCurso._PerfilesCurso[0].MapearObjetosHijos(objeto));
    this.mapeoObjeto = PoblarMapeoObjetos;
  }

}
