import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-home',
  templateUrl: './tipo-home.component.html',
  styleUrls: ['./tipo-home.component.css']
})
export class TipoHomeComponent implements OnInit {
  validarTipo:string = "normal";
  constructor() { }

  ngOnInit() {
  }

}
