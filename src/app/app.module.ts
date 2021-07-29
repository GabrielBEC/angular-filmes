import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmesComponent } from './component/filmes/filmes.component';
import { ContatoComponent } from './component/contato/contato.component';
import { CardFilmeComponent } from './component/filmes/card-filme/card-filme.component';
import { FilmeDescricaoComponent } from './component/filmes/filme-descricao/filme-descricao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilmesComponent,
    ContatoComponent,
    CardFilmeComponent,
    FilmeDescricaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
