import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public heroes:any = {};
  public termino:String;

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private _heroesServices: HeroesService) {

          this.activatedRoute.params.subscribe( params => {
            this.termino = this.capitalizeOnlyFirst(params["termino"]);
            this.heroes = this._heroesServices.buscarHeroes( params["termino"]);
          });
  }

  ngOnInit() {
    console.log(this.heroes);
  }

  capitalizeOnlyFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}
