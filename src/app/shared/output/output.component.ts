import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{

@Output() public enviarDados = new EventEmitter();

public list: Array <{ nome: string, idade: number}> = [
{ nome: "Victor", idade: 22},
{ nome: "Nay", idade: 25},
{ nome: "Jose", idade: 30}
]
ngOnInit(): void {

}

public getDados(event: number){
  this.enviarDados.emit(this.list[event]);

}
}
