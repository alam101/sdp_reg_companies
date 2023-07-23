import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppointentPage } from './appointent.page';

describe('AppointentPage', () => {
  let component: AppointentPage;
  let fixture: ComponentFixture<AppointentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
