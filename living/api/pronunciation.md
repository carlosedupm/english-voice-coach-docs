---
title: API de Análise de Pronúncia
description: Endpoint para análise de pronúncia comparando áudio com texto alvo
category: api
---

# POST /api/pronunciation/analyze

## Request
```typescript
interface PronunciationAnalysisRequest {
  audio: Blob;  // Arquivo de áudio em formato WAV
  targetText: string; // Texto alvo para comparação
}
```

## Response
```typescript
interface PronunciationAnalysisResponse {
  pronunciation: {
    feedback: string; // Feedback textual sobre a pronúncia
    score: number; // Pontuação de 0-100
  };
  grammar: {
    correct: boolean;
    feedback: string;
  };
  transcription: string; // Texto transcrito do áudio
  targetText: string; // Texto alvo original
}
```

## Exemplo de Uso Completo
```javascript
const formData = new FormData();
formData.append('audio', audioBlob);
formData.append('targetText', 'Hello world');

try {
  const response = await fetch('/api/pronunciation/analyze', {
    method: 'POST',
    body: formData
  });

  if (!response.ok) throw new Error('Erro na análise');

  const result = await response.json();
  
  console.log('Feedback de pronúncia:', result.pronunciation.feedback);
  console.log('Feedback gramatical:', result.grammar.feedback);
  console.log('Transcrição:', result.transcription);
  
} catch (error) {
  console.error('Erro:', error);
}
```

## Códigos de Status
- 200: Análise bem sucedida
- 400: Dados inválidos (incluindo tempo de gravação fora dos limites 5-30s)
- 413: Áudio muito longo (>30s)
- 500: Erro no servidor

## Observações
- Otimizado para gravações entre 5-30 segundos
- Recomendado 10-15s para melhor análise
