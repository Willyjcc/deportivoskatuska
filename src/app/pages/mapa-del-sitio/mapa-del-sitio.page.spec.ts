import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaDelSitioPage } from './mapa-del-sitio.page';

describe('MapaDelSitioPage', () => {
  let component: MapaDelSitioPage;
  let fixture: ComponentFixture<MapaDelSitioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDelSitioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaDelSitioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
