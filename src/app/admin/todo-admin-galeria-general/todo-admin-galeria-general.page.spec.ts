import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoAdminGaleriaGeneralPage } from './todo-admin-galeria-general.page';

describe('TodoAdminGaleriaGeneralPage', () => {
  let component: TodoAdminGaleriaGeneralPage;
  let fixture: ComponentFixture<TodoAdminGaleriaGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAdminGaleriaGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoAdminGaleriaGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
