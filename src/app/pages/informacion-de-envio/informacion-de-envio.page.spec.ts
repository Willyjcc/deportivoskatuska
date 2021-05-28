import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionDeEnvioPage } from './informacion-de-envio.page';

describe('InformacionDeEnvioPage', () => {
  let component: InformacionDeEnvioPage;
  let fixture: ComponentFixture<InformacionDeEnvioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionDeEnvioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionDeEnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
