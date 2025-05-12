# API de Casamentos - Documentação

Esta documentação descreve todos os endpoints disponíveis na API de Casamentos.

## Base URL

```
http://localhost:3000
```

## Endpoints

### Casamentos (Weddings)

#### Listar todos os casamentos
- **URL**: `/weddings`
- **Método**: `GET`
- **Resposta**: Lista de todos os casamentos

#### Buscar casamento por ID
- **URL**: `/weddings/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (path): ID do casamento
- **Resposta**: Detalhes do casamento

#### Criar novo casamento
- **URL**: `/weddings`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "title": "string",
    "date": "Date",
    "location": "string",
    "status": "string",
    "budget": "number",
    "totalPaid": "number",
    "client1Id": "string",
    "client2Id": "string" // opcional
  }
  ```

#### Atualizar casamento
- **URL**: `/weddings/:id`
- **Método**: `PATCH`
- **Parâmetros**:
  - `id` (path): ID do casamento
- **Body**: Mesmos campos do POST, todos opcionais

#### Deletar casamento
- **URL**: `/weddings/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (path): ID do casamento

### Usuários (Users)

#### Listar todos os usuários
- **URL**: `/users`
- **Método**: `GET`
- **Resposta**: Lista de todos os usuários

#### Buscar usuário por ID
- **URL**: `/users/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (path): ID do usuário
- **Resposta**: Detalhes do usuário

#### Criar novo usuário
- **URL**: `/users`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "fullName": "string",
    "email": "string",
    "password": "string",
    "company": "string" // opcional
  }
  ```

#### Atualizar usuário
- **URL**: `/users/:id`
- **Método**: `PATCH`
- **Parâmetros**:
  - `id` (path): ID do usuário
- **Body**: Mesmos campos do POST, todos opcionais

#### Deletar usuário
- **URL**: `/users/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (path): ID do usuário

### Eventos (Events)

#### Listar todos os eventos
- **URL**: `/events`
- **Método**: `GET`
- **Resposta**: Lista de todos os eventos

#### Buscar evento por ID
- **URL**: `/events/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (path): ID do evento
- **Resposta**: Detalhes do evento

#### Criar novo evento
- **URL**: `/events`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "weddingId": "string",
    "title": "string",
    "start": "Date",
    "end": "Date",
    "type": "string",
    "location": "string",
    "description": "string", // opcional
    "attendees": "string" // opcional
  }
  ```

#### Atualizar evento
- **URL**: `/events/:id`
- **Método**: `PATCH`
- **Parâmetros**:
  - `id` (path): ID do evento
- **Body**: Mesmos campos do POST, todos opcionais

#### Deletar evento
- **URL**: `/events/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (path): ID do evento

### Contratos (Contracts)

#### Listar todos os contratos
- **URL**: `/contracts`
- **Método**: `GET`
- **Resposta**: Lista de todos os contratos

#### Buscar contrato por ID
- **URL**: `/contracts/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (path): ID do contrato
- **Resposta**: Detalhes do contrato

#### Criar novo contrato
- **URL**: `/contracts`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "weddingId": "string",
    "title": "string",
    "value": "number",
    "status": "string",
    "supplier": "string",
    "signedAt": "Date", // opcional
    "expiresAt": "Date", // opcional
    "documentUrl": "string" // opcional
  }
  ```

#### Atualizar contrato
- **URL**: `/contracts/:id`
- **Método**: `PATCH`
- **Parâmetros**:
  - `id` (path): ID do contrato
- **Body**: Mesmos campos do POST, todos opcionais

#### Deletar contrato
- **URL**: `/contracts/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (path): ID do contrato

### Pagamentos (Payments)

#### Listar todos os pagamentos
- **URL**: `/payments`
- **Método**: `GET`
- **Resposta**: Lista de todos os pagamentos

#### Buscar pagamento por ID
- **URL**: `/payments/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (path): ID do pagamento
- **Resposta**: Detalhes do pagamento

#### Criar novo pagamento
- **URL**: `/payments`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "weddingId": "string",
    "title": "string",
    "amount": "number",
    "dueDate": "Date",
    "paidAt": "Date", // opcional
    "status": "string",
    "recipient": "string",
    "category": "string",
    "method": "string",
    "notes": "string" // opcional
  }
  ```

#### Atualizar pagamento
- **URL**: `/payments/:id`
- **Método**: `PATCH`
- **Parâmetros**:
  - `id` (path): ID do pagamento
- **Body**: Mesmos campos do POST, todos opcionais

#### Deletar pagamento
- **URL**: `/payments/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (path): ID do pagamento

### Orçamentos (Budgets)

#### Listar todos os orçamentos
- **URL**: `/budgets`
- **Método**: `GET`
- **Resposta**: Lista de todos os orçamentos

#### Buscar orçamento por ID
- **URL**: `/budgets/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (path): ID do orçamento
- **Resposta**: Detalhes do orçamento

#### Criar novo orçamento
- **URL**: `/budgets`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "weddingId": "string",
    "totalAmount": "number",
    "categoryId": "string"
  }
  ```

#### Atualizar orçamento
- **URL**: `/budgets/:id`
- **Método**: `PATCH`
- **Parâmetros**:
  - `id` (path): ID do orçamento
- **Body**: Mesmos campos do POST, todos opcionais

#### Deletar orçamento
- **URL**: `/budgets/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (path): ID do orçamento