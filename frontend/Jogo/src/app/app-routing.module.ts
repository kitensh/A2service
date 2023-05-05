import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
    {path:"cadastrar", component:CadastrarComponent},
    {path:"editar", component:EditarComponent},
    {path:"listar", component:ListarComponent},
    {path:"", component:ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
