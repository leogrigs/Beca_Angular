import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.sass']
})
export class VmessageComponent implements OnInit {

  @Input() texto: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
