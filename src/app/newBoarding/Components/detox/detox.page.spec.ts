import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetoxPage } from './detox.page';

describe('DetoxPage', () => {
  let component: DetoxPage;
  let fixture: ComponentFixture<DetoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
