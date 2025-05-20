---
title: PronunciationFeedback
description: Componente que fornece feedback de pronúncia comparando fala do usuário com texto alvo usando Whisper API
category: components
---

# PronunciationFeedback

```tsx
import { PronunciationFeedback } from '@/components/PronunciationFeedback';

function Example() {
  return (
    <PronunciationFeedback 
      targetText="Hello world" 
    />
  );
}
```

## Features

- **Type**: Functional Component
- **Variants**: N/A
- **Props**:
  ```ts
  interface PronunciationFeedbackProps {
    /** Texto alvo para comparação de pronúncia */
    targetText: string;
  }
  ```

## Usage

```tsx
function PracticePage() {
  const phrases = ["Good morning", "How are you?"];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  return (
    <div>
      <PronunciationFeedback 
        targetText={phrases[currentPhrase]}
      />
      <button onClick={() => setCurrentPhrase((i) => (i + 1) % phrases.length)}>
        Next Phrase
      </button>
    </div>
  );
}
```

## Examples

### Uso Básico
```tsx
<PronunciationFeedback targetText="The quick brown fox" />
```

### Com Controle de Frases
```tsx
const phrases = ["I love programming", "React is awesome"];
const [index, setIndex] = useState(0);

<PronunciationFeedback 
  targetText={phrases[index]}
/>
<button onClick={() => setIndex(i => (i + 1) % phrases.length)}>
  Next
</button>
```

## Implementation Details

- Usa MediaRecorder API para capturar áudio
- Integra com Whisper API via endpoint `/api/pronunciation/analyze`
- Implementa retry automático para falhas de rede
- Inclui tratamento de erros detalhado
- Fornece feedback visual durante gravação

## Error Handling

O componente trata os seguintes cenários de erro:
- Falha de conexão com backend
- Timeout de requisição
- Acesso negado ao microfone
- Erros na análise de pronúncia

## Analytics

Eventos registrados:
- `pronunciation_analysis_started`
- `pronunciation_analysis_success`
- `pronunciation_analysis_failed`
