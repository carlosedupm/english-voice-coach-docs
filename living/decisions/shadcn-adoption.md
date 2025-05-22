---
title: "ADR-003: Adoção do ShadCN UI"
description: "Padronização de componentes UI"
category: frontend
status: implemented
authors:
  - name: Equipe Frontend
    role: Implementação
  - name: Equipe UX
    role: Design
---

<!-- TEMPLATE: adr-template-v2.md -->

# ADR-003: Adoção do ShadCN UI

## Descrição
Este documento formaliza a decisão de adoção da biblioteca ShadCN UI como base para nossos componentes, garantindo consistência visual, acessibilidade e velocidade de desenvolvimento.

## Status
✅ Implementado  
⬜ Obsoleto

## Autores
- Equipe de Frontend (Responsável)
- Equipe de UX

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

## Alternativas Consideradas
1. **Manter componentes customizados**
   - Prós: Controle total
   - Contras: Alto custo de manutenção

2. **Usar outra biblioteca (MUI, Chakra)**
   - Prós: Comunidades grandes
   - Contras: Menos flexibilidade

## Impactos
- ✅ Redução de código customizado
- ✅ Documentação automática
- ⚠️ Curva de aprendizado inicial

## Exemplos
```tsx
// Exemplo básico de uso
<Button variant="outline" size="sm">
  Botão secundário
</Button>

// Exemplo com customização
<Button 
  className="bg-brand-500 hover:bg-brand-600"
  onClick={handleClick}
>
  Ação principal
</Button>
```

## Uso
1. Instalação via `npx shadcn-ui@latest add button`
2. Importação de componentes: `import { Button } from "@/components/ui/button"`
3. Customização via:
   - Variants pré-definidas (primary, outline, etc)
   - Classes CSS com `cn()` helper
   - Sobrescrita de tokens

Documentação completa disponível em: `/docs/living/components`

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

## Integração com IA
A adoção do ShadCN permite:
- Geração automática de componentes via IA
- Documentação assistida para padrões de uso
- Plugins para Figma/Storybook com suporte a IA
- Compatibilidade com ferramentas de acessibilidade automatizada

## Registro de Mudanças
| Data       | Versão | Alteração               |
|------------|--------|-------------------------|
| 2025-05-17 | 1.0    | Decisão inicial         |
| 2025-05-20 | 1.1    | Adequação ao padrão ADR |
