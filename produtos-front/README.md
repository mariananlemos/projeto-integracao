# produtos-front

Este diretório contém o frontend em Angular do projeto de integração com a API .NET.

A aplicação consome os dados da API de produtos e oferece uma interface para listar, criar, atualizar e deletar registros.

## Objetivo

Permitir que o usuário interaja com o sistema de produtos por meio de uma interface web, consumindo a API do backend.

## Tecnologias

- Angular
- TypeScript
- HTML
- CSS
- HttpClient

## Estrutura principal

```text
produtos-front/
├── src/
├── public/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── README.md
└── .gitignore
```

## Fluxo da aplicação

- O frontend acessa a API em `http://localhost:5027`
- Os serviços fazem requisições para `/api/Produtos`
- A interface renderiza os produtos em tela e permite operações CRUD

## Como executar

No diretório do frontend:

```bash
cd produtos-front
npm install
npm start
```

A aplicação ficará disponível em:

- `http://localhost:4200`

## Dependência com o backend

Antes de iniciar o frontend, a API precisa estar rodando no backend.

Se a API não estiver ativa, o frontend não conseguirá acessar os dados.

## Observações

- Este projeto integra com a API do diretório [../MinhaPrimeiraApi/README.md](../MinhaPrimeiraApi/README.md)
- O projeto completo está documentado no [README principal](../README.md)

---

Aplicação desenvolvida para demonstrar a integração entre frontend Angular e backend ASP.NET Core.
