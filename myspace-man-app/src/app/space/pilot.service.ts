import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { Pilot, PilotAttrs } from './pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]>{
    return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/pilots`).pipe(
      map((data)=> data.map((pilotAtrrs)=>new Pilot(pilotAtrrs)))
    )
  }
}

