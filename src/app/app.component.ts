import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-input [contador]="addValue"></app-input> <button (click)="add()"> Add </button> <hr>

   <ng-template  [ngIf]="getDados" >
    <h1>{{getDados.nome}}</h1>
    <h1>{{getDados.idade}}</h1>
   </ng-template>

   <app-output (enviarDados)="setDados($event)"></app-output>
   <hr>
   <br>


  <app-food-add></app-food-add>
  <app-food-list></app-food-list>



   <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit{

public addValue: number = 0;

public getDados: { nome: string, idade: number} | undefined;

  constructor () { }

ngOnInit(): void {}

public add() {
  this.addValue += 1;
}

public setDados(event: { nome: string, idade: number}) {
  this.getDados = event;
}
}



