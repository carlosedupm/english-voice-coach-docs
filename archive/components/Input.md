---
title: Input
description: Componente de campo de entrada com validação integrada
category: components
---

# Input

## Purpose
Componente de entrada de texto com:
- Validação visual integrada
- Múltiplos tamanhos
- Suporte a acessibilidade

## AI Integration
Este componente utiliza:
- Análise de padrões de entrada via IA
- Detecção automática de tipos (email, telefone, etc)
- Sugestões de máscaras baseadas em contexto

## Props
```ts
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Variante visual */
  variant?: 'default' | 'ghost'
  /** Tamanho do componente */
  inputSize?: 'sm' | 'default' | 'lg'
  /** Estado de erro */
  hasError?: boolean
}
```

## Usage
```tsx
import { Input } from "@/components/ui/input"

function FormExample() {
  const [value, setValue] = useState('')
  
  return (
    <Input 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Digite algo..."
    />
  )
}
```

## Examples

### Validação Integrada
```tsx
<Input hasError={!isValid} placeholder="Email" />
```

### Tamanhos
```tsx
<Input inputSize="sm" placeholder="Pequeno" />
<Input inputSize="default" placeholder="Médio" />
<Input inputSize="lg" placeholder="Grande" />
```

### Variante Ghost
```tsx
<Input variant="ghost" placeholder="Discreto" />
```

## Features
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Acessibilidade**: 
  - Rótulos ARIA automáticos
  - Foco gerenciado
  - Leitor de tela compatível
- **Integração**:
  - Funciona com formulários React Hook Form
  - Compatível com validação Zod
