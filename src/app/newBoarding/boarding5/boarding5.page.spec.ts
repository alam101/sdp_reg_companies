import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Boarding5Page } from './boarding5.page';

describe('Boarding5Page', () => {
  let component: Boarding5Page;
  let fixture: ComponentFixture<Boarding5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boarding5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Boarding5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
