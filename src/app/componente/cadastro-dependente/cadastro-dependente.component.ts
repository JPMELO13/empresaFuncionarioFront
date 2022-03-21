import { DependenteService } from './../../servico/dependente.service';
import { Dependente } from './../../modelo/dependenteModel';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from './../../servico/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-dependente',
  templateUrl: './cadastro-dependente.component.html',
  styleUrls: ['./cadastro-dependente.component.css']
})
export class CadastroDependenteComponent implements OnInit {

  dep:Dependente={
    depNome:'',
    depIdade:'',
    depRelacao:''
  }
  nomeFuncionario:any
  idFuncionario:any

  toastCadastro=false
  mensagemToastCadastro=""

  constructor(private funcionarioService:FuncionarioService, private dependenteService:DependenteService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.idFuncionario = this.route.snapshot.paramMap.get('func_id')
    this.mostrarUmFuncionario(this.idFuncionario)
  }

  cadastrarDep(){
    this.dependenteService.cadastrarDependente(this.dep,this.idFuncionario).subscribe({

      complete:()=>{this.mensagemToastCadastro="Funcionário cadastrado com sucesso!"
        this.toastCadastro=true},
      error:()=>{this.mensagemToastCadastro="Erro ao cadastrar Funcionário"
      this.toastCadastro=true},
      next:()=>{setTimeout(()=>{this.location.back();}, 1000)
        }
    })
  }

  mostrarUmFuncionario(func_id:string){
    this.funcionarioService.buscarUmFuncionario(func_id).subscribe(resultado=>{
      this.nomeFuncionario = resultado.func_nome
    }

    )
  }

}
