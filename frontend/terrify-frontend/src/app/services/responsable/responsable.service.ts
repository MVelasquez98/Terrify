import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private apiUrl = 'http://localhost:3000/responsables/habilitados';

  constructor(private http: HttpClient) {}
  obtenerResponsables(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
  
}
