import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealWorkoutPage } from './meal-workout.page';

describe('MealWorkoutPage', () => {
  let component: MealWorkoutPage;
  let fixture: ComponentFixture<MealWorkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
