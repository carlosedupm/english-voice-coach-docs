---
title: Button
description: Componente de botão acessível com múltiplas variantes
category: components
---

# Button

## Purpose
Componente de botão reutilizável com:
- Acessibilidade integrada
- Múltiplas variantes visuais
- Suporte a customização via Tailwind CSS

## AI Integration
Este componente utiliza o sistema de design ShadCN que foi otimizado para:
- Geração automática de variantes via IA
- Análise de contraste de cores para acessibilidade
- Sugestões de micro-interações baseadas em uso

## Usage
```tsx
import { Button } from "@/components/ui/button"

function Example() {
  return (
    <Button variant="default">
      Confirmar
    </Button>
  )
}
```

## Examples

### Variantes Básicas
```tsx
<Button variant="default">Primário</Button>
<Button variant="destructive">Excluir</Button>
<Button variant="outline">Secundário</Button>
<Button variant="ghost">Discreto</Button>
```

### Customização Avançada
```tsx
<Button 
  className="font-bold"
  variant="destructive"
>
  Ação Importante
</Button>
```

## Features
- **Variantes**: default, destructive, outline, ghost
- **Acessibilidade**: 
  - Foco visível
  - Suporte a teclado
  - ARIA attributes automáticos
- **Integração**:
  - Compatível com todos os componentes ShadCN
  - Themável via tailwind.config.js
