import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/modelo/funcionarioModel';
import { FuncionarioService } from 'src/app/servico/funcionario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-func',
  templateUrl: './lista-func.component.html',
  styleUrls: ['./lista-func.component.css']
})
export class ListaFuncComponent implements OnInit {

  funcionarios : any[] = []

  constructor(private funcionarioService:FuncionarioService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // this.car_id = this.route.snapshot.paramMap.get('id_turma')!
    this.buscarFuncionariosCargo();
  }

  //Funcionários sem cargo
  buscarFuncionariosCargo2(){
    this.funcionarioService.buscarTodosFuncionarios().subscribe((resultado)=>{
      this.funcionarios = resultado
    })
  }

  //Funcionários com cargo
  buscarFuncionariosCargo(){
    this.funcionarioService.buscarTodosFuncionariosComCargo().subscribe((resultado)=>{

      resultado.forEach((funcionario)=>{
        let funcTemp:any = {
          func_id:'',
          func_nome:'',
          func_cidade:'',
          func_cargo:'',
          func_atribuicao:''
        }
        funcTemp.func_id = funcionario[0]
        funcTemp.func_nome = funcionario[1]
        funcTemp.func_cidade = funcionario[2]
        funcTemp.func_cargo = funcionario[3]
        funcTemp.func_atribuicao = funcionario[4]

        this.funcionarios.push(funcTemp)
      })
    })
  }
}
