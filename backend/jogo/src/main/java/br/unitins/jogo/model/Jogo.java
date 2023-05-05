package br.unitins.jogo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name="jogo")
@Entity(name="Jogo")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Jogo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    public Jogo(DadosCadastroJogo dados){
        this.nome= dados.nome();
    }

    public void editar(DadosDetalheJogo dados){
        if(dados.nome()!= null)
            this.nome=dados.nome();
    }
}
