import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from "@angular/material/sidenav"
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable, startWith, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponsableService } from '../services/responsable/responsable.service';

@Component({
  selector: 'app-asignacion-territorio-form',
  templateUrl: './asignacion-territorio-form.component.html',
  styleUrls: ['./asignacion-territorio-form.component.css'],
  standalone:true,
  imports:[    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,]
})
export class AsignacionTerritorioFormComponent {
  numeroTerritorio: number;
  fecha: string;
  diaSemana: string;
  turno: string;
  responsableId: number | null = null;
  responsable: string;
  responsables: string[] = [];
  estado: string = 'completo';
  manzanas: { nombre: string, realizada: boolean }[] = [
    { nombre: 'Manzana 1', realizada: false },
    { nombre: 'Manzana 2', realizada: false },
    { nombre: 'Manzana 3', realizada: false }
  ];
  picker: any;
  constructor(private responsableService: ResponsableService) {
    this.numeroTerritorio = 1;
    this.fecha = '';
    this.diaSemana = '';
    this.turno = '';
    this.responsable = '';
  }
  myControl = new FormControl('');
  filteredReponsables!: Observable<string[]>;

  ngOnInit() {
    this.filteredReponsables = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.obtenerListaResponsables();
  }
  obtenerListaResponsables() {
    this.responsableService.obtenerResponsables().subscribe(
      (data: any[]) => {
        this.responsables = data.map(item => item.nombreCompleto);
      },
      (error) => {
        console.error('Error al obtener la lista de responsables:', error);
      }
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.responsables.filter(option => option.toLowerCase().includes(filterValue));
  }
  seleccionarResponsable(responsable: any) {
    this.responsableId = responsable.id;
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
