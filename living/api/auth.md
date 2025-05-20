# API de Autenticação

## Endpoints

### Registrar Usuário
`POST /api/users`

**Request:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response (200):**
```json
{
  "message": "User registered successfully"
}
```

### Login
`POST /api/auth`

**Request:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response (200):**
```json
{
  "accessToken": "string",
  "refreshToken": "string"
}
```

**Response (401):**
```json
{
  "error": "Invalid credentials"
}
```

## Implementação
- Rotas definidas em: `src/backend/routes/auth.route.ts`
- Controllers em: `src/backend/controllers/auth.controller.ts`
- Modelo de usuário em: `src/backend/models/user.model.ts`
