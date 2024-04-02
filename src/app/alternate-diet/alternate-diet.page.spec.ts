import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlternateDietPage } from './alternate-diet.page';

describe('AlternateDietPage', () => {
  let component: AlternateDietPage;
  let fixture: ComponentFixture<AlternateDietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateDietPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlternateDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
