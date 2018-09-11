import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
  }

}
