import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../servicios/todo.service';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  todos: TaskI[];
  franelas: any = [];
  sweaters: any = [];
  tapabocas: any = [];
  porcategoria: any = [];
  ordencategoria = 'todos';
  result:any= [];
  data: Observable<any>;
  dolartoday;
  constructor(private todoService: TodoService, public http: HttpClient) {}
  ngOnInit(){
    this.getData();
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
      }
    })
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
  }
}