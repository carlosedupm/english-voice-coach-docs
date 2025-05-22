# Changelog

<!-- AI-METADATA: {"parser": "auto-changelog", "ai_format": "v2"} -->

## [Unreleased]
### :robot: AI-Parsable Section
```json
{
  "changes": [
    {
      "type": "feature",
      "description": "Adicionada análise gramatical via GPT-3.5-turbo",
      "components": ["PronunciationFeedback", "analyze/route"],
      "dependencies": ["openai"]
    },
    {
      "type": "improvement",
      "description": "Sistema de fallback para análise gramatical",
      "components": ["analyze/route"]
    },
    {
      "type": "feature",
      "description": "Feedback combinado de pronúncia e gramática",
      "components": ["PronunciationFeedback"]
    },
    {
      "type": "improvement", 
      "description": "Tempo de gravação configurável (5-30s)",
      "components": ["PronunciationFeedback"]
    }
  ],
  "last_updated": "{{timestamp}}",
  "schema_version": "2.0"
}
```

## Como Contribuir
1. Adicione mudanças na seção [Unreleased]
2. Use o formato JSON para novas entradas
3. Atualize a versão quando liberar

<!-- AI-TEMPLATE:new-change
{
  "type": "feature|bugfix|refactor",
  "ticket": "ID-123",
  "description": "Descrição concisa",
  "components": ["component1", "component2"],
  "dependencies": [],
  "tests": []
}
-->
