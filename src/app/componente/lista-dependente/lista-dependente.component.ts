import { FuncionarioService } from './../../servico/funcionario.service';
import { Funcionario } from './../../modelo/funcionarioModel';
import { Dependente } from './../../modelo/dependenteModel';
import { ActivatedRoute, Router } from '@angular/router';
import { DependenteService } from './../../servico/dependente.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-dependente',
  templateUrl: './lista-dependente.component.html',
  styleUrls: ['./lista-dependente.component.css']
})
export class ListaDependenteComponent implements OnInit {

  deps:any[]=[]

  funcionario:Funcionario={
    func_nome:'',
    func_cidade:'',
  }

  dep:Dependente={
    depId:'',
    depIdade:'',
    depNome:'',
    depRelacao:'',
    func_id:''
  }

  depExclusao:Dependente={
    depId:'',
    depNome:'',
    depIdade:'',
    depRelacao:''
  }

  toast = false
  mensagemToast = ''


  constructor(private dependenteService:DependenteService, private funcionarioService:FuncionarioService, private route:ActivatedRoute, private router:Router, private location:Location ) { }

  ngOnInit(): void {
    this.dep.func_id = this.route.snapshot.paramMap.get('func_id')
    this.mostrarFuncionarioPai(this.dep.func_id)
    this.mostrarDependentesPorFuncionario(this.dep.func_id)

  }

  mostrarDependentesPorFuncionario(func_id:string){
    this.dependenteService.mostrarDependentesPorFuncionario(func_id).subscribe(resultado=>{
      resultado.forEach((dependente)=>{
        this.deps.push(dependente)
      })

    })
    console.log(this.deps)
  }
  mostrarFuncionarioPai(func_id:string){
    this.funcionarioService.buscarUmFuncionario(func_id).subscribe(resultado=>{
      this.funcionario = resultado
    })

  }
  volarPag(){
    this.location.back();

  }

  preencherModalDelDep(dep:Dependente){
    this.depExclusao.depId= dep.depId
    this.depExclusao.depIdade = dep.depIdade
    this.depExclusao.depNome = dep.depNome
    this.depExclusao.depRelacao =dep.depRelacao
  }

  excluirDep(){
    this.dependenteService.excluirDependente(this.depExclusao.depId).subscribe({

      complete:()=>{this.mensagemToast="Dependente excluído com sucesso!"
        this.toast=true
        },
      error:()=>{this.mensagemToast="Erro ao excluir dependente"
      this.toast=true},
      next:()=>{setTimeout(()=>{window.location.reload();}, 1000)}

    })
  }

}
