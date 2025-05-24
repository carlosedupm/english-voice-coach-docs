<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current"></span>
</nav>

<article class="documentation-content">
  <h1></h1>
  

  # Atualizações Documentais Necessárias

## Arquivo: scripts/doc-impact.js

### Tags encontradas:
- @doc-update
- @doc-refactor 
- @doc-deprecate
- @doc-feature

### Ações requeridas:

1. **Atualizar documentação existente**
   - Revisar a documentação atual do script
   - Atualizar exemplos de uso
   - Verificar parâmetros e retornos

2. **Revisar documentação após refatoração**
   - Documentar as novas classes/métodos
   - Atualizar diagramas de fluxo se necessário
   - Verificar consistência com a implementação

3. **Adicionar nota de depreciação**  
   - Identificar funcionalidades depreciadas
   - Adicionar avisos na documentação
   - Sugerir alternativas

4. **Documentar nova funcionalidade**
   - Explicar o propósito da nova feature
   - Adicionar exemplos de uso
   - Documentar parâmetros e comportamentos

### Checklist:
- [ ] Atualizar README.md
- [ ] Revisar CHANGELOG.md
- [ ] Atualizar comentários JSDoc
- [ ] Verificar documentação da API

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
