import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WbloodPressureGuagePage } from './wblood-pressure-guage.page';

describe('WbloodPressureGuagePage', () => {
  let component: WbloodPressureGuagePage;
  let fixture: ComponentFixture<WbloodPressureGuagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WbloodPressureGuagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WbloodPressureGuagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
