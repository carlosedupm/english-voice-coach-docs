---
title: "Template de Componente"
description: "Modelo para documentação de componentes seguindo regras .cline"
category: templates
---

# Template de Componente  
*(v2.0 - Integrado com .cline e AI)*  

`<!-- AI-TEMPLATE:component -->`  

---

## **1. METADADOS & AI INTEGRATION**  
```json
{
  "component": "NomeDoComponente",
  "type": "Atom/Molecule/Organism",
  "status": "draft|stable|deprecated",
  "storybook": "url",
  "ai_usage": {
    "generation": "Componentes baseados neste template",
    "validation": ["props", "a11y", "types"],
    "rules": "../.cline/rules/component-rules.cl"
  }
}
```

---

## **2. PROPS (.cline VALIDATED)**  
```typescript
interface Props {
  /**
   * @rule required
   * @description Texto principal
   * @example "Botão Principal"
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
   * @example "Botão de confirmação"
   */
  ariaLabel?: string;
}
```

---

## **3. COMPORTAMENTO & VALIDAÇÃO**  
### Diagrama de Estados  
```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading: onFetch
    Loading --> Error: fetchFailed
    Loading --> Success: fetchComplete
```

### Regras .cline Aplicáveis  
```clinerules
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
```

### Checklist de Validação  
- [x] Props documentadas com exemplos  
- [x] Tipos TypeScript definidos  
- [ ] Testes de acessibilidade (WCAG AA)  
- [ ] Cobertura de testes > 80%  

---

## **4. USAGE & EXAMPLES**  
### Uso Básico (.cline validated)  
```tsx
import { NomeDoComponente } from "@/components/ui/nome-do-componente"

function Example() {
  return (
    <NomeDoComponente 
      title="Confirmar"
      disabled={false}
      ariaLabel="Botão de confirmação"
    />
  )
}
```

### Casos Complexos  
```tsx
// Estado de loading com tratamento de erro
<NomeDoComponente 
  title={isLoading ? "Processando..." : "Enviar"}
  disabled={isLoading || hasError}
  ariaLabel={hasError ? "Erro ao processar" : "Botão de envio"}
/>
```

### Testes Recomendados  
```typescript
it('should render with default props', () => {
  render(<NomeDoComponente title="Test" />)
  expect(screen.getByText('Test')).toBeInTheDocument()
})
```

---

**CONFORMIDADE**  
```json
{
  "version": "2.0",
  "cline_compatible": true,
  "required_sections": ["purpose", "examples", "usage"],
  "validation": {
    "last_run": "2025-05-18T02:09:00Z",
    "passed": true,
    "errors": []
  }
}
