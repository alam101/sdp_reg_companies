import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InappbowserTestingDownloadPage } from './inappbowser-testing-download.page';

describe('InappbowserTestingDownloadPage', () => {
  let component: InappbowserTestingDownloadPage;
  let fixture: ComponentFixture<InappbowserTestingDownloadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InappbowserTestingDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InappbowserTestingDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
