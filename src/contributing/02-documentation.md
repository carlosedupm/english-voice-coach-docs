---
title: "Processo de Documentação"
description: "Guia para contribuir com a documentação do projeto"
date: "2025-05-15"
author: "Documentation Team"
status: "active"
---

## Fluxo de Trabalho (.cline Validated)

1. **Criação**:
   ```bash
   # Usar templates atualizados v2.0+
   cp docs/templates/component-template.md docs/living/components/NOVO-COMPONENTE.md
   ```

2. **Validação**:
   ```bash
   # Validação completa (markdown + .cline rules)
   python scripts/validate_docs.py --strict
   ```

3. **Integração com IA**:
   ```bash
   # Gera sugestões de melhoria
   python scripts/ai_doc_review.py --template=component
   ```

4. **Publicação**:
   - CI executa:
     ```yaml
     steps:
       - run: python scripts/validate_docs.py --ci
       - run: python scripts/generate_docs.py
       - uses: actions/upload-artifact@v3
     ```

## Estrutura de Diretórios

```
docs/
  src/                # Fontes Markdown
    features/         # Documentação de features
    architecture/     # Diagramas e decisões
  templates/          # Templates para docs
  dist/               # Docs gerados (automático)
```

## Convenções (.cline Rules)

### Obrigatórias
- Frontmatter completo:
  ```yaml
  ---
  title: "Título em PT-BR"
  description: "Descrição objetiva"
  category: "components|features|architecture"
  cline_rules: "../.cline/rules/doc-rules.cl"
  ---
  ```

- Seções requeridas:
  ```clinerules
  rule doc-sections
    required:
      - purpose
      - examples
      - usage
    recommended:
      - ai-integration
  ```

### Recomendadas
- Diagramas Mermaid para fluxos complexos
- Links para issues do GitHub (`Fix #123`)
- Exemplos de código testáveis

## Exemplo de Conformidade

1. Componentes:
   ```bash
   docs/living/components/Button.md  # Modelo v2.0
   ```

2. Projetos:
   ```bash
   docs/v1_ContextGeneratorPrompt.md  # Documento mestre
   ```

3. Validação:
   ```mermaid
   graph TD
     A[Escrever doc] --> B[Validar .cline]
     B --> C[Review de IA]
     C --> D[Publicar]
   ```
