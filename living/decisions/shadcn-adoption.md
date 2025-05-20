# Adoção do ShadCN UI

## Status
Aprovado - 2025-05-17

## Contexto
Necessidade de padrão consistente para componentes UI que:
- Forneça acessibilidade out-of-the-box
- Permita customização via tokens
- Mantenha consistência visual
- Acelere desenvolvimento

## Decisão
Usar ShadCN como biblioteca base para:
- Componentes fundamentais (Button, Input, etc)
- Sistema de theming
- Padrões de acessibilidade
- Gerenciamento de variants

## Benefícios
- Redução de código customizado
- Documentação automática
- Fácil manutenção
- Comunidade ativa

## Implementação
1. Componentes devem seguir estrutura:
```tsx
import { Button } from "@/components/ui/button"
```

2. Customizações via `className` usando `cn()`:
```tsx
<Button className={cn("custom-class", variant && `variant-${variant}`)}>
```

3. Documentação em `/docs/living/components`

## Componentes Implementados
- Button (src/components/ui/button.tsx)
- Input (src/components/ui/input.tsx)
