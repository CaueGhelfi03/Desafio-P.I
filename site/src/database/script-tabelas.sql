-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
CREATE DATABASE madera;

USE madera;

CREATE TABLE fabrica (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

create table galpao (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	numero INT,
	fk_fabrica INT,
	FOREIGN KEY (fk_fabrica) REFERENCES fabrica(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	fk_galpao INT,
	FOREIGN KEY (fk_galpao) REFERENCES galpao(id)
);

insert into fabrica (razao_social, cnpj) values ('Fabrica 1', '00000000000000');
insert into galpao (numero, fk_empresa) values ('1', 1);
insert into medida (id,dht11_temperatura,fk_galpao) values (null, 45.50, 1);


select * from usuario;