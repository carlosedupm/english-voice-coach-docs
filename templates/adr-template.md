<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current"></span>
</nav>

<article class="documentation-content">
  <h1></h1>
  

  # ADR-{{NUMBER}}: {{TITLE}}

## Status
✅ Proposta | ⏳ Pendente | ✅ Aprovada | ❌ Rejeitada

## Contexto
{{DESCRIBE_CONTEXT}}

## Decisão
{{DESCRIBE_DECISION}}

## Consequências
- **Positivas**:
  {{POSITIVE_IMPACT}}
- **Negativas**: 
  {{NEGATIVE_IMPACT}}

## Links Relacionados
- [Documento Principal](#)
- [Issues Relacionadas](#)
- [Pull Requests](#)

## Histórico
- {{DATE}}: Proposta inicial

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
