import { Component } from '@angular/core';

@Component({
  selector: 'expansion-panel-example-1',
  templateUrl: './expansion-panel-example-1.component.html',
  styleUrls: ['./expansion-panel-example-1.component.scss']
})
export class ExpansionPanelExample1Component {
  destinations: Destination[] = [{
    name: 'New York',
    code: 'nyc'
  }, {
    name: 'London',
    code: 'lon'
  }];

  booking: Booking = {
    from: this.destinations[0],
    to: this.destinations[1],
    depart: new Date(),
    arrive: new Date()
  };

  constructor() {
    this.booking.arrive.setDate(this.booking.depart.getDate() + 7);
  }
}

interface Destination {
  name: string;
  code: string;
}

interface Booking {
  from: Destination;
  to: Destination;
  depart: Date;
  arrive: Date;
}
