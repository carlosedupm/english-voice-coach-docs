<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current">Template de Componente</span>
</nav>

<article class="documentation-content">
  <h1>Template de Componente</h1>
  
  <p class="description">Modelo para documentação de componentes seguindo regras .cline</p>

  
## Descrição
Este template define a estrutura padrão para documentação de componentes, incluindo:
- Metadados obrigatórios
- Especificação de props
- Exemplos de uso
- Integração com ferramentas de validação

## Exemplos
&#x60;&#x60;&#x60;tsx
// Exemplo básico de implementação
function MyComponent({ title }) {
  return &lt;button&gt;{title}&lt;/button&gt;
}
&#x60;&#x60;&#x60;

## Uso
1. Copie este template para um novo arquivo .md
2. Preencha todas as seções obrigatórias
3. Execute a validação com:
&#x60;&#x60;&#x60;bash
npm run validate-docs
&#x60;&#x60;&#x60;

## Integração com IA
Este template é compatível com:
- Geração automática via IA
- Validação de conformidade
- Análise estática de componentes

&gt; Documento Base: &#x60;v1_ContextGeneratorPrompt.md&#x60;  
&gt; **Última Atualização**: 20/05/2025, 18:36 (UTC)

# Template de Componente  
*(v2.0 - Integrado com .cline e AI)*  

&#x60;&lt;!-- AI-TEMPLATE:component --&gt;&#x60;

## AI Integration
Este template é usado para:
- Geração automática de documentação via IA
- Validação de componentes seguindo padrões .cline
- Integração com ferramentas de análise estática

## Documento Base
&#x60;v1_ContextGeneratorPrompt.md&#x60;

## Trecho Relevante
&#x60;&#x60;&#x60;tsx
// Exemplo de implementação do componente
function MyComponent({ props }) {
  return &lt;div&gt;{props.children}&lt;/div&gt;
}
&#x60;&#x60;&#x60;

## Checklist
- [x] Documentação base completa
- [x] Exemplos de uso
- [x] Referência ao documento base
- [x] Timestamp de atualização
- [x] Seções obrigatórias
- [ ] Testes de integração (pendente)


---

## **1. METADADOS &amp; AI INTEGRATION**  
&#x60;&#x60;&#x60;json
{
  &quot;component&quot;: &quot;NomeDoComponente&quot;,
  &quot;type&quot;: &quot;Atom/Molecule/Organism&quot;,
  &quot;status&quot;: &quot;draft|stable|deprecated&quot;,
  &quot;storybook&quot;: &quot;url&quot;,
  &quot;ai_usage&quot;: {
    &quot;generation&quot;: &quot;Componentes baseados neste template&quot;,
    &quot;validation&quot;: [&quot;props&quot;, &quot;a11y&quot;, &quot;types&quot;],
    &quot;rules&quot;: &quot;../.cline/rules/component-rules.cl&quot;
  }
}
&#x60;&#x60;&#x60;

---

## **2. PROPS (.cline VALIDATED)**  
&#x60;&#x60;&#x60;typescript
interface Props {
  /**
   * @rule required
   * @description Texto principal
   * @example &quot;Botão Principal&quot;
   */
  title: string;

  /**
   * @default false
   * @rule boolean-required
   * @description Desabilita interação
   * @example true
   */
  disabled?: boolean;

  /**
   * @rule a11y-required
   * @description Rótulo ARIA
   * @example &quot;Botão de confirmação&quot;
   */
  ariaLabel?: string;
}
&#x60;&#x60;&#x60;

---

## **3. COMPORTAMENTO &amp; VALIDAÇÃO**  
### Diagrama de Estados  
&#x60;&#x60;&#x60;mermaid
stateDiagram-v2
    [*] --&gt; Idle
    Idle --&gt; Loading: onFetch
    Loading --&gt; Error: fetchFailed
    Loading --&gt; Success: fetchComplete
&#x60;&#x60;&#x60;

### Regras .cline Aplicáveis  
&#x60;&#x60;&#x60;clinerules
rule component-props-validation
  props:
    - required: title
    - type: string
    - max_length: 50

rule a11y-checks
  elements:
    - focus_visible
    - aria_labels
    - color_contrast
&#x60;&#x60;&#x60;

### Checklist de Validação  
- [x] Props documentadas com exemplos  
- [x] Tipos TypeScript definidos  
- [ ] Testes de acessibilidade (WCAG AA)  
- [ ] Cobertura de testes &gt; 80%  

---

## **4. USAGE &amp; EXAMPLES**  
### AI Integration (Novo)
&#x60;&#x60;&#x60;typescript
/**
 * @aiContext [contexto-da-funcionalidade]
 * @purpose [descrição-do-propósito]
 * @usage [exemplo-de-uso]
 * @params [descrição-dos-parâmetros]
 * @returns [descrição-do-retorno]
 * @dependencies [dependências-externas]
 */
&#x60;&#x60;&#x60;

### Uso Básico (.cline validated)  
&#x60;&#x60;&#x60;tsx
import { NomeDoComponente } from &quot;@/components/ui/nome-do-componente&quot;

function Example() {
  return (
    &lt;NomeDoComponente 
      title=&quot;Confirmar&quot;
      disabled={false}
      ariaLabel=&quot;Botão de confirmação&quot;
    /&gt;
  )
}
&#x60;&#x60;&#x60;

### Casos Complexos  
&#x60;&#x60;&#x60;tsx
// Estado de loading com tratamento de erro
&lt;NomeDoComponente 
  title={isLoading ? &quot;Processando...&quot; : &quot;Enviar&quot;}
  disabled={isLoading || hasError}
  ariaLabel={hasError ? &quot;Erro ao processar&quot; : &quot;Botão de envio&quot;}
/&gt;
&#x60;&#x60;&#x60;

### Testes Recomendados  
&#x60;&#x60;&#x60;typescript
it(&#x27;should render with default props&#x27;, () =&gt; {
  render(&lt;NomeDoComponente title=&quot;Test&quot; /&gt;)
  expect(screen.getByText(&#x27;Test&#x27;)).toBeInTheDocument()
})
&#x60;&#x60;&#x60;

---

**CONFORMIDADE**  
&#x60;&#x60;&#x60;json
{
  &quot;version&quot;: &quot;2.0&quot;,
  &quot;cline_compatible&quot;: true,
  &quot;required_sections&quot;: [&quot;purpose&quot;, &quot;examples&quot;, &quot;usage&quot;],
  &quot;validation&quot;: {
    &quot;last_run&quot;: &quot;2025-05-18T02:09:00Z&quot;,
    &quot;passed&quot;: true,
    &quot;errors&quot;: []
  }
}

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
