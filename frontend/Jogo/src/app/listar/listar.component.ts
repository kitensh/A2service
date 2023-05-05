import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogoService } from '../services/jogo.service';
import { FormBuilder } from '@angular/forms';
import { Jogo } from '../model/jogo';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  jogos: Jogo[];
  displayedColumns = ['id','nome','action'];

  constructor(private router: Router, private service: JogoService){
    this.jogos=this.service.listar();
  }

  deletarJogo(id: number){
    this.service.deletar(id).subscribe(() => {
    });
  }

  ngOnInit(): void {
      
  }

}
