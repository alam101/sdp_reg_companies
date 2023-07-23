import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGoalsComponent } from './landing-goals.component';

describe('LandingGoalsComponent', () => {
  let component: LandingGoalsComponent;
  let fixture: ComponentFixture<LandingGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
