import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Boarding4Page } from './boarding4.page';

describe('Boarding4Page', () => {
  let component: Boarding4Page;
  let fixture: ComponentFixture<Boarding4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boarding4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Boarding4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
