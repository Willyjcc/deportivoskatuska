import { Component, OnInit } from '@angular/core';
import { TaskI} from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { HttpClient} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  todo: TaskI = {
    codigo: '',
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

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  imagenGuardar;
  constructor(private route: ActivatedRoute, public http: HttpClient, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId){
      this.loadTodo();
    }
    registerLocaleData( es );
    this.getData();
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(todo => {
      loading.dismiss();
      this.todo = todo;
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
    this.todo.precio = this.todo.preciodolar * this.dolartoday;
  }

  async saveTodo() {
    this.imagenGuardar = (<HTMLInputElement>document.getElementById('imagen')).value;
    this.todo.img = this.imagenGuardar;
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        window.location.href= "/dashboard";
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        window.location.href= "/dashboard";
      });
    }
  }
  async onRemoveTodo(idTodo:string) {
    this.todoService.removeTodo(idTodo);
  }

  onUpload(e) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/producto_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

}