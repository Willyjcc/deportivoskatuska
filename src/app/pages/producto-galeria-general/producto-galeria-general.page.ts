import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskIGaleriasGenerales} from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-producto-galeria-general',
  templateUrl: './producto-galeria-general.page.html',
  styleUrls: ['./producto-galeria-general.page.scss'],
})
export class ProductoGaleriaGeneralPage implements OnInit {
  admingaleriageneral: TaskIGaleriasGenerales = {
    codigo:'',
    nombre: '',
    categoria: '',
    descripcion: '',
    tallas: '',
    precio: 0,
    preciodolar: 0,
    img: '',
  };

  admingaleriageneralId= null;

  result:any= [];
  data: Observable<any>;
  dolartoday;
  
  constructor(public modalController: ModalController, public http: HttpClient, private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) {}

  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.admingaleriageneral.img
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true,
    });
    return await modal.present();
  }
  
  ngOnInit() {
    this.admingaleriageneralId = this.route.snapshot.params['id'];
    if (this.admingaleriageneralId){
      this.loadAdminGaleriageneral();
    }
    registerLocaleData( es );
    this.getData();
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
    var ws_msg = "https://wa.me/5804245069389?text=CLIENTE:%20Saludos%20Estoy%20interesado%20en%20encargar%20el%20producto:%20"+this.admingaleriageneral.nombre+"%20URL:%20https://deportivoskatiuska.com/producto/"+this.admingaleriageneralId;
    window.open(ws_msg,'_system', 'location=yes')
  }

  async loadAdminGaleriageneral(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.todoService.getAdminGaleriaGeneral(this.admingaleriageneralId).subscribe(admingaleriageneral => {
      loading.dismiss();
      this.admingaleriageneral = admingaleriageneral;
      this.admingaleriageneral.precio = this.dolartoday * this.admingaleriageneral.preciodolar;
    });
  }

}
