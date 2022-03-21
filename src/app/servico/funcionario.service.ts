import { Funcionario } from './../modelo/funcionarioModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl:string = "http://localhost:8080/empresaFuncionario"

  constructor(private http:HttpClient) { }

  buscarFuncionariosCargo(id_cargo:string):Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url)
  }
  buscarTodosFuncionarios():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/`
    return this.http.get<Funcionario[]>(url)
  }

  buscarTodosFuncionariosComCargo():Observable<any[]>{
    const url = `${this.baseUrl}/funcionario-cargo/`
    return this.http.get<any[]>(url)
  }

  buscarUmFuncionario(func_id:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${func_id}`
    return this.http.get<Funcionario>(url)
  }

  buscarUmFuncionarioComCargo(func_id:string):Observable<any>{
    const url = `${this.baseUrl}/funcionarioComCargo/${func_id}`
    return this.http.get<any>(url)
  }

  cadastrarFuncionario(funcionario:Funcionario, id_cargo:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
    return this.http.post<Funcionario>(url,funcionario)
  }

  excluirFuncionario(func_id:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${func_id}`
    return this.http.delete<void>(url)
  }

  editarFuncionario(funcionario:Funcionario, id_cargo:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${funcionario.func_id}?cargo=${id_cargo}`
    return this.http.put<Funcionario>(url,funcionario)
  }
}
