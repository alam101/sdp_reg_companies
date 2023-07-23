import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDietPage } from './new-diet.page';

describe('NewDietPage', () => {
  let component: NewDietPage;
  let fixture: ComponentFixture<NewDietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDietPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
