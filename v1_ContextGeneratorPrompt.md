---
title: "Documento de Contexto do Projeto: English Voice Coach"
description: "Documento base para geração de contexto em consultas com IA"
category: context
ai_usage: "Geração de prompts e contexto para desenvolvimento"
---

# **Documento de Contexto do Projeto: English Voice Coach**  
*(Para uso em consultas com IA, desenvolvimento e tomada de decisões)*  

## Descrição
Este documento serve como fonte de contexto para:
- Desenvolvimento de features
- Geração de prompts para IA
- Tomada de decisões técnicas

**Última Atualização**: 20/05/2025, 17:50 (UTC)

## Documento Base
`v1_ContextGeneratorPrompt.md`

## Trecho Relevante
[Inserir trecho relevante para a validação atual]

## Checklist
- [x] Verificar seções obrigatórias
- [x] Confirmar referência ao documento base  
- [x] Atualizar timestamp

## Exemplos
```markdown
# Exemplo de Uso para IA:
"Baseado no documento v1_ContextGeneratorPrompt.md, gere um prompt para..."
```

## Uso
1. Referencie este documento em consultas com IA
2. Atualize periodicamente conforme o projeto evolui
3. Utilize como base para decisões técnicas

## Integração com IA
Este documento é usado por:
- Sistemas de geração de prompts
- Modelos de contexto para desenvolvimento
- Ferramentas de documentação automática

---

# **1. Visão Geral**  
**Nome do Projeto**: English Voice Coach  
**Objetivo**:  
Desenvolver uma aplicação web interativa para prática de conversação em inglês, utilizando IA para fornecer feedback em tempo real sobre:  
- Pronúncia (via Whisper API)  
- Gramática (via GPT-3.5-turbo)  
- Naturalidade (expressões comuns de nativos americanos)  

**Configurações-chave**:
- Tempo de gravação ajustável (5-30 segundos)
- Feedback imediato após gravação
- Limites configuráveis por cenário de prática

**Tecnologias-chave**:
- Next.js para frontend
- OpenAI API para análise de áudio e texto
- Sistema de fallback para garantir disponibilidade
