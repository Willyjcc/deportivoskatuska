import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResponsabilidadSocialPage } from './responsabilidad-social.page';

describe('ResponsabilidadSocialPage', () => {
  let component: ResponsabilidadSocialPage;
  let fixture: ComponentFixture<ResponsabilidadSocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsabilidadSocialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsabilidadSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
