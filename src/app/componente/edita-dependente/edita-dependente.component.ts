import { DependenteService } from './../../servico/dependente.service';
import { Funcionario } from './../../modelo/funcionarioModel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dependente } from 'src/app/modelo/dependenteModel';
import { FuncionarioService } from 'src/app/servico/funcionario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edita-dependente',
  templateUrl: './edita-dependente.component.html',
  styleUrls: ['./edita-dependente.component.css']
})
export class EditaDependenteComponent implements OnInit {

  func:Funcionario={
    func_id:'',
    func_nome:'',
    func_cidade:''
  }

  funcionarios:any[] = []

  mensagemToastEdicao=''
  toastEdicao=false

  dep:Dependente={
    depIdade:'',
    depNome:'',
    depRelacao:'',
    depId:'',
    func_id:''
  }

  constructor(private route:ActivatedRoute, private funcionarioService:FuncionarioService, private dependenteService:DependenteService, private location:Location) { }


  ngOnInit(): void {
    this.dep.depId=this.func.func_id=this.route.snapshot.paramMap.get('depId')
    this.procurarDep();
    this.preencheSelectFuncionarios()
  }

  procurarDep(){
    this.dependenteService.mostrarUmDependenteFunc(this.dep.depId).subscribe(resultado=>{
      this.dep.depId = resultado[0]
      this.dep.depIdade = resultado[1]
      this.dep.depNome = resultado[2]
      this.dep.depRelacao = resultado[3]
      this.dep.func_id = resultado[4]
    })
  }

  preencheSelectFuncionarios(){
    this.funcionarioService.buscarTodosFuncionarios().subscribe(resultado=>{
      this.funcionarios = resultado
    })
  }

  editarDep(){
    this.dependenteService.editarDependente(this.dep.depId,this.dep,this.dep.func_id).subscribe({
      complete:()=>{this.mensagemToastEdicao="Dependente editado com sucesso!"
        this.toastEdicao=true},
      error:()=>{this.mensagemToastEdicao="Erro ao editar dependente"
      this.toastEdicao=true},
      next:()=>{setTimeout(()=>{this.location.back();}, 1000)
        }
    })

  }

}
