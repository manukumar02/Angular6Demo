import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCalendarComponent } from './demo-calendar.component';

describe('DemoCalendarComponent', () => {
  let component: DemoCalendarComponent;
  let fixture: ComponentFixture<DemoCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
