import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSelectChange, MatDialog, MatSnackBar } from '@angular/material';

import { CalendarComponent } from 'ap-angular2-fullcalendar';

import { CalendarDialogComponent } from './../calendar-dialog/calendar-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class AppCalendarComponent implements OnInit {
  @ViewChild('calendar') calendar: CalendarComponent;
  calendarOptions: any;
  viewFormats: any;
  selectedView: string;
  currentDay: Date;
  currentMonthNum: number;
  events: any[];
  viewOptions: { iconName: string, viewName: string, name: string }[];

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.viewOptions = [{
      iconName: 'view_module',
      viewName: 'month',
      name: 'Month View'
    }, {
      iconName: 'view_week',
      viewName: 'agendaWeek',
      name: 'Week View'
    }, {
      iconName: 'view_day',
      viewName: 'agendaDay',
      name: 'Day View'
    }];
    this.selectedView = this.viewOptions[0].viewName;

    this.viewFormats = {
      'month': 'MMMM yyyy',
      'agendaWeek': 'w - yyyy',
      'agendaDay': 'EEEE d MMMM yyyy'
    };

    this.events = this.createRandomEvents(100, moment().startOf('year'), moment().endOf('year'));

    this.calendarOptions = {
      header: false,
      height: 'parent',
      selectable: true,
      viewRender: (view: any): void => {
          this.currentDay = view.calendar.getDate().format();
          this.currentMonthNum = view.calendar.getDate().month();
      },
      eventClick: (calEvent): void => {
        this.openDialog(calEvent);
      },
      fixedWeekCount : false,
      editable: true,
      eventLimit: true,
      events: this.events
    };
  }

  calendarNavigate(direction: string): void {
    this.calendar.fullCalendar(direction);
  }

  changeView(view: string): void {
    this.selectedView = view;
    this.calendar.fullCalendar('changeView', view);
  }

  openDialog(event: any = null): void {
    const editMode = event !== null;
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      width: '500px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (editMode) {
        this.events = this.events.filter(e => e.id !== event.id);
      }
      result.id = this.events.length;
      this.events.push(result);
      this.calendar.fullCalendar('removeEventSources');
      this.calendar.fullCalendar('addEventSource', this.events);

      const snackBarText = editMode ? 'Event Edited' : 'Event Added';
      this.snackBar.open(snackBarText, '', {
        duration: 3000
      });
    });
  }

  ngOnInit(): void {

  }

   randomDate(start: any, end: any): any {
    const startNumber = start.toDate().getTime();
    const endNumber = end.toDate().getTime();
    const randomTime = Math.random() * (endNumber - startNumber) + startNumber;
    return moment(randomTime);
  }

   createRandomEvents(number: number, startDate: any, endDate: any): any[] {
    const events = [];
    const eventNames = [
      'Pick up the kids', 'Remember the milk', 'Meeting with Morris', 'Car service',  'Go Surfing', 'Party at Christos house',
      'Beer Oclock', 'Festival tickets', 'Laundry!', 'Haircut appointment', 'Walk the dog', 'Dentist :(', 'Board meeting', 'Go fishing'];
    const locationNames = ['London', 'New York', 'Paris', 'Athens'];
    for (let x = 0; x < number; x++) {
      const randomMonthDate = this.randomDate(startDate, endDate);
      const anHourLater = moment(randomMonthDate).add(1, 'h');
      const randomEvent = Math.floor(Math.random() * (eventNames.length - 0));
      const randomLocation = Math.floor(Math.random() * (locationNames.length - 0));

      events.push({
          id: x,
          title: eventNames[randomEvent],
          start: randomMonthDate.toDate(),
          end: anHourLater.toDate(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, fugiat!',
          location: locationNames[randomLocation]
      });
    }
    return events;
  }
}
