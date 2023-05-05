import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JogoService } from '../services/jogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  formulario!: FormGroup;

  constructor(private router: Router, private service: JogoService, private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
      this.formulario= this.formBuilder.group({
        id:[""],
        nome:[""]
      })
  }

  editarJogo(){
   this.service.editar(this.formulario.get("id")?.value, this.formulario.get("nome")?.value).subscribe(()=>{
    this.router.navigate(['/listar']);
   })
  }
}
