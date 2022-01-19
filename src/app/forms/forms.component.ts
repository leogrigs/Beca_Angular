import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void {
    console.log('caiu no todo');
    let todo = document.getElementById('todo');
    if (todo != null) {
      todo.style.visibility = "visible";
    }
  }

}
