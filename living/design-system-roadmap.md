# Roadmap do Design System

## 1. Extensão para Outros Componentes
- [x] Input: Integrar tokens de tipografia e espaçamento (concluído em 17/05/2025)
- [x] Slider: Adicionar variações de cor baseadas nos tokens (concluído em 17/05/2025)
- [x] Card: Criar padrões de padding e shadow (concluído em 17/05/2025)

## 2. Variações de Temas (em andamento)
- [x] Dark mode: Mapear tokens para versão escura (concluído em 17/05/2025)
- [x] High contrast: Criar paleta acessível (concluído em 17/05/2025)
- [x] Temas customizados: Sistema de sobrescrita de tokens (concluído em 17/05/2025)

## 3. Testes de Consistência Visual
- [x] Configurar Chromatic para visual testing (concluído em 17/05/2025)  
  - Adicionado script `chromatic` no package.json  
  - Configuração básica pronta para receber o project token
- [x] Criar testes de snapshot para componentes (concluído em 17/05/2025)
- [x] Implementar checks de contraste automáticos (concluído em 17/05/2025)
  - Integrado com Storybook usando addon-a11y
  - Configuração de thresholds WCAG AA/AAA

## Cronograma Atualizado
1. Fase 1 (concluída): Componentes base
2. Fase 2 (concluída): Temas  
3. Fase 3 (concluída): Testes automatizados

## Dependências
- Storybook para documentação
- Jest + Testing Library para testes
- Chromatic para visual regression
