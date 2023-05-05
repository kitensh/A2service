import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JogoService } from '../services/jogo.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit{
    formulario!: FormGroup;

    constructor(private router: Router, private service: JogoService, private formBuilder: FormBuilder){

    }

    ngOnInit(): void {
        this.formulario= this.formBuilder.group({
          nome:[""]
        })
    }

    cadastrarJogo(){
      this.service.cadastrar(this.formulario.get("nome")?.value).subscribe(() => {
        this.router.navigate(['/listar']);
      })
    }

}
