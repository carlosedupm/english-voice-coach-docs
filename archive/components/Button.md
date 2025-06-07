<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current">Button</span>
</nav>

<article class="documentation-content">
  <h1>Button</h1>
  
  <p class="description">Componente de botão acessível com múltiplas variantes</p>

  
&gt; Documento Base: &#x60;v1_ContextGeneratorPrompt.md&#x60;  
&gt; **Última Atualização**: 20/05/2025, 18:30 (UTC)

# Button

## Purpose
Componente de botão reutilizável com:
- Acessibilidade integrada
- Múltiplas variantes visuais
- Suporte a customização via Tailwind CSS

## AI Integration
Este componente utiliza o sistema de design ShadCN que foi otimizado para:

## Checklist
- [x] Documentação base completa
- [x] Exemplos de uso
- [x] Referência ao documento base
- [x] Timestamp de atualização
- [x] Seções obrigatórias
- [ ] Testes de acessibilidade (pendente)

- Geração automática de variantes via IA
- Análise de contraste de cores para acessibilidade
- Sugestões de micro-interações baseadas em uso

## Usage
&#x60;&#x60;&#x60;tsx
import { Button } from &quot;@/components/ui/button&quot;

function Example() {
  return (
    &lt;Button variant=&quot;default&quot;&gt;
      Confirmar
    &lt;/Button&gt;
  )
}
&#x60;&#x60;&#x60;

## Examples

### Variantes Básicas
&#x60;&#x60;&#x60;tsx
&lt;Button variant=&quot;default&quot;&gt;Primário&lt;/Button&gt;
&lt;Button variant=&quot;destructive&quot;&gt;Excluir&lt;/Button&gt;
&lt;Button variant=&quot;outline&quot;&gt;Secundário&lt;/Button&gt;
&lt;Button variant=&quot;ghost&quot;&gt;Discreto&lt;/Button&gt;
&#x60;&#x60;&#x60;

### Customização Avançada
&#x60;&#x60;&#x60;tsx
&lt;Button 
  className=&quot;font-bold&quot;
  variant=&quot;destructive&quot;
&gt;
  Ação Importante
&lt;/Button&gt;
&#x60;&#x60;&#x60;

## Features
- **Variantes**: default, destructive, outline, ghost
- **Acessibilidade**: 
  - Foco visível
  - Suporte a teclado
  - ARIA attributes automáticos
- **Integração**:
  - Compatível com todos os componentes ShadCN
  - Themável via tailwind.config.js

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
