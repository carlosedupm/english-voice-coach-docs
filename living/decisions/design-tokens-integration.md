# Decisão: Integração Design Tokens com Shadcn

## Contexto
- Shadcn/ui fornece sistema base de estilos via variáveis CSS
- Design Tokens customizados estendem para casos específicos

## Decisão
Manter os dois sistemas com responsabilidades distintas:
- **Shadcn**: Estilização base de componentes
- **Design Tokens**: Lógica de aplicação e valores dinâmicos

## Exemplo de Uso
```tsx
// Usando Shadcn para estilos base
<Button className="bg-primary text-primary-foreground">

// Usando Design Tokens para lógica  
<div style={{ padding: spacing[4] }}>
```

## Vantagens
- Não quebra estilos existentes
- Flexibilidade para casos customizados
- Mais fácil manutenção

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
