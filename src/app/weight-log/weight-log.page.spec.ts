import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeightLogPage } from './weight-log.page';

describe('WeightLogPage', () => {
  let component: WeightLogPage;
  let fixture: ComponentFixture<WeightLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeightLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
