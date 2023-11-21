import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetoneplayerComponent } from './getoneplayer.component';

describe('GetoneplayerComponent', () => {
  let component: GetoneplayerComponent;
  let fixture: ComponentFixture<GetoneplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetoneplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetoneplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
