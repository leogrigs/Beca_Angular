import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    FormsComponent,
    TodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsComponent,
    TodoComponent
  ]
})
export class PageModule { }
