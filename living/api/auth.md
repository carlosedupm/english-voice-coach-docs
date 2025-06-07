<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current"></span>
</nav>

<article class="documentation-content">
  <h1></h1>
  

  # API de Autenticação

## Endpoints

### Registrar Usuário
&#x60;POST /api/users&#x60;

**Request:**
&#x60;&#x60;&#x60;json
{
  &quot;email&quot;: &quot;string&quot;,
  &quot;password&quot;: &quot;string&quot;
}
&#x60;&#x60;&#x60;

**Response (200):**
&#x60;&#x60;&#x60;json
{
  &quot;message&quot;: &quot;User registered successfully&quot;
}
&#x60;&#x60;&#x60;

### Login
&#x60;POST /api/auth&#x60;

**Request:**
&#x60;&#x60;&#x60;json
{
  &quot;email&quot;: &quot;string&quot;,
  &quot;password&quot;: &quot;string&quot;
}
&#x60;&#x60;&#x60;

**Response (200):**
&#x60;&#x60;&#x60;json
{
  &quot;accessToken&quot;: &quot;string&quot;,
  &quot;refreshToken&quot;: &quot;string&quot;
}
&#x60;&#x60;&#x60;

**Response (401):**
&#x60;&#x60;&#x60;json
{
  &quot;error&quot;: &quot;Invalid credentials&quot;
}
&#x60;&#x60;&#x60;

## Implementação
- Rotas definidas em: &#x60;src/backend/routes/auth.route.ts&#x60;
- Controllers em: &#x60;src/backend/controllers/auth.controller.ts&#x60;
- Modelo de usuário em: &#x60;src/backend/models/user.model.ts&#x60;

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
