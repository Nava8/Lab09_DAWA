import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  tareas: string[] = ["Comprar víveres", "Lavar el auto", "Hacer ejercicio", "Estudiar para el examen", "Llamar al médico"];
  nuevaTarea: string = 'Nueva Tarea';

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push(this.nuevaTarea);
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
