import { FoodList } from './../../module/food-list';
import { FoodListService } from './../../service/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
   this.foodListService.foodList().subscribe(
    res => this.foodList = res,
    error => error
   );

   this.foodListService.emitEvent.subscribe(
    res => {
      alert (`Você adicionou => ${res.nome}`)
      this.foodList.push(res);
    }
   );
  }

  public foodListEdit (value: string, id: number ){
    this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res)
      },
    error => error
    )
  }
 public foodListDelete(id: number){
  return this.foodListService.foodListDelete(id).subscribe(
    res => {
      this.foodList = this.foodList.filter(
        item => {
          return id !== item.id
        }
      )
    },
    error => error
  )
 }
}
