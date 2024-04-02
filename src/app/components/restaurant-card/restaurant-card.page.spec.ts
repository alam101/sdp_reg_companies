import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantCardPage } from './restaurant-card.page';

describe('RestaurantCardPage', () => {
  let component: RestaurantCardPage;
  let fixture: ComponentFixture<RestaurantCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
