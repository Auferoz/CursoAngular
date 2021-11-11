import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    
    private _characters: Character[] = [
        {
          name: 'Personaje 1',
          power: 21000
        },
        {
          name: 'Personaje 2',
          power: 19000
        }
      ];

      get characters(): Character[] {
          return [...this._characters];
      }
      
    constructor() {}

    agregarCharacter( character: Character ){
        this._characters.push( character );
    }
}