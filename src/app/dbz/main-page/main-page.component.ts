import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { AddCharactersComponent } from '../add-characters/add-characters.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    new: Character = {
      name: 'TR',
      power: 700
    }

    constructor( private dbzService: DbzService ) {
      console.log('eeee');
    }

  }
