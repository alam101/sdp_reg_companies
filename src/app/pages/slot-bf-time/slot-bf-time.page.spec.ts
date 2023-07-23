import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotBfTimePage } from './slot-bf-time.page';

describe('SlotBfTimePage', () => {
  let component: SlotBfTimePage;
  let fixture: ComponentFixture<SlotBfTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBfTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotBfTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
