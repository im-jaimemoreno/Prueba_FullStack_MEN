import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeConversionResult } from '../models/time-conversion-result';

@Injectable({ providedIn: 'root' })
export class TimeService {
  // Usa proxy de desarrollo para evitar CORS
  // Preferir la ruta relativa para que funcione con proxy.conf.json
  private apiUrl = '/api/time/upload';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<TimeConversionResult[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<TimeConversionResult[]>(this.apiUrl, formData);
  }
}
