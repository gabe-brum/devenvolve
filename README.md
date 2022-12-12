### Projeto DevEnvolve - Feevale.
# Projeto desenvolvido para o componente de Projeto - Inovações Tecnológicas no curso de Análise e Desenvolvimento de Sistemas.

## Como rodar o projeto localmente (parte Frontend)
- Primeiramente é necessário ter o Node instalado em versão igual ou superior à 14.18.1
- Fazer o clone para seu local
- Ter alguma IDE para abrir o projeto (ex.: VS Studio)
- Ao abrir, no terminal (CTRL + J no VS Studio), rodar:
```bash
    yarn
```
- Após isso, rodar o comando abaixo para o projeto ser buildado e executado na porta 3015
```bash
    yarn dev
```

## Configuração do banco de dados
- Toda a instalação do SQL Server Express Edition e a criação do banco pode ser vista a partir do vídeo: https://www.youtube.com/watch?v=OKqpZ6zbZwQ
- Os scripts para a criação das tabelas é encontrado na raiz do projeto no arquivo 'scripts.txt'

## Como rodar o projeto localmente (parte Backend)
- Clonar o projeto de https://github.com/BrunoBordin/devenvolve
- Abrir o arquivo 'Api.DevEnvolve.sln' em alguma IDE (ex.: VS Community) 
- No arquivo 'appsettings.json', na linha 11 você deve alterar o Server atribuído para o que você criar no Microsoft SQL Server Management Studio contendo o banco de dados.
- No caso de usar a IDE do VS Community, a execução se dá por esse botão: ![image](https://user-images.githubusercontent.com/52430344/206945237-afbd5af3-7b97-4bad-b305-7b4dfab40be8.png)

