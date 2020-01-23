import { Injectable } from '@angular/core';
import { TareaModel } from '../shared/tarea.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TareaService {

  constructor(private http: HttpClient) { }
  getAllTareas() {
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas');
  }
  getTarea(id: string){
    return this.http.get<TareaModel>('http://localhost:3000/api/tareas/' + id);
  }
  addTarea(tarea: TareaModel){
    return this.http.post<TareaModel>('http://localhost:3000/api/tareas', { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado, description: tarea.description});
  }
  updateTarea(tarea: TareaModel){
    return this.http.put<TareaModel>('http://localhost:3000/api/tareas/' + tarea._id, { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado, description: tarea.description});
  }
  deleteTarea(id: string){
    return this.http.delete<string>('http://localhost:3000/api/tareas/' + id);
  }
}
