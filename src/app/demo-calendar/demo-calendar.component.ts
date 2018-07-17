import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-demo-calendar',
  templateUrl: './demo-calendar.component.html',
  styleUrls: ['./demo-calendar.component.scss']
})
export class DemoCalendarComponent implements OnInit {
  view = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  clickedDate: Date;

  constructor() {}

  ngOnInit() {}

  dayClickedDemo(event) {
    console.log(event);
  }
}
