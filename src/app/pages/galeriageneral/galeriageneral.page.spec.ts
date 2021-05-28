import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleriageneralPage } from './galeriageneral.page';

describe('GaleriageneralPage', () => {
  let component: GaleriageneralPage;
  let fixture: ComponentFixture<GaleriageneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriageneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriageneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
