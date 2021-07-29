import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-descricao',
  templateUrl: './filme-descricao.component.html',
  styleUrls: ['./filme-descricao.component.css']
})
export class FilmeDescricaoComponent implements OnInit {

  filme?: Filme

  constructor(private route: ActivatedRoute, private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.getFilme()
  }
  

  getFilme(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.filmeService.getFilme(id).subscribe(filme => this.filme = filme)
  }


}
