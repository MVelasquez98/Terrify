import { Component } from '@angular/core';

@Component({
  selector: 'app-asignacion-territorio-form',
  templateUrl: './asignacion-territorio-form.component.html',
  styleUrls: ['./asignacion-territorio-form.component.css']
})
export class AsignacionTerritorioFormComponent {
  numeroTerritorio: number;
  fecha: string;
  diaSemana: string;
  turno: string;
  responsable: string;
  responsables: string[] = ['Responsable 1', 'Responsable 2', 'Responsable 3'];
  estado: string = 'completo';
  manzanas: { nombre: string, realizada: boolean }[] = [
    { nombre: 'Manzana 1', realizada: false },
    { nombre: 'Manzana 2', realizada: false },
    { nombre: 'Manzana 3', realizada: false }
  ];
  picker: any;
  constructor() {
    this.numeroTerritorio = 1;
    this.fecha = '';
    this.diaSemana = '';
    this.turno = '';
    this.responsable = '';
  }
  obtenerDiaSemana() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const fechaSeleccionada = new Date(this.fecha);
    this.diaSemana = diasSemana[fechaSeleccionada.getDay()];
  }

  estadoChanged() {
    if (this.estado === 'incompleto') {
      this.manzanas.forEach(manzana => manzana.realizada = false);
    }
  }

  guardarAsignacion() {
    // Aquí puedes implementar la lógica para guardar la asignación en la API
    // Utiliza los valores de las propiedades para enviar la información
  }
}
