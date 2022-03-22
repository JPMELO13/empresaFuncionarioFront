import { Dependente } from '../modelo/dependenteModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependenteService {

  baseUrl: String = 'http://localhost:8080/empresaFuncionario'

  constructor(private http:HttpClient) { }

  mostrarTodosDependentes():Observable<Dependente[]>{
    const url = `${this.baseUrl}/dependente`
    return this.http.get<Dependente[]>(url)
  }

  mostrarUmDependente(depId:string):Observable<Dependente>{
    const url = `${this.baseUrl}/dependente/${depId}`
    return this.http.get<Dependente>(url)
  }
  mostrarUmDependenteFunc(depId:string):Observable<any>{
    const url = `${this.baseUrl}/dependenteFunc/${depId}`
    return this.http.get<any>(url)
  }

  mostrarDependentesPorFuncionario(func_id:string):Observable<Dependente[]>{
    const url = `${this.baseUrl}/dependente/funcionario/${func_id}`
    return this.http.get<Dependente[]>(url)
  }

  cadastrarDependente(dep:Dependente, func_id:string):Observable<Dependente>{
    const url = `${this.baseUrl}/dependente/funcionario/${func_id}`
    return this.http.post<Dependente>(url,dep)
  }

  excluirDependente(depId:string):Observable<void>{
    const url = `${this.baseUrl}/dependente/${depId}`
    return this.http.delete<void>(url)
  }

  editarDependente(depId:string, dep:Dependente, func_id:string):Observable<Dependente>{
    const url = `${this.baseUrl}/dependente/${depId}?funcionario=${func_id}`
    return this.http.put<Dependente>(url,dep)
  }
}
