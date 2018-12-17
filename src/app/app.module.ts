import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { EvaluacionService} from "./evaluacion.service";
import { CreateEvalComponent } from './create-eval/create-eval.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TipoEvaluacionComponent } from './xFinal/tipo-evaluacion/tipo-evaluacion.component';
import { TipoNormalComponent } from './xFinal/tipo-evaluacion/tipo-normal/tipo-normal.component';
import {ModelsService} from './xFinal/tipo-evaluacion/models.service';
import { Tipo1Component } from './xFinal/tipo-evaluacion/tipo-normal/tipo1/tipo1.component';
import { Tipo2Component } from './xFinal/tipo-evaluacion/tipo-normal/tipo2/tipo2.component';
import { TipoHomeComponent } from './xFinal/tipo-home/tipo-home.component';
import { TipoHomeNormalComponent } from './xFinal/tipo-home/tipo-home-normal/tipo-home-normal.component';
import { HoneNormal1Component } from './xFinal/tipo-home/tipo-home-normal/hone-normal1/hone-normal1.component';
import { TipoVfComponent } from './xFinal/tipo-evaluacion/tipo-vf/tipo-vf.component';
import { TipoDesarrolloComponent } from './xFinal/tipo-evaluacion/tipo-desarrollo/tipo-desarrollo.component';
import { LoginComponent } from './xFinal/admin/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    EvaluacionesComponent,
    CreateEvalComponent,
    TipoEvaluacionComponent,
    TipoNormalComponent,
    Tipo1Component,
    Tipo2Component,
    TipoHomeComponent,
    TipoHomeNormalComponent,
    HoneNormal1Component,
    TipoVfComponent,
    TipoDesarrolloComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EvaluacionService,ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
