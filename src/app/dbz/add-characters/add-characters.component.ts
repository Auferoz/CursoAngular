import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})

export class AddCharactersComponent {

  @Input() new: Character = {
    name: '',
    power: 0
  }

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(){
    if ( this.new.name.trim().length == 0 ) { return; }

    console.log( this.new );
    this.onNewCharacter.emit( this.new );

    this.new = {
      name: '',
      power: 0
    };
    
  }
}
