import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly position = { lat: 51.678418, lng: 7.809007 };
}
