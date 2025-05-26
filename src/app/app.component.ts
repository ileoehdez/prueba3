import { Component } from '@angular/core';
import { TaskService } from '../app/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba3';
  tarea:string = '';
  tipo:string = '';
  prioridad:string = '';
  opciones_tipo = [
    { value: 'hogar', label: 'Hogar' },
    { value: 'trabajo', label: 'Trabajo' },
    { value: 'personal', label: 'Personal' }
  ];
  opciones_prioridad = [
    { value: 'baja', label: 'Baja' },
    { value: 'media', label: 'Media' },
    { value: 'alta', label: 'Alta' }
  ];
  fecha_inicio:string = '';
  descripcion: string = '';
  estado:string = '';
  mostrar_tarea:string = '';

  constructor(private taskservice: TaskService) { }

  verificarcamposvacios(): boolean {
    // campos llenados
    const camposrequeridos = [
      { name: 'Tarea', value: this.tarea },
      { name: 'Tipo', value: this.tipo },
      { name: 'Prioridad', value: this.prioridad },
      { name: 'Fecha de Inicio', value: this.fecha_inicio },
      { name: 'Descripción', value: this.descripcion }
    ];
    // verificar campos
    for (const input of camposrequeridos) {
      if (!input.value || input.value.trim() === '') {
        alert(`Favor de llenar el campo '${input.name}'.`);
        return false;
      }
    }

    // Verificar el campo de fecha
    if (!this.fecha_inicio || this.fecha_inicio.trim() === '') {
      alert("Favor de seleccionar una 'Fecha de Inicio'.");
      return false;
    }

    // Si todos los campos pasaron las validaciones
    return true;
  }

  save_task(){
    this.estado = "Pendiente";
    this.taskservice.createTask(this.tarea, this.tipo, this.prioridad, this.fecha_inicio, this.descripcion, this.estado)
    .subscribe({
      next: (response) => {
        // petición exitosa
        console.log('Tarea creada:', response);
        // respuesta del servidor
        if (response === 'SUCCESS') {
          alert("Tarea registrada.");
        } else {
          alert("Se ha registrado correctamente.");
          window.location.href = "#";
        }
      },
      error: (error) => {
        // error en la petición
        console.error('Error al crear la tarea:', error);
        alert('Ocurrió un error al guardar la tarea. Por favor, inténtalo de nuevo.');
        // Pmensaje de error
      },
      complete: () => {
        // el Observable se completa (la petición finaliza)
        console.log('Petición de creación de tarea completada.');
      }
    });;
  }

  update_task(){
    // this.estado = "Pendiente";
    this.taskservice.updateTask(this.tarea, this.tipo, this.prioridad, this.fecha_inicio, this.descripcion, this.estado)
    .subscribe({
      next: (response) => {
        // petición exitosa
        console.log('Tarea actualizada:', response);
        // respuesta del servidor
        if (response === 'SUCCESS') {
          alert("Tarea actualizada.");
        } else {
          alert("Se ha editado correctamente.");
          window.location.href = "#";
        }
      },
      error: (error) => {
        // error en la petición
        console.error('Error al editar la tarea:', error);
        alert('Ocurrió un error al editar la tarea. Por favor, inténtalo de nuevo.');
        // mensaje de error
      },
      complete: () => {
        // el Observable se completa (la petición finaliza)
        console.log('Petición de edicion de tarea completada.');
      }
    });;
  }

  delete_task(){
    // this.estado = "Pendiente";
    this.taskservice.deleteTask(this.tarea, this.tipo, this.prioridad, this.fecha_inicio, this.descripcion, this.estado)
    .subscribe({
      next: (response) => {
        // petición exitosa
        console.log('Tarea eliminada', response);
        // respuesta del servidor
        if (response === 'SUCCESS') {
          alert("Tarea eliminada.");
        } else {
          alert("Se ha eliminado.");
          window.location.href = "#";
        }
      },
      error: (error) => {
        // error en la petición
        console.error('Error al eliminar la tarea:', error);
        alert('Ocurrió un error al eliminar la tarea. Por favor, inténtalo de nuevo.');
        // mensaje de error
      },
      complete: () => {
        // el Observable se completa (la petición finaliza)
        console.log('Petición de eliminacion de tarea completada.');
      }
    });;
  }
}
