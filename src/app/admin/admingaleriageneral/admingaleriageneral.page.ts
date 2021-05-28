import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { TaskIGaleriasGenerales } from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-admingaleriageneral',
  templateUrl: './admingaleriageneral.page.html',
  styleUrls: ['./admingaleriageneral.page.scss'],
})
export class AdmingaleriageneralPage implements OnInit {
  admingaleriasgenerales: TaskIGaleriasGenerales[];
  result:any= [];
  data: Observable<any>;
  dolartoday;
  constructor(public authservice : AuthService, private todoService: TodoService, public http: HttpClient) { }

  ngOnInit() {
    this. getData();
    // MENUS
    let shand2 = document.getElementsByClassName('menus') as HTMLCollectionOf<HTMLElement>;
    if (shand2.length != 0) {
      shand2[0].style.display = "initial";
    }
    // ADMINGALERIASGENERALES
    this.todoService.getAdminGaleriasGenerales().subscribe((admingaleriasgenerales) =>{
      this.admingaleriasgenerales = admingaleriasgenerales;
      for(let item of this.admingaleriasgenerales){
        item.precio = item.preciodolar * this.dolartoday; 
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
}