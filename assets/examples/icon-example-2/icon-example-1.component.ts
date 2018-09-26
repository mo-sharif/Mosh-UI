import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-example-1',
  templateUrl: './icon-example-1.component.html',
  styleUrls: ['./icon-example-1.component.scss']
})
export class IconExample1Component implements OnInit {
  color: String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
