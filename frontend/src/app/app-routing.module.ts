import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './about/edit-about.component';
import { EditEducacionComponent } from './education/edit-educacion.component';
import { NewEducacionComponent } from './education/new-educacion.component';
import { EditExperienciaComponent } from './experience/edit-experiencia.component';
import { NewExperienciaComponent } from './experience/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditProyectoComponent } from './projects/edit-proyecto.component';
import { NewProyectoComponent } from './projects/new-proyecto.component';
import { RegisterComponent } from './register/register.component';
import { EditSkillsComponent } from './skills/edit-skills.component';
import { NewSkillsComponent } from './skills/new-skills.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexperiencia',component: NewExperienciaComponent},
  {path:'editarexperiencia/:id',component: EditExperienciaComponent},
  {path:'nuevaeducacion', component:NewEducacionComponent},
  {path:'editareducacion/:id',component:EditEducacionComponent},
  {path:'nuevaskill', component:NewSkillsComponent},
  {path: 'editarskill/:id', component: EditSkillsComponent},
  {path:'nuevoproyecto', component:NewProyectoComponent},
  {path: 'editarproyecto/:id', component: EditProyectoComponent},
  {path: 'editaracercade/:id', component: EditAboutComponent},
  {path: 'registro', component: RegisterComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
