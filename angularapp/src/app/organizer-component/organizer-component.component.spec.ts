import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerComponentComponent } from './organizer-component.component';

describe('OrganizerComponentComponent', () => {
  let component: OrganizerComponentComponent;
  let fixture: ComponentFixture<OrganizerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
