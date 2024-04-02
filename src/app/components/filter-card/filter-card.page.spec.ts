import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterCardPage } from './filter-card.page';

describe('FilterCardPage', () => {
  let component: FilterCardPage;
  let fixture: ComponentFixture<FilterCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
