import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FightSliderPage } from './fight-slider.page';

describe('FightSliderPage', () => {
  let component: FightSliderPage;
  let fixture: ComponentFixture<FightSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FightSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
