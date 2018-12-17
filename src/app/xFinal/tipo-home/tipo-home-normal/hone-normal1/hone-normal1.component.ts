import { Component, OnInit, Input } from '@angular/core';
import {MapeoObjetos} from '../../models'

@Component({
  selector: 'app-hone-normal1',
  templateUrl: './hone-normal1.component.html',
  styleUrls: ['./hone-normal1.component.css']
})
export class HoneNormal1Component implements OnInit {
  @Input() mapeoObjeto :MapeoObjetos[]; 

  constructor() { }

  ngOnInit() {
  }

  redireccionar(mapeo :MapeoObjetos){
    console.log(mapeo);
  }

}
