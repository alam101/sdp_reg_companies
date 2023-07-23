import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVitalsComponent } from './user-vitals.component';

describe('UserVitalsComponent', () => {
  let component: UserVitalsComponent;
  let fixture: ComponentFixture<UserVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
