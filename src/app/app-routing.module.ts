import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearCitaComponent } from './pagina/crear-cita/crear-cita.component';
import { MedicoConsultaComponent } from './pagina/medico-consulta/medico-consulta.component';

const routes: Routes = [
{ path: "", component: LoginComponent },
  {path: "crear-cita",component: CrearCitaComponent},
  { path: "registro", component: RegistroComponent },
  { path: "medico-consulta", component: MedicoConsultaComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
