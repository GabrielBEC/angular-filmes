import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filmes: Filme[] = []

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.getFilmes()
  }

  getFilmes(): void {
    this.filmes = this.filmeService.getFilmes()
  }
}
