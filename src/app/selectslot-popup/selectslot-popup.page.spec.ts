import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectslotPopupPage } from './selectslot-popup.page';

describe('SelectslotPopupPage', () => {
  let component: SelectslotPopupPage;
  let fixture: ComponentFixture<SelectslotPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectslotPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectslotPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
