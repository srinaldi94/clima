import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = 'cae3c1d2242c8cadf36b9b3c2af05f06';

  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);
  }










}
