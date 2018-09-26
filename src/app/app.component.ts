import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  direction: string;
  constructor() {
    const sessionDirection = sessionStorage.getItem('portal-direction');
    this.direction = sessionDirection || 'ltr';
  }

  ngOnInit(): void {
  }

}
