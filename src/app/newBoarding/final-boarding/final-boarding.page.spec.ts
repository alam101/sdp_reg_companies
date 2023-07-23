import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalBoardingPage } from './final-boarding.page';

describe('FinalBoardingPage', () => {
  let component: FinalBoardingPage;
  let fixture: ComponentFixture<FinalBoardingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBoardingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalBoardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
