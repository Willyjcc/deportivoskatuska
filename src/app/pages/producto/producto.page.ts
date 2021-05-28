import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskI} from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  todo: TaskI = {
    codigo:'',
    nombre: '',
    categoria: '',
    descripcion: '',
    tallas: '',
    precio: 0,
    preciodolar: 0,
    img: '',
  };

  todoId= null;

  result:any= [];
  data: Observable<any>;
  dolartoday;

  precio_dolar;
  
  constructor(public modalController: ModalController, public http: HttpClient, private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) {}

  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.todo.img
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true,
    });
    return await modal.present();
  }
  
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    this.getData();
    if (this.todoId){
      this.loadTodo();
    }
    registerLocaleData( es );
  }

  getData(){
    var url ='https://s3.amazonaws.com/dolartoday/data.json';
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
      this.dolartoday = this.result.USD.transferencia;
    });
  }

  ordenarws(){
    var ws_msg = "https://wa.me/5804245069389?text=CLIENTE:%20Saludos%20Estoy%20interesado%20en%20encargar%20el%20producto:%20"+this.todo.nombre+"%20URL:%20https://deportivoskatiuska.com/producto/"+this.todoId;
    window.open(ws_msg,'_system', 'location=yes')
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(todo => {
      loading.dismiss();
      this.todo = todo;
      this.todo.precio = this.dolartoday * this.todo.preciodolar;
      this.precio_dolar = this.todo.precio / this.dolartoday;
    });
  }

}