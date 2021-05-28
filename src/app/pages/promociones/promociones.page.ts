import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {
  todos: TaskI[];
  promociones: any = [];
  result:any= [];
  data: Observable<any>;
  dolartoday;
  constructor(private todoService: TodoService, public http: HttpClient) { }
  ngOnInit() {
    this.getData();
    this.todoService.getTodos().subscribe((todos) =>{
      this.todos = todos;
      for(let item of this.todos){
        item.precio = item.preciodolar * this.dolartoday; 
        if(item.categoria == 'promocion'){
          this.promociones.push(item);
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
  // ir atras
  iratras(){
    window.history.back();
  }
}