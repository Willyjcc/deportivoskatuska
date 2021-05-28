import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticasDePrivacidadPage } from './politicas-de-privacidad.page';

describe('PoliticasDePrivacidadPage', () => {
  let component: PoliticasDePrivacidadPage;
  let fixture: ComponentFixture<PoliticasDePrivacidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasDePrivacidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticasDePrivacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
