import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cargo } from '../modelo/cargoModel';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String = 'http://localhost:8080/empresaFuncionario'

  constructor(private http:HttpClient) { }

  mostrarTodosCargos():Observable<Cargo[]>{

    const url = `${this.baseUrl}/cargo`

    return this.http.get<Cargo[]>(url)
  }

  mostrarUmCargo(car_id:string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${car_id}`

    return this.http.get<Cargo>(url)
  }

  cadastrarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo`

    return this.http.post<Cargo>(url,cargo)
  }

  excluirCargo(car_id:string):Observable<void>{
    const url = `${this.baseUrl}/cargo/${car_id}`

    return this.http.delete<void>(url);
  }

  editarTurma(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${cargo.car_id}`
    return this.http.put<Cargo>(url,cargo);
  }
}
