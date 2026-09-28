# MinhaPrimeiraApi

Esta pasta contém o backend do projeto de integração entre ASP.NET Core e Angular.

A API expõe endpoints para gerenciamento de produtos e utiliza SQLite como banco de dados, com Entity Framework Core para persistência.

## Objetivo

Oferecer uma API REST para operações de CRUD de produtos, permitindo que o frontend Angular consuma os dados de forma simples e segura.

## Tecnologias

- .NET 9
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger

## Estrutura da API

```text
MinhaPrimeiraApi/
├── Controllers/
├── Data/
├── Models/
├── Repositories/
├── Services/
├── Migrations/
├── Program.cs
├── MinhaPrimeiraApi.csproj
├── appsettings.json
├── appsettings.Development.json
├── README.md
└── MinhaPrimeiraApi.http
```

## Endpoints disponíveis

Todos os endpoints começam com `/api/Produtos`.

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/Produtos` | Lista todos os produtos |
| GET | `/api/Produtos/{id}` | Busca um produto pelo ID |
| POST | `/api/Produtos` | Cria um novo produto |
| PUT | `/api/Produtos/{id}` | Atualiza um produto |
| DELETE | `/api/Produtos/{id}` | Remove um produto |

### Exemplo de payload

```json
{
  "nome": "Teclado mecânico",
  "preco": 299.90
}
```

## CORS

A API está configurada para aceitar requisições vindas do frontend Angular, que roda em `http://localhost:4200`.

## Como executar

No diretório raiz do repositório:

```bash
cd MinhaPrimeiraApi
dotnet restore
dotnet run
```

A aplicação estará disponível em:

- `http://localhost:5027`
- Swagger em `http://localhost:5027/swagger`

## Observações

- O banco é criado automaticamente via Entity Framework e o SQLite será gerado localmente.
- Esta API faz parte de um projeto integrado com o frontend em [../produtos-front/README.md](../produtos-front/README.md).

---

Para mais detalhes do projeto completo, veja o [README principal](../README.md).
