**ceial-learn-english v1.0.0**

***

# Ceial Scripts

Scripts para automação de documentação e validação de código.

## Instalação

```bash
pip install -e .
```

## Uso

Principais comandos:

- Gerar documentação:
  ```bash
  ceial-docs
  ```

- Validar documentação:
  ```bash
  ceial-validate
  ```

- Rodar backups:
  ```bash
  ceial-backup
  ```

## Testes

```bash
pytest scripts/test_*.py
```

### Testes específicos

- Parser de regras:
  ```bash
  python scripts/test_parser.py .cline/rules/dev/jsdoc-rules.cl
  ```

- Engine de regras:
  ```bash
  python scripts/test_engine.py .cline/rules/dev/jsdoc-rules.cl
  ```

- Validação de documentação:
  ```bash
  pytest scripts/test_rule_engine.py -v
  ```

## Estrutura

- `.cline/`: Configurações e regras
- `scripts/`: Código fonte
- `docs/`: Documentação gerada
