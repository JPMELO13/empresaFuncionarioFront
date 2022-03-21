import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { LandingComponent } from './componente/landing/landing.component';
import { NavFuncComponent } from './componente/nav-func/nav-func.component';
import { ListaFuncComponent } from './componente/lista-func/lista-func.component';
import { ListaCargosComponent } from './componente/lista-cargos/lista-cargos.component';
import { CadastroCargoComponent } from './componente/cadastro-cargo/cadastro-cargo.component';
import { EditaFuncComponent } from './componente/edita-func/edita-func.component';
import { CadastroFuncComponent } from './componente/cadastro-func/cadastro-func.component';
import {NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDependenteComponent } from './componente/lista-dependente/lista-dependente.component';
import { CadastroDependenteComponent } from './componente/cadastro-dependente/cadastro-dependente.component';
import { EditaDependenteComponent } from './componente/edita-dependente/edita-dependente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    NavFuncComponent,
    ListaFuncComponent,
    ListaCargosComponent,
    CadastroCargoComponent,
    EditaFuncComponent,
    CadastroFuncComponent,
    ListaDependenteComponent,
    CadastroDependenteComponent,
    EditaDependenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
