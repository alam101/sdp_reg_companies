import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WbloodGlucoseGuagePage } from './wblood-glucose-guage.page';

describe('WbloodGlucoseGuagePage', () => {
  let component: WbloodGlucoseGuagePage;
  let fixture: ComponentFixture<WbloodGlucoseGuagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WbloodGlucoseGuagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WbloodGlucoseGuagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
