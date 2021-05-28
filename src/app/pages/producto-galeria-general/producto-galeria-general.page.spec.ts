import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoGaleriaGeneralPage } from './producto-galeria-general.page';

describe('ProductoGaleriaGeneralPage', () => {
  let component: ProductoGaleriaGeneralPage;
  let fixture: ComponentFixture<ProductoGaleriaGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoGaleriaGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoGaleriaGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
