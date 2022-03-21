import { CadastroFuncComponent } from './componente/cadastro-func/cadastro-func.component';
import { ListaCargosComponent } from './componente/lista-cargos/lista-cargos.component';
import { CadastroCargoComponent } from './componente/cadastro-cargo/cadastro-cargo.component';
import { ListaFuncComponent } from './componente/lista-func/lista-func.component';
import { LandingComponent } from './componente/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaFuncComponent } from './componente/edita-func/edita-func.component';

const routes: Routes = [
  {path:"", component:LandingComponent},
  {path:"listaFunc", component:ListaFuncComponent},
  {path:"cadastroCargo", component:CadastroCargoComponent},
  {path:"cargo/:car_id", component:ListaCargosComponent},
  {path:"editaFunc/:func_id", component:EditaFuncComponent},
  {path:"cadastroFunc/:car_id", component:CadastroFuncComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
