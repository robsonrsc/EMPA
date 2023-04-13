import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contatocomponent } from "./contato.component";

const routes: Routes = [{ path: '', component: contatocomponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
