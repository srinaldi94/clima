import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClimaService } from '../../services/clima.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  urlImagen: string = "https://cdn-icons-png.flaticon.com/512/1116/1116453.png";
  ciudad: string = "";
  temperatura: number = 0;
  humedad: number = 0;
  clima: string = '';
  loading: boolean = false;
  query: boolean = false;
  mostrarError: boolean = false;


  constructor(private _climaService: ClimaService){}

  obtenerClima(){
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp -273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main
    }, error => {
      this.loading = false;
      this.error();
    })
  }

  error(){
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = "";
    }, 3000);
  }
}
