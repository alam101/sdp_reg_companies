import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Boarding3Page } from './boarding3.page';

describe('Boarding3Page', () => {
  let component: Boarding3Page;
  let fixture: ComponentFixture<Boarding3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boarding3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Boarding3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
