import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlternateSearchPage } from './alternate-search.page';

describe('AlternateSearchPage', () => {
  let component: AlternateSearchPage;
  let fixture: ComponentFixture<AlternateSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlternateSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
