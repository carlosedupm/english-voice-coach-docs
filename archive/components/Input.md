<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current">Input</span>
</nav>

<article class="documentation-content">
  <h1>Input</h1>
  
  <p class="description">Componente de campo de entrada com validação integrada</p>

  
&gt; Documento Base: &#x60;v1_ContextGeneratorPrompt.md&#x60;  
&gt; **Última Atualização**: 20/05/2025, 18:30 (UTC)

# Input

## Purpose
Componente de entrada de texto com:
- Validação visual integrada
- Múltiplos tamanhos
- Suporte a acessibilidade

## AI Integration
Este componente utiliza:

## Checklist
- [x] Documentação base completa
- [x] Exemplos de uso
- [x] Referência ao documento base
- [x] Timestamp de atualização
- [x] Seções obrigatórias
- [ ] Testes de validação (pendente)

- Análise de padrões de entrada via IA
- Detecção automática de tipos (email, telefone, etc)
- Sugestões de máscaras baseadas em contexto

## Props
&#x60;&#x60;&#x60;ts
interface InputProps extends React.InputHTMLAttributes&lt;HTMLInputElement&gt; {
  /** Variante visual */
  variant?: &#x27;default&#x27; | &#x27;ghost&#x27;
  /** Tamanho do componente */
  inputSize?: &#x27;sm&#x27; | &#x27;default&#x27; | &#x27;lg&#x27;
  /** Estado de erro */
  hasError?: boolean
}
&#x60;&#x60;&#x60;

## Usage
&#x60;&#x60;&#x60;tsx
import { Input } from &quot;@/components/ui/input&quot;

function FormExample() {
  const [value, setValue] = useState(&#x27;&#x27;)
  
  return (
    &lt;Input 
      value={value}
      onChange={(e) =&gt; setValue(e.target.value)}
      placeholder=&quot;Digite algo...&quot;
    /&gt;
  )
}
&#x60;&#x60;&#x60;

## Examples

### Validação Integrada
&#x60;&#x60;&#x60;tsx
&lt;Input hasError={!isValid} placeholder=&quot;Email&quot; /&gt;
&#x60;&#x60;&#x60;

### Tamanhos
&#x60;&#x60;&#x60;tsx
&lt;Input inputSize=&quot;sm&quot; placeholder=&quot;Pequeno&quot; /&gt;
&lt;Input inputSize=&quot;default&quot; placeholder=&quot;Médio&quot; /&gt;
&lt;Input inputSize=&quot;lg&quot; placeholder=&quot;Grande&quot; /&gt;
&#x60;&#x60;&#x60;

### Variante Ghost
&#x60;&#x60;&#x60;tsx
&lt;Input variant=&quot;ghost&quot; placeholder=&quot;Discreto&quot; /&gt;
&#x60;&#x60;&#x60;

## Features
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Acessibilidade**: 
  - Rótulos ARIA automáticos
  - Foco gerenciado
  - Leitor de tela compatível
- **Integração**:
  - Funciona com formulários React Hook Form
  - Compatível com validação Zod

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
