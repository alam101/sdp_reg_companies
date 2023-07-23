import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodaysCalorieCountPage } from './todays-calorie-count.page';

describe('TodaysCalorieCountPage', () => {
  let component: TodaysCalorieCountPage;
  let fixture: ComponentFixture<TodaysCalorieCountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysCalorieCountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodaysCalorieCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
