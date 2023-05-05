package br.unitins.jogo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.unitins.jogo.model.DadosCadastroJogo;
import br.unitins.jogo.model.DadosDetalheJogo;
import br.unitins.jogo.model.Jogo;
import br.unitins.jogo.model.JogoRepository;

@RestController
@RequestMapping("jogo")
@CrossOrigin("*")
public class JogoController {
    @Autowired
    private JogoRepository repository;
    
    @PostMapping("/cadastrar")
    @Transactional
    public ResponseEntity cadastrar(@RequestBody DadosCadastroJogo dados){
        var jogo = new Jogo(dados);
        repository.save(jogo);
        return ResponseEntity.ok(new DadosDetalheJogo(jogo));
    }

    @GetMapping("/listar")
    public ResponseEntity<List<DadosDetalheJogo>> listar(){
        List<DadosDetalheJogo> listaJogo = repository.findAll().stream().map(DadosDetalheJogo::new).toList();
        return ResponseEntity.ok(listaJogo);
    }

    @PutMapping("/editar")
    @Transactional
    public ResponseEntity editar(@RequestBody DadosDetalheJogo dados){
        Jogo jogo = repository.getReferenceById(dados.id());
        jogo.editar(dados);
        return ResponseEntity.ok(new DadosDetalheJogo(jogo));
    }

    @DeleteMapping("/deletar/{id}")
    @Transactional
    public ResponseEntity deletar(@PathVariable Long id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
