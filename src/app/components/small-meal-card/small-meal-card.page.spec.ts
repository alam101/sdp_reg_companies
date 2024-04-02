import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmallMealCardPage } from './small-meal-card.page';

describe('SmallMealCardPage', () => {
  let component: SmallMealCardPage;
  let fixture: ComponentFixture<SmallMealCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallMealCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmallMealCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
