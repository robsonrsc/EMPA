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
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EMPAComponent,
    SobreComponent,
    InstrumentosComponent,
    ProfessoresComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
