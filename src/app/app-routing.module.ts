import { LoginComponent } from './xFinal/admin/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EvaluacionesComponent} from './evaluaciones/evaluaciones.component';
import {CreateEvalComponent} from './create-eval/create-eval.component';
import {MaterialDemoComponent} from './material/material-demo/material-demo.component';
import { TipoEvaluacionComponent } from './xFinal/tipo-evaluacion/tipo-evaluacion.component';
import { TipoHomeComponent } from './xFinal/tipo-home/tipo-home.component';
const routes: Routes = [{
  path:"" ,
  redirectTo:"form",
  pathMatch:"full"
},{
  path:"evaluacion",
  component:EvaluacionesComponent
},{
  path:"form",
  component:CreateEvalComponent 
},{
  path:"material",
  component:MaterialDemoComponent
},{
  path:"eval",
  component:TipoEvaluacionComponent
},{
  path:"home",
  component:TipoHomeComponent
},{
  path:"admin",
  component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
