import { Injectable } from '@angular/core';
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
}
