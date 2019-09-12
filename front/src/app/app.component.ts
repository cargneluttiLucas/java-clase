import { Component, OnInit, QueryList } from '@angular/core';
import { Moneda } from './Model/Moneda.model';
import { MovimientosService } from './Service/movimientos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'java-front';

  public listMoneda: Moneda;

  constructor(
    private movimientosService: MovimientosService
  ) { }

  ngOnInit() {
    this.cargarCombos();
  }

  cargarCombos() {
    this.movimientosService.obtenerMonedas().subscribe((resultado) => {
      if (resultado) {
        this.listMoneda = resultado;
      }
    });
  }
}
