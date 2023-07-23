import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaloriesCounterInfoComponent } from './calories-counter-info.component';

describe('CaloriesCounterInfoComponent', () => {
  let component: CaloriesCounterInfoComponent;
  let fixture: ComponentFixture<CaloriesCounterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesCounterInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaloriesCounterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
