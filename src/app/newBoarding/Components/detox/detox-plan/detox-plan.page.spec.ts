import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetoxPlanPage } from './detox-plan.page';

describe('DetoxPlanPage', () => {
  let component: DetoxPlanPage;
  let fixture: ComponentFixture<DetoxPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetoxPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
