import { Location } from '@angular/common';
import { FuncionarioService } from 'src/app/servico/funcionario.service';
import { Funcionario } from './../../modelo/funcionarioModel';
import { CargoService } from './../../servico/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/modelo/cargoModel';
import { ActivatedRoute, Router } from '@angular/router';

declare var bootstrap: any

@Component({
  selector: 'app-lista-cargos',
  templateUrl: './lista-cargos.component.html',
  styleUrls: ['./lista-cargos.component.css']
})

export class ListaCargosComponent implements OnInit {


  cargo:Cargo = {
    car_id:'',
    car_nome:'',
    car_atribuicao:'',
    funcionario:[]
  }

  funcionarioExclusao:Funcionario={
    func_id:'',
    func_nome:'',
    func_cidade:''

  }

  toast = false
  mensagemToast = ''



  cargovazio:boolean = false

  constructor(private cargoService:CargoService, private funcionarioService:FuncionarioService, private route:ActivatedRoute, private router:Router, private location:Location) {

   }

  ngOnInit(): void {
    this.cargo.car_id=this.route.snapshot.paramMap.get('car_id')
    this.mostrarUmCargo()
    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })



  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.car_id).subscribe((resultado)=>{
      this.cargo = resultado

      if (this.cargo.funcionario.length ==0){
        this.cargovazio = true
      }

    })
  }

  excluirCargo(){
    this.cargoService.excluirCargo(this.cargo.car_id).subscribe({
      complete:() => console.log("Cargo excluído com sucesso."),
      error:() => console.log("Esse cargo possui funcionarios associados, não pode ser excluído!")
    })
    this.router.navigate(['/listaFunc'])
  }

  preencheExclusaoFuncionario(func:any){
    this.funcionarioExclusao.func_id = func.func_id
    this.funcionarioExclusao.func_nome = func.func_nome
    this.funcionarioExclusao.func_cidade = func.func_cidade

  }
  excluirFuncionario(){
    this.funcionarioService.excluirFuncionario(this.funcionarioExclusao.func_id).subscribe({
      complete:()=>{this.mensagemToast="Funcionário excluído com sucesso!"
        this.toast=true
        },
      error:()=>{this.mensagemToast="Erro ao excluir Funcionário"
      this.toast=true},
      next:()=>{setTimeout(()=>{window.location.reload();}, 1000)}
    })
  }


}
