<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current">Processo de Documentação</span>
</nav>

<article class="documentation-content">
  <h1>Processo de Documentação</h1>
  
  <p class="description">Guia para contribuir com a documentação do projeto</p>

  
## Fluxo de Trabalho (.cline Validated)

1. **Criação**:
   &#x60;&#x60;&#x60;bash
   # Usar templates atualizados v2.0+
   cp docs/templates/component-template.md docs/living/components/NOVO-COMPONENTE.md
   &#x60;&#x60;&#x60;

2. **Validação**:
   &#x60;&#x60;&#x60;bash
   # Validação completa (markdown + .cline rules)
   python scripts/validate_docs.py --strict
   &#x60;&#x60;&#x60;

3. **Integração com IA**:
   &#x60;&#x60;&#x60;bash
   # Gera sugestões de melhoria
   python scripts/ai_doc_review.py --template=component
   &#x60;&#x60;&#x60;

4. **Publicação**:
   - CI executa:
     &#x60;&#x60;&#x60;yaml
     steps:
       - run: python scripts/validate_docs.py --ci
       - run: python scripts/generate_docs.py
       - uses: actions/upload-artifact@v3
     &#x60;&#x60;&#x60;

## Estrutura de Diretórios

&#x60;&#x60;&#x60;
docs/
  src/                # Fontes Markdown
    features/         # Documentação de features
    architecture/     # Diagramas e decisões
  templates/          # Templates para docs
  dist/               # Docs gerados (automático)
&#x60;&#x60;&#x60;

## Convenções (.cline Rules)

### Obrigatórias
- Frontmatter completo:
  &#x60;&#x60;&#x60;yaml
  ---
  title: &quot;Título em PT-BR&quot;
  description: &quot;Descrição objetiva&quot;
  category: &quot;components|features|architecture&quot;
  cline_rules: &quot;../.cline/rules/doc-rules.cl&quot;
  ---
  &#x60;&#x60;&#x60;

- Seções requeridas:
  &#x60;&#x60;&#x60;clinerules
  rule doc-sections
    required:
      - purpose
      - examples
      - usage
    recommended:
      - ai-integration
  &#x60;&#x60;&#x60;

### Recomendadas
- Diagramas Mermaid para fluxos complexos
- Links para issues do GitHub (&#x60;Fix #123&#x60;)
- Exemplos de código testáveis

## Exemplo de Conformidade

1. Componentes:
   &#x60;&#x60;&#x60;bash
   docs/living/components/Button.md  # Modelo v2.0
   &#x60;&#x60;&#x60;

2. Projetos:
   &#x60;&#x60;&#x60;bash
   docs/v1_ContextGeneratorPrompt.md  # Documento mestre
   &#x60;&#x60;&#x60;

3. Validação:
   &#x60;&#x60;&#x60;mermaid
   graph TD
     A[Escrever doc] --&gt; B[Validar .cline]
     B --&gt; C[Review de IA]
     C --&gt; D[Publicar]
   &#x60;&#x60;&#x60;

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
