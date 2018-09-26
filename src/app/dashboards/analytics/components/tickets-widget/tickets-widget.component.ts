import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-tickets-widget',
  templateUrl: './tickets-widget.component.html',
  styleUrls: ['./tickets-widget.component.scss']
})
export class TicketsWidgetComponent implements OnInit {
  agents: Array<{name: string, content: string, avatar: string}> =  [{
      name: 'Austin Powers',
      content: 'Lorem ipsum dolor sit amet,consectetuer edipiscing.',
      avatar: 'assets/images/oxygenna.png'
    },
    {
      name: 'Giannis the Greek Freak',
      content: 'Lorem ipsum dolor sit amet,consectetuer edipiscing.',
      avatar: 'assets/images/oxygenna.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
