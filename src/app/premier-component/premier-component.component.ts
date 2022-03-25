import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-premier-component',
  templateUrl: './premier-component.component.html',
  // template:`<div> <h2>Bonjour {{prenom}}</h2> </div>`,
  styleUrls: ['./premier-component.component.scss']
  // styles: [`h2{ color: red; }`]
})
export class PremierComponentComponent implements OnInit {
  prenom : string;
  public displayButton = true;
  public users : Array<{nom:string}> = [{nom:'Gauthier'},{nom : 'Toto'}, {nom : 'Plume'}];
  public color ="orangered";
  public today = Date();
  public hour = Date.now();
  public username = "toto";


  constructor() {
    this.prenom = "Stéphane"
   }

  ngOnInit(): void {
  }


}




