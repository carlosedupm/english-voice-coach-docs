<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current">ADR-: </span>
</nav>

<article class="documentation-content">
  <h1>ADR-: </h1>
  

  
&lt;!-- TEMPLATE: adr-template-v2.md --&gt;

# ADR-{{NUMBER}}: {{TITLE}}

## Status
✅ Proposto  
⬜ Implementado  
⬜ Obsoleto

## Descrição
{{DESCREVER EM DETALHES A DECISÃO ARQUITETURAL}}

## Exemplos
&#x60;&#x60;&#x60;markdown
# Exemplo de ADR
## Contexto
[Contexto técnico relevante]

## Decisão
[Detalhes da solução adotada]
&#x60;&#x60;&#x60;

## Uso
1. [Passo 1 para implementação]
2. [Passo 2 para verificação]
3. [Passo 3 para manutenção]

## Integração com IA
- [Como a IA será utilizada]
- [Processos automatizados]
- [Pontos de validação]

## Contexto
{{DESCREVER O PROBLEMA/OPORTUNIDADE}}

## Decisão
{{SOLUÇÃO ESCOLHIDA}}

## Alternativas Consideradas
1. {{ALTERNATIVA 1}}
   - Prós: {{LISTA}}
   - Contras: {{LISTA}}

2. {{ALTERNATIVA 2}}
   - Prós: {{LISTA}}
   - Contras: {{LISTA}}

## Impactos
- ✅ {{IMPACTO POSITIVO 1}}
- ⚠️ {{IMPACTO NEGATIVO 1}}

## Fluxo Relacionado
&#x60;&#x60;&#x60;mermaid
graph TD
    {{INSERIR DIAGRAMA SE APLICÁVEL}}
&#x60;&#x60;&#x60;

## Registro de Mudanças
| Data       | Versão | Alteração               |
|------------|--------|-------------------------|
| {{DATE}}   | 1.0    | Criação do documento    |

&lt;!-- IA-METADATA: {&quot;type&quot;: &quot;adr_template&quot;, &quot;version&quot;: &quot;2.0&quot;} --&gt;

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
