import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { TaskI } from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  todos: TaskI[];
  franelas: any = [];
  sweaters: any = [];
  tapabocas: any = [];
  promociones: any = [];
  porcategoria: any = [];
  ordencategoria = 'todos';
  result:any= [];
  data: Observable<any>;
  dolartoday;
  constructor(public authservice : AuthService, private todoService: TodoService, public http: HttpClient) {}
  ngOnInit(){
    // MENUS
    let shand2 = document.getElementsByClassName('menus') as HTMLCollectionOf<HTMLElement>;
    if (shand2.length != 0) {
      shand2[0].style.display = "initial";
    }
    // TODOS
    this.todoService.getTodos().subscribe((todos) =>{
      this.todos = todos;
      for(let item of this.todos){
        item.precio = item.preciodolar * this.dolartoday; 
        if(item.categoria == 'tapa boca'){
          this.tapabocas.push(item);
        }
        if(item.categoria == 'franela'){
          this.franelas.push(item);
        }
        if(item.categoria == 'sweater'){
          this.sweaters.push(item);
        }
        if(item.categoria == 'promocion'){
          this.promociones.push(item);
        }
      }
    })
    registerLocaleData( es );
    this.getData();
  }
  Onlogout(){
    this.authservice.logout();
  }
  getData(){
    var url ='https://s3.amazonaws.com/dolartoday/data.json';
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
      this.dolartoday = this.result.USD.transferencia;
    });
  }
  opencategoria(){
    if(this.ordencategoria == 'Tapa Bocas'){
      this.porcategoria = this.tapabocas;
    }
    if(this.ordencategoria == 'Franelas'){
      this.porcategoria = this.franelas;
    }
    if(this.ordencategoria == 'Sweaters'){
      this.porcategoria = this.sweaters;
    }
    if(this.ordencategoria == 'Promociones'){
      this.porcategoria = this.promociones;
    }
  }
}