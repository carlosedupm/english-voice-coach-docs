<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current"></span>
</nav>

<article class="documentation-content">
  <h1></h1>
  

  # Guia de Configuração de Secrets

## Configuração do Redis

&#x60;&#x60;&#x60;yaml
redis:
  image: redis:7-alpine
  ports: [&quot;6379:6379&quot;]
  healthcheck:
    test: [&quot;CMD&quot;, &quot;redis-cli&quot;, &quot;ping&quot;]
    interval: 5s
    timeout: 3s
    retries: 3
&#x60;&#x60;&#x60;

## Variáveis de Ambiente

Consulte o arquivo &#x60;.env.example&#x60; para a lista completa de variáveis necessárias, incluindo:

- Configurações de banco de dados (MongoDB, Redis)
- Chaves de autenticação (NextAuth)
- Integrações com serviços externos (OpenAI)

## Como Configurar

1. **Localmente**:
   - Copie &#x60;.env.local.example&#x60; para &#x60;.env.local&#x60;
   - Preencha com seus valores reais

2. **No GitHub**:
   - Acesse Settings → Secrets → Actions
   - Adicione cada variável como New Repository Secret

## Boas Práticas

- Nunca comite arquivos &#x60;.env&#x60; no Git
- Gere &#x60;NEXTAUTH_SECRET&#x60; com: &#x60;openssl rand -base64 32&#x60;
- Restrinja permissões das chaves de API
- Atualize os valores ao rotacionar credenciais

</article>

<style>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.breadcrumbs a {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumbs a:hover {
  color: var(--link-hover-color);
  text-decoration: underline;
}

.separator {
  color: var(--text-tertiary);
}

.current {
  font-weight: 500;
  color: var(--text-primary);
}

.documentation-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}
</style>
