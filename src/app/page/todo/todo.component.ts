import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  @Input() msg: string = '';

  vector: string = './assets/img/Vector.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
