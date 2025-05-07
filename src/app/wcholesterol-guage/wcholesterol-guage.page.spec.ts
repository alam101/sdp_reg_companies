import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WcholesterolGuagePage } from './wcholesterol-guage.page';

describe('WcholesterolGuagePage', () => {
  let component: WcholesterolGuagePage;
  let fixture: ComponentFixture<WcholesterolGuagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WcholesterolGuagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WcholesterolGuagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
