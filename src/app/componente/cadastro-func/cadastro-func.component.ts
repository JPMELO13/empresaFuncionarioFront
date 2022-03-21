import { FuncionarioService } from 'src/app/servico/funcionario.service';
import { CargoService } from './../../servico/cargo.service';
import { Funcionario } from './../../modelo/funcionarioModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
declare var bootstrap: any
@Component({
  selector: 'app-cadastro-func',
  templateUrl: './cadastro-func.component.html',
  styleUrls: ['./cadastro-func.component.css']
})
export class CadastroFuncComponent implements OnInit {

  funcionario:Funcionario={
    func_nome:'',
    func_cidade:'',
    id_cargo:''
  }
  nomeCargo=''
  toastCadastro=false
  mensagemToastCadastro=""



  constructor(private route:ActivatedRoute, private cargoService:CargoService, private funcionarioService:FuncionarioService, private location:Location) { }



  ngOnInit(): void {
    this.funcionario.id_cargo=this.route.snapshot.paramMap.get('car_id')
    this.preencheNome(this.funcionario.id_cargo)





  }

  preencheNome(id_cargo:string){
    this.cargoService.mostrarUmCargo(id_cargo).subscribe(resultado=>{
      this.nomeCargo = resultado.car_nome
    })
  }
  cadastrarFunc(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario,this.funcionario.id_cargo).subscribe({
      complete:()=>{this.mensagemToastCadastro="Funcionário cadastrado com sucesso!"
        this.toastCadastro=true},
      error:()=>{this.mensagemToastCadastro="Erro ao cadastrar Funcionário"
      this.toastCadastro=true},
      next:()=>{setTimeout(()=>{this.location.back();}, 1000)
        }
    })
  }
}
