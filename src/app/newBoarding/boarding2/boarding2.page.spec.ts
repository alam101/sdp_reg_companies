import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Boarding2Page } from './boarding2.page';

describe('Boarding2Page', () => {
  let component: Boarding2Page;
  let fixture: ComponentFixture<Boarding2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boarding2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Boarding2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
