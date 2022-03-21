import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/servico/cargo.service';
import { Cargo } from 'src/app/modelo/cargoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  cargo: Cargo={
    car_nome:'',
    car_atribuicao:''
  }

  constructor(private cargoService:CargoService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarCargo(){
    this.cargoService.cadastrarCargo(this.cargo).subscribe((resultado)=>{
      this.router.navigate(['/listaFunc'])
    })
  }

}
