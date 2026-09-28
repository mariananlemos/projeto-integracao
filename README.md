# Projeto de Integração: API .NET + Angular

Este repositório reúne uma aplicação full stack composta por:

- API REST em .NET para gerenciamento de produtos
- Front-end em Angular consumindo a API
- Persistência em SQLite com Entity Framework Core

A proposta do projeto é demonstrar a integração completa entre cliente e servidor, cobrindo o fluxo de CRUD desde a interface do navegador até o banco de dados.

## Visão geral

A aplicação foi desenvolvida em duas partes:

- [MinhaPrimeiraApi](./MinhaPrimeiraApi/README.md): backend responsável pela lógica de negócio, acesso ao banco e exposição dos endpoints
- [produtos-front](./produtos-front/README.md): frontend responsável pela interface e pela comunicação com a API

## Estrutura do repositório

```text
projeto-integracao/
├── README.md
├── MinhaPrimeiraApi/
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Repositories/
│   ├── Services/
│   ├── Migrations/
│   ├── Program.cs
│   ├── MinhaPrimeiraApi.csproj
│   └── README.md
└── produtos-front/
    ├── src/
    ├── package.json
    ├── angular.json
    └── README.md
```

## Funcionamento da integração

- O frontend roda em `http://localhost:4200`
- A API roda em `http://localhost:5027`
- A API está configurada com CORS para aceitar requisições do Angular
- O Angular usa `HttpClient` para consumir os endpoints da API

## Operações implementadas

- Listar produtos
- Buscar produto por ID
- Criar produto
- Atualizar produto
- Excluir produto

## Stack tecnológica

### Backend

- .NET 9
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger

### Frontend

- Angular
- TypeScript
- HTML e CSS
- HttpClient

## Pré-requisitos

- .NET 9 SDK instalado
- Node.js + npm instalados

## Como executar

### 1. Iniciar a API

```bash
cd MinhaPrimeiraApi
dotnet restore
dotnet run
```

A API ficará disponível em:

- `http://localhost:5027`
- Swagger em `http://localhost:5027/swagger`

### 2. Iniciar o frontend

```bash
cd produtos-front
npm install
npm start
```

A aplicação ficará disponível em:

- `http://localhost:4200`

## Documentação específica

- [README da API](./MinhaPrimeiraApi/README.md)
- [README do frontend](./produtos-front/README.md)

---

Projeto desenvolvido para estudo e prática de integração entre ASP.NET Core e Angular.
