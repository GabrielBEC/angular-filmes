import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FilmesComponent } from './component/filmes/filmes.component';
import { ContatoComponent } from './component/contato/contato.component';
import { FilmeDescricaoComponent } from './component/filmes/filme-descricao/filme-descricao.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'filme/:id', component: FilmeDescricaoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
