import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EMPAComponent } from './empa/empa.component';
import { SobreComponent } from './sobre/sobre.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { contatocomponent } from './contato/contato.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EMPAComponent,
    SobreComponent,
    InstrumentosComponent,
    ProfessoresComponent,
    contatocomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
