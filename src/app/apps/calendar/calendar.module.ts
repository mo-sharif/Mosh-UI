import { CalendarModule } from 'ap-angular2-fullcalendar';
import { NgModule } from '@angular/core';


import { SharedModule } from './../../shared/shared.module';

import { AppCalendarComponent } from './calendar/calendar.component';
import { CalendarDialogComponent } from './calendar-dialog/calendar-dialog.component';


@NgModule({
  imports: [
    SharedModule,
    CalendarModule
  ],
  declarations: [
    AppCalendarComponent,
    CalendarDialogComponent
  ],
  entryComponents: [
    CalendarDialogComponent
  ]
})
export class CalendarAppModule { }
