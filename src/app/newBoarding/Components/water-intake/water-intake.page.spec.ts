import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaterIntakePage } from './water-intake.page';

describe('WaterIntakePage', () => {
  let component: WaterIntakePage;
  let fixture: ComponentFixture<WaterIntakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterIntakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaterIntakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
