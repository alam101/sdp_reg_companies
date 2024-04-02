import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortionCountPage } from './portion-count.page';

describe('PortionCountPage', () => {
  let component: PortionCountPage;
  let fixture: ComponentFixture<PortionCountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortionCountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortionCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
