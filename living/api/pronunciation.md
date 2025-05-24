<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current">API de Análise de Pronúncia</span>
</nav>

<article class="documentation-content">
  <h1>API de Análise de Pronúncia</h1>
  
  <p class="description">Endpoint para análise de pronúncia comparando áudio com texto alvo</p>

  
# POST /api/pronunciation/analyze

## Request
&#x60;&#x60;&#x60;typescript
interface PronunciationAnalysisRequest {
  audio: Blob;  // Arquivo de áudio em formato WAV
  targetText: string; // Texto alvo para comparação
}
&#x60;&#x60;&#x60;

## Response
&#x60;&#x60;&#x60;typescript
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
&#x60;&#x60;&#x60;

## Exemplo de Uso Completo
&#x60;&#x60;&#x60;javascript
const formData = new FormData();
formData.append(&#x27;audio&#x27;, audioBlob);
formData.append(&#x27;targetText&#x27;, &#x27;Hello world&#x27;);

try {
  const response = await fetch(&#x27;/api/pronunciation/analyze&#x27;, {
    method: &#x27;POST&#x27;,
    body: formData
  });

  if (!response.ok) throw new Error(&#x27;Erro na análise&#x27;);

  const result = await response.json();
  
  console.log(&#x27;Feedback de pronúncia:&#x27;, result.pronunciation.feedback);
  console.log(&#x27;Feedback gramatical:&#x27;, result.grammar.feedback);
  console.log(&#x27;Transcrição:&#x27;, result.transcription);
  
} catch (error) {
  console.error(&#x27;Erro:&#x27;, error);
}
&#x60;&#x60;&#x60;

## Códigos de Status
- 200: Análise bem sucedida
- 400: Dados inválidos (incluindo tempo de gravação fora dos limites 5-30s)
- 413: Áudio muito longo (&gt;30s)
- 500: Erro no servidor

## Observações
- Otimizado para gravações entre 5-30 segundos
- Recomendado 10-15s para melhor análise

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
