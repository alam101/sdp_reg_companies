import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeightGuagePage } from './weight-guage.page';

describe('WeightGuagePage', () => {
  let component: WeightGuagePage;
  let fixture: ComponentFixture<WeightGuagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightGuagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeightGuagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
