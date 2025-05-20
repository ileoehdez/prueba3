import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private prueba1backUrl = 'http://localhost/prueba1back';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.prueba1backUrl}/get_tareas.php`);
  }

  createTask(task: { tarea: string; tipo: string; prioridad: string, fecha_inicio: any; descripcion: string; estado: string }): Observable<any> {
    return this.http.post<any>(`${this.prueba1backUrl}/create_tarea.php`, task);
  }

  updateTask(task: { tarea: string; tipo: string; prioridad: string, fecha_inicio: any; descripcion: string; estado: string }): Observable<any> {
    return this.http.post<any>(`${this.prueba1backUrl}/update_tarea.php`, task);
  }

  deleteTask(task: { tarea: string; tipo: string; prioridad: string, fecha_inicio: any; descripcion: string; estado: string }): Observable<any> {
    return this.http.post<any>(`${this.prueba1backUrl}/delete_tarea.php`, task);
  }

}
