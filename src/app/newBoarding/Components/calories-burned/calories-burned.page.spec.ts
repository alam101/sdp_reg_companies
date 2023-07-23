import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaloriesBurnedPage } from './calories-burned.page';

describe('CaloriesBurnedPage', () => {
  let component: CaloriesBurnedPage;
  let fixture: ComponentFixture<CaloriesBurnedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesBurnedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaloriesBurnedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
