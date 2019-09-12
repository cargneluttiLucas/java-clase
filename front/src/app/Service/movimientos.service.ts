import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultadoModel } from '../Model/ResultadoModel';
import { Moneda } from '../Model/Moneda.model';

@Injectable( )

export class MovimientosService {

    constructor(private http: HttpClient) {
    }

    obtenerMonedas() {
        return this.http.get<Moneda>('http://localhost:8080/api/monedas');
    }

}

