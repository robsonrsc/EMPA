import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { contatocomponent } from "./contato.component";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule, 
    ReactiveFormsModule,
  ]
})
export class ContatoModule { }