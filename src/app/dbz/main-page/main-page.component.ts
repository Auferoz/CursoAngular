import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { AddCharactersComponent } from '../add-characters/add-characters.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    characters: Character[] = [
      {
        name: 'G',
        power: 21000
      },
      {
        name: 'V',
        power: 19000
      }
    ];

    new: Character = {
      name: 'TR',
      power: 700
    };

    addNewCharacter( argumento: Character ) {
        this.characters.push( argumento );
    }

  }
