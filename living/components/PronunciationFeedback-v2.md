<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current">PronunciationFeedback v2</span>
</nav>

<article class="documentation-content">
  <h1>PronunciationFeedback v2</h1>
  
  <p class="description">Componente atualizado para feedback de pronúncia com nova API simplificada</p>

  
# PronunciationFeedback v2

## Visão Geral
Componente atualizado para fornecer feedback de pronúncia com nova API simplificada e melhor desempenho.

## Comparação com versão anterior
- API mais simples e intuitiva
- Melhor desempenho com menos dependências
- Suporte a feedback em tempo real

## Exemplo de uso
&#x60;&#x60;&#x60;tsx
import { PronunciationFeedback } from &#x27;@/components/PronunciationFeedback&#x27;;

function Example() {
  return (
    &lt;PronunciationFeedback 
      targetText=&quot;Hello world&quot; 
    /&gt;
  );
}
&#x60;&#x60;&#x60;

## Roadmap
- [ ] Suporte a múltiplos idiomas
- [ ] Análise de entonação
- [ ] Integração com modelo local

## Histórico de versões
- v1.0.0 (20/05/2023): Versão inicial
- v2.0.0 (20/05/2025): Nova API simplificada

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
