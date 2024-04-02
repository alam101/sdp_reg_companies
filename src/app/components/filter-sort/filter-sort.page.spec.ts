import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterSortPage } from './filter-sort.page';

describe('FilterSortPage', () => {
  let component: FilterSortPage;
  let fixture: ComponentFixture<FilterSortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
