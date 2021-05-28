import { Component, OnInit } from '@angular/core';
import { TaskIGaleriasGenerales} from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-todo-admin-galeria-general',
  templateUrl: './todo-admin-galeria-general.page.html',
  styleUrls: ['./todo-admin-galeria-general.page.scss'],
})
export class TodoAdminGaleriaGeneralPage implements OnInit {
  admingaleriageneral: TaskIGaleriasGenerales = {
    codigo: '',
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

  constructor(private route: ActivatedRoute, private nav: NavController, public http: HttpClient, private todoService: TodoService, private loadingController: LoadingController, private storage: AngularFireStorage) { }

  ngOnInit() {
    this. getData();
    // ADMINGALERIASGENERALES
    this.admingaleriageneralId = this.route.snapshot.params['id'];
    if (this.admingaleriageneralId){
      this.loadAdminGaleriaGeneral();
    }
    registerLocaleData( es );
  }

  async loadAdminGaleriaGeneral(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.todoService.getAdminGaleriaGeneral(this.admingaleriageneralId).subscribe(admingaleriageneral => {
      loading.dismiss();;
      this.admingaleriageneral = admingaleriageneral;
      this.admingaleriageneral.precio = this.dolartoday * this.admingaleriageneral.preciodolar;
    });
  }

  getData(){
    var url ='https://s3.amazonaws.com/dolartoday/data.json';
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
      this.dolartoday = this.result.USD.transferencia;
    });
  }

  calcularpreciobs(){
    this.admingaleriageneral.precio = this.admingaleriageneral.preciodolar * this.dolartoday;
  }

  async saveAdminGaleriaGeneral() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
 
    if (this.admingaleriageneralId) {
      this.todoService.updateAdminGaleriaGeneral(this.admingaleriageneral, this.admingaleriageneralId).then(() => {
        loading.dismiss();
        window.location.href= "/admingaleriageneral";
      });
    } else {
      this.todoService.addAdminGaleriaGeneral(this.admingaleriageneral).then(() => {
        loading.dismiss();
        window.location.href= "/admingaleriageneral";
      });
    }
  }
  async onRemoveAdminGaleriaGeneral(idAdminGaleriaGeneral:string) {
    this.todoService.removeAdminGaleriaGeneral(idAdminGaleriaGeneral);
  }
}