import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AiDietRecallSummaryComponent } from './ai-diet-recall-summary.component';

describe('AiDietRecallSummaryComponent', () => {
  let component: AiDietRecallSummaryComponent;
  let fixture: ComponentFixture<AiDietRecallSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AiDietRecallSummaryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AiDietRecallSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
