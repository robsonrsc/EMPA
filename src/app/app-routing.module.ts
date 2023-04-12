import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { exhaustMap } from 'rxjs';
import { EMPAComponent } from './empa/empa.component';
import { SobreComponent } from './sobre/sobre.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: "", component:EMPAComponent },
  {path:"sobre", component:SobreComponent},
  {path:"instrumentos", component:InstrumentosComponent},
  {path:"professores", component:ProfessoresComponent},
  {path:"contato", component:ContatoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
