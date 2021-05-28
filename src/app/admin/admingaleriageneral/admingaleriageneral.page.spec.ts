import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmingaleriageneralPage } from './admingaleriageneral.page';

describe('AdmingaleriageneralPage', () => {
  let component: AdmingaleriageneralPage;
  let fixture: ComponentFixture<AdmingaleriageneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingaleriageneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmingaleriageneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
