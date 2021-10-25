import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <button (click)="contador(+1)"> +1 </button>
        <span> {{numero}} </span>
        <button (click)="contador(-1)"> -1 </button>
`
})

export class ContadorComponent {
    titulo: string = 'Contador';
    numero: number = 10;

    contador(valor: number) {
        this.numero += valor;
    }
}