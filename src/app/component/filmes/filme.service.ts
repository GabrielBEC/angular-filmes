import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filme } from './filme';
import { FILMES } from './mock-filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor() { }

  getFilmes(): Filme[] {
    return FILMES
  }

  getFilme(id: number): Observable<Filme> {
    const filme = FILMES.find(f => f.id === id)!
    return of(filme)
  }
}
