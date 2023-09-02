import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TerritorioService {
  private apiUrl = 'http://localhost:3000/territorios';

  constructor(private http: HttpClient) {}

  obtenerTerritorioPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  obtenerManzanasPorTerritorio(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/manzanas`).pipe(
      map(manzanas => manzanas.map(manzana => ({ nombre: manzana, realizada: false })))
    );  }
}
