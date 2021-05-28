import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { TaskIGaleriasGenerales } from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-galeriageneral',
  templateUrl: './galeriageneral.page.html',
  styleUrls: ['./galeriageneral.page.scss'],
})
export class GaleriageneralPage implements OnInit {
  admingaleriasgenerales: TaskIGaleriasGenerales[];
  mujeres: any = [];
  hombres: any = [];
  ninios: any = [];
  adultos: any = [];
  porcategoria: any = [];
  ordencategoria;

  admingaleriageneralCategory= null;

  result:any= [];
  data: Observable<any>;
  dolartoday;

  constructor(private route: ActivatedRoute, public http: HttpClient, public authservice : AuthService, private todoService: TodoService) { }

  ngOnInit() {
    this.admingaleriageneralCategory = this.route.snapshot.params['id'];
    this.ordencategoria = this.admingaleriageneralCategory;
    this.getData();
    // GALERIASGENERALES
    this.todoService.getAdminGaleriasGenerales().subscribe((admingaleriasgenerales) =>{
      this.admingaleriasgenerales = admingaleriasgenerales;
      for(let item of this.admingaleriasgenerales){
        item.precio = item.preciodolar * this.dolartoday; 
        if(item.categoria == 'mujeres'){
          this.mujeres.push(item); 
        }
        if(item.categoria == 'hombres'){
          this.hombres.push(item);
          this.porcategoria = this.hombres;
        }
        if(item.categoria == 'ninios'){
          this.ninios.push(item);
          this.porcategoria = this.ninios;
        }
        if(item.categoria == 'adultos'){
          this.adultos.push(item);
          this.porcategoria = this.adultos;
        }
      }
      if(this.ordencategoria == 'mujeres'){
        this.porcategoria = this.mujeres;
      }
      if(this.ordencategoria == 'hombres'){
        this.porcategoria = this.hombres;
      }
      if(this.ordencategoria == 'ninios'){
        this.porcategoria = this.ninios;
      }
      if(this.ordencategoria == 'adultos'){
        this.porcategoria = this.adultos;
      }
    })
    registerLocaleData( es );
  }
  opencategoria(){
    if(this.ordencategoria == 'Mujeres'){
      this.porcategoria = this.mujeres;
    }
    if(this.ordencategoria == 'Hombres'){
      this.porcategoria = this.hombres;
    }
    if(this.ordencategoria == 'Niños'){
      this.porcategoria = this.ninios;
    }
    if(this.ordencategoria == 'Adultos'){
      this.porcategoria = this.adultos;
    }
  }
  getData(){
    var url ='https://s3.amazonaws.com/dolartoday/data.json';
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
      this.dolartoday = this.result.USD.transferencia;
    });
  }
  // ir atras
  iratras(){
    window.history.back();
  }
}