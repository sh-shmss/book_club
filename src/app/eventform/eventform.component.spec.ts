import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventformComponent } from './eventform.component';

describe('EventformComponent', () => {
  let component: EventformComponent;
  let fixture: ComponentFixture<EventformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
