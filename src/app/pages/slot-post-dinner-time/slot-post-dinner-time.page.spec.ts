import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotPostDinnerTimePage } from './slot-post-dinner-time.page';

describe('SlotPostDinnerTimePage', () => {
  let component: SlotPostDinnerTimePage;
  let fixture: ComponentFixture<SlotPostDinnerTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotPostDinnerTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotPostDinnerTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
