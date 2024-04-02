import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSuggestionsPage } from './view-suggestions.page';

describe('ViewSuggestionsPage', () => {
  let component: ViewSuggestionsPage;
  let fixture: ComponentFixture<ViewSuggestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSuggestionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSuggestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
