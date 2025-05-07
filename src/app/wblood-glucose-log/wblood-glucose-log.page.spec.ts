import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WbloodGlucoseLogPage } from './wblood-glucose-log.page';

describe('WbloodGlucoseLogPage', () => {
  let component: WbloodGlucoseLogPage;
  let fixture: ComponentFixture<WbloodGlucoseLogPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WbloodGlucoseLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WbloodGlucoseLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
