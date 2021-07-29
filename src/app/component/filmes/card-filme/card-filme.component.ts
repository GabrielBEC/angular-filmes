import { Component, Input, OnInit } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent implements OnInit {

  @Input() filme?: Filme
  
  constructor() { }

  ngOnInit(): void {
  }

}
