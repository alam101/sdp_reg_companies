import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardDealConfirmedPage } from './reward-deal-confirmed.page';

describe('RewardDealConfirmedPage', () => {
  let component: RewardDealConfirmedPage;
  let fixture: ComponentFixture<RewardDealConfirmedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardDealConfirmedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardDealConfirmedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
