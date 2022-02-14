import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Vehicle } from 'src/app/models/vehicle';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  url = 'http://127.0.0.1:8000/api/v1';

  constructor(private httpClient: HttpClient) {}

  //Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //Obter vehicles
  getVehicles(): Observable<Vehicle[]> {
    return this.httpClient
      .get<Vehicle[]>(`${this.url}/movement/get`)
      .pipe(retry(2));
  }

  // Salvar vehicles
  saveVehicle(vehicle: any): Observable<Vehicle> {
    var object:any = {};
    vehicle.forEach(function(value:any, key:any){
        object[key] = value;
    });
    
    return this.httpClient
      .post<Vehicle>(`${this.url}/movement/register`, JSON.stringify(object), this.httpOptions)
      .pipe(retry(2));
  }

  // atualizar vehicles
  updateVehicle(date: string, vehicleId: number): Observable<Vehicle> {
    return this.httpClient
      .put<Vehicle>(`${this.url}/movement/update/${vehicleId}`, JSON.stringify(date), this.httpOptions)
      .pipe(retry(1));
  }
}
