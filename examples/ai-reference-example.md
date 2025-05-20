# Exemplo de Referência para IA

## Documento Base
`v1_ContextGeneratorPrompt.md`  
**Última Atualização**: 2025-05-20T07:10:00Z  
**Versão do Schema**: 2.0

## Trecho Relevante
```markdown
## 3. FLUXOS PRINCIPAIS
### Fluxo de Conversação
1. Usuário inicia gravação (estado: recording)
2. Sistema captura áudio via Web Speech API
3. Áudio é enviado para OpenAI Whisper (estado: transcribing)
4. Usuário confirma texto transcrito (estado: confirming)
```

## Alinhamento Técnico
| Requisito | Correspondência | Status |
|-----------|-----------------|--------|
| RF01: Captura de voz | Web Speech API implementada | ✅ Validado |
| RF03: Pontuação pronúncia | Endpoint /api/analysis criado | ⚠️ Em teste |

## Checklist
- [x] Versões de tecnologias validadas (Next.js 15.3.2)
- [x] Estrutura de endpoints verificada (/api/recording)
- [ ] Métricas de qualidade conferidas (em andamento)

## Solução Proposta
```typescript
// Endpoint para análise de pronúncia
app.post('/api/analysis', async (req, res) => {
  const { audio, language } = req.body;
  // Implementação alinhada com RF03
});
```

## Referência Cruzada
- Seção: #3.1
- Issue Relacionada: #123
- Arquivos Impactados: 
  - `pages/api/analysis.ts`
  - `components/VoiceRecorder.tsx`
