import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private prueba1backUrl = 'http://localhost/prueba1back';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<string[]> {
    return this.http.get<string[]>(`${this.prueba1backUrl}/get_tareas.php`);
  }

  createTask(tarea: string, tipo: string, prioridad: string, fecha_inicio: string, descripcion: string, estado: string): Observable<string> {
    const creacion_tarea = {
      tarea: tarea,
      tipo: tipo,
      prioridad: prioridad,
      fecha_inicio: fecha_inicio,
      descripcion: descripcion,
      estado: estado
    };
    return this.http.post<string>(`${this.prueba1backUrl}/create_tarea.php`, creacion_tarea);
  }

  updateTask(tarea: string, tipo: string, prioridad: string, fecha_inicio: string, descripcion: string, estado: string): Observable<string> {
    const edicion_tarea = {
      tarea: tarea,
      tipo: tipo,
      prioridad: prioridad,
      fecha_inicio: fecha_inicio,
      descripcion: descripcion,
      estado: estado
    };
    return this.http.post<string>(`${this.prueba1backUrl}/update_tarea.php`, edicion_tarea);
  }

  deleteTask(tarea: string, tipo: string, prioridad: string, fecha_inicio: string, descripcion: string, estado: string): Observable<string> {
    const eliminacion_tarea = {
      tarea: tarea,
      tipo: tipo,
      prioridad: prioridad,
      fecha_inicio: fecha_inicio,
      descripcion: descripcion,
      estado: estado
    };
    return this.http.post<string>(`${this.prueba1backUrl}/delete_tarea.php`, eliminacion_tarea);
  }

}
