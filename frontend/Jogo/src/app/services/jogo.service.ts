import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private listaJogo!: Jogo[]
  private url = `http://localhost:8080/jogo`;

  constructor(private http: HttpClient) { }

  cadastrar(nome: string) {
    const site = this.url + `/cadastrar`;
    const body = {
      nome: nome
    };
    return this.http.post(site, body);
  }

  listar() {
    this.http.get<Jogo[]>(`http://localhost:8080/jogo/listar`).subscribe((data) => {this.listaJogo=data})
    return this.listaJogo;
  }

  editar(id: number, nome: string) {
    const site = this.url + `/editar`;
    const body = {
      id: id,
      nome: nome
    };
    return this.http.put(site, body);
  }

  deletar(id: number) {
    const site = this.url + `/deletar/${id}`;
    return this.http.delete(site);
  }
}
