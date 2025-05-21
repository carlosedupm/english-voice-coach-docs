---
title: "ADR-002: Integração Design Tokens com Shadcn"
description: "Padronização do sistema de estilos"
category: frontend
status: implemented
authors:
  - name: Equipe de Design
    role: Design System
  - name: Equipe Frontend
    role: Implementação
---

<!-- TEMPLATE: adr-template-v2.md -->

# ADR-002: Integração Design Tokens com Shadcn

## Descrição
Este documento descreve a decisão arquitetural para integração entre nosso sistema de Design Tokens e a biblioteca Shadcn/ui, garantindo consistência visual e flexibilidade para temas dinâmicos.

## Status
✅ Implementado  
⬜ Obsoleto

## Autores
- Equipe de Design (Responsável)
- Equipe de Frontend

## Contexto
Necessidade de integrar:
1. Sistema de Design Tokens customizado
2. Biblioteca Shadcn/ui existente
3. Requisitos de temas dinâmicos

## Decisão
Manter os dois sistemas com responsabilidades distintas:
- **Shadcn**: Estilização base de componentes
- **Design Tokens**: Lógica de aplicação e valores dinâmicos

## Alternativas Consideradas
1. **Usar apenas Shadcn**
   - Prós: Simplicidade
   - Contras: Limitação em customização

2. **Substituir Shadcn por Design Tokens**
   - Prós: Controle total
   - Contras: Retrabalho significativo

## Impactos

## Exemplos

```tsx
// Exemplo de uso combinado
<Button 
  className="bg-primary text-primary-foreground"
  style={{ 
    margin: spacing[4],
    borderRadius: radius.lg
  }}
>
  Botão customizado
</Button>
```

## Uso

1. **Componentes Shadcn**: Use as classes padrão para estilos base
2. **Design Tokens**: Aplique diretamente via style para customizações
3. **Temas**: Configure no ThemeProvider da aplicação

- ✅ Flexibilidade para casos customizados
- ✅ Manutenção simplificada
- ⚠️ Curva de aprendizado inicial

## Exemplo de Uso
```tsx
// Usando Shadcn para estilos base
<Button className="bg-primary text-primary-foreground">

// Usando Design Tokens para lógica  
<div style={{ padding: spacing[4] }}>
```

## Temas Customizados
O sistema permite sobrescrever tokens para criar temas personalizados:

```tsx
// Criando um tema customizado
const customTheme = theme.custom({
  primary: {
    500: '#FF5722' // laranja
  },
  neutral: {
    100: '#F5F5F5'
  }
});

// Aplicando o tema
<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

### Regras:
1. Somente cores podem ser sobrescritas
2. A estrutura de tokens deve ser mantida
3. Valores não especificados usam o padrão light

## Integração com IA
O sistema de Design Tokens foi otimizado para trabalhar com ferramentas de IA através de:
- Padronização semântica dos nomes de tokens
- Documentação estruturada para geração automática de temas
- Suporte a plugins de design assistido por IA

## Registro de Mudanças
| Data       | Versão | Alteração               |
|------------|--------|-------------------------|
| 2025-05-15 | 1.0    | Decisão inicial         |
| 2025-05-20 | 1.1    | Adequação ao padrão ADR |
