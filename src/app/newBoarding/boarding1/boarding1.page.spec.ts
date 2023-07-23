import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Boarding1Page } from './boarding1.page';

describe('Boarding1Page', () => {
  let component: Boarding1Page;
  let fixture: ComponentFixture<Boarding1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boarding1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Boarding1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
