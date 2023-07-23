import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotDinnerTimePage } from './slot-dinner-time.page';

describe('SlotDinnerTimePage', () => {
  let component: SlotDinnerTimePage;
  let fixture: ComponentFixture<SlotDinnerTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotDinnerTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotDinnerTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
