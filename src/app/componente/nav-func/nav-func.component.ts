import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/servico/cargo.service';
import { Cargo } from 'src/app/modelo/cargoModel';

@Component({
  selector: 'app-nav-func',
  templateUrl: './nav-func.component.html',
  styleUrls: ['./nav-func.component.css']
})
export class NavFuncComponent implements OnInit {

  cargos:Cargo[] = []

  constructor(private cargoService:CargoService) { }

  ngOnInit(): void {
    this.mostrarTodosCargos()
  }

  mostrarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resposta=>{
      this.cargos = resposta
    })
  }
}
