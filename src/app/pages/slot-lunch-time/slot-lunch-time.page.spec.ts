import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotLunchTimePage } from './slot-lunch-time.page';

describe('SlotLunchTimePage', () => {
  let component: SlotLunchTimePage;
  let fixture: ComponentFixture<SlotLunchTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotLunchTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotLunchTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
