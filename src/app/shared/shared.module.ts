import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NewHeaderComponent } from './new-header/new-header.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';



@NgModule({
  declarations: [
    NewHeaderComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  exports: [NewHeaderComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
