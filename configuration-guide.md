# Guia de Configuração de Secrets

## Configuração do Redis

```yaml
redis:
  image: redis:7-alpine
  ports: ["6379:6379"]
  healthcheck:
    test: ["CMD", "redis-cli", "ping"]
    interval: 5s
    timeout: 3s
    retries: 3
```

## Variáveis de Ambiente

Consulte o arquivo `.env.example` para a lista completa de variáveis necessárias, incluindo:

- Configurações de banco de dados (MongoDB, Redis)
- Chaves de autenticação (NextAuth)
- Integrações com serviços externos (OpenAI)

## Como Configurar

1. **Localmente**:
   - Copie `.env.local.example` para `.env.local`
   - Preencha com seus valores reais

2. **No GitHub**:
   - Acesse Settings → Secrets → Actions
   - Adicione cada variável como New Repository Secret

## Boas Práticas

- Nunca comite arquivos `.env` no Git
- Gere `NEXTAUTH_SECRET` com: `openssl rand -base64 32`
- Restrinja permissões das chaves de API
- Atualize os valores ao rotacionar credenciais
