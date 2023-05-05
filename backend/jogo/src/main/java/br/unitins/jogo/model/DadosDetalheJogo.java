package br.unitins.jogo.model;

public record DadosDetalheJogo(Long id ,String nome) {
    public DadosDetalheJogo(Jogo jogo){
        this(jogo.getId(), jogo.getNome());
    }
}
