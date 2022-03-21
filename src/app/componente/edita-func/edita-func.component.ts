import { Location } from '@angular/common';
import { CargoService } from './../../servico/cargo.service';
import { Cargo } from './../../modelo/cargoModel';
import { Funcionario } from './../../modelo/funcionarioModel';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from './../../servico/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edita-func',
  templateUrl: './edita-func.component.html',
  styleUrls: ['./edita-func.component.css']
})
export class EditaFuncComponent implements OnInit {



  func :any = {
    func_id:'',
    func_nome:'',
    func_cidade:'',
    car_id:''

  }

  mensagemToastEdicao=''
  toastEdicao=false
  cargosFunc:Cargo[]= []

  constructor(private funcionarioService:FuncionarioService, private route:ActivatedRoute, private cargoService:CargoService, private location:Location) { }

  ngOnInit(): void {
    this.buscarTodosCargos()
    this.func.func_id=this.route.snapshot.paramMap.get('func_id')
    this.buscarUmFuncionario(this.func.func_id)
  }

  buscarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado=>{
      this.cargosFunc = resultado;
      console.log(resultado)
    }
    )
  }
  editarFunc(){
    this.funcionarioService.editarFuncionario(this.func, this.func.car_id).subscribe({
      complete:()=>{this.mensagemToastEdicao="Funcionário editado com sucesso!"
        this.toastEdicao=true},
      error:()=>{this.mensagemToastEdicao="Erro ao editar Funcionário"
      this.toastEdicao=true},
      next:()=>{setTimeout(()=>{this.location.back();}, 1000)
        }
    })

  }

  buscarUmFuncionario(func_id:string){
    this.funcionarioService.buscarUmFuncionarioComCargo(func_id).subscribe(resultado=>{
      this.func.func_id = resultado[0];
      this.func.func_nome = resultado[1];
      this.func.func_cidade = resultado[2];
      this.func.car_id=resultado[3]
    })
  }

}
