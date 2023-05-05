CREATE SCHEMA `jogos` ;

use jogos;

create table jogo(
    id bigint not null auto_increment,
    nome varchar(100),
    
    primary key(id)
);