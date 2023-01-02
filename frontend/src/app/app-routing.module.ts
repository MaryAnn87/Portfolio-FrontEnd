import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './education/edit-educacion.component';
import { NewEducacionComponent } from './education/new-educacion.component';
import { EditExperienciaComponent } from './experience/edit-experiencia.component';
import { NewExperienciaComponent } from './experience/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexperiencia',component: NewExperienciaComponent},
  {path:'editarexperiencia/:id',component: EditExperienciaComponent},
  {path:'nuevaeducacion', component:NewEducacionComponent},
  {path:'editareducacion/:id',component:EditEducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
