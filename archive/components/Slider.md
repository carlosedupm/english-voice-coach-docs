---
title: Slider
description: Componente deslizante para seleção de valores
category: components
---

> Documento Base: `v1_ContextGeneratorPrompt.md`  
> **Última Atualização**: 20/05/2025, 18:35 (UTC)

# Slider

## Purpose
Componente para seleção de valores em um intervalo com:
- Controle preciso via mouse/toque
- Feedback visual imediato
- Acessibilidade integrada

## AI Integration
Este componente utiliza:

## Checklist
- [x] Documentação base completa
- [x] Exemplos de uso
- [x] Referência ao documento base
- [x] Timestamp de atualização
- [x] Seções obrigatórias
- [ ] Testes de acessibilidade (pendente)

- IA para ajuste automático de sensibilidade baseado no dispositivo
- Detecção de padrões de uso para otimizar experiência
- Análise de contraste para garantir visibilidade

## Props
```ts
interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Variante do slider */
  variant?: "default" | "range"
  /** Tamanho do componente */
  sliderSize?: "sm" | "md" | "lg"
  /** Mostrar valor atual */
  showValue?: boolean
  /** Valor controlado */
  value?: number
}
```

## Usage
```tsx
import { Slider } from "@/components/ui/slider"

function VolumeControl() {
  const [volume, setVolume] = useState(50)
  
  return (
    <Slider
      value={volume}
      onChange={(val) => setVolume(val)}
      showValue
    />
  )
}
```

## Examples

### Controle Básico
```tsx
<Slider />
```

### Controle de Volume
```tsx
const [volume, setVolume] = useState(30)
<Slider 
  value={volume}
  onChange={setVolume}
  showValue
/>
```

### Faixa de Valores
```tsx
<Slider variant="range" />
```

## Features
- **Acessibilidade**:
  - Compatível com ARIA
  - Navegação por teclado
  - Rótulos para leitores de tela
- **Customização**:
  - 3 tamanhos pré-definidos
  - 2 variantes visuais
  - Estilização via CSS
- **Integração**:
  - Funciona com React Hook Form
  - Suporte a validação

## Testing
```tsx
it('updates value when dragged', () => {
  const onChange = jest.fn()
  render(<Slider onChange={onChange} />)
  
  fireEvent.mouseDown(screen.getByRole('slider'), { clientX: 0 })
  fireEvent.mouseMove(document, { clientX: 100 })
  
  expect(onChange).toHaveBeenCalled()
})
