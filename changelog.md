<nav class="breadcrumbs">
  <a href="/index.html">Home</a>
  <span class="separator">/</span>
  <span class="current"></span>
</nav>

<article class="documentation-content">
  <h1></h1>
  

  # Changelog

&lt;!-- AI-METADATA: {&quot;parser&quot;: &quot;auto-changelog&quot;, &quot;ai_format&quot;: &quot;v2&quot;} --&gt;

## [Unreleased]
### :robot: AI-Parsable Section
&#x60;&#x60;&#x60;json
{
  &quot;changes&quot;: [
    {
      &quot;type&quot;: &quot;feature&quot;,
      &quot;description&quot;: &quot;Adicionada análise gramatical via GPT-3.5-turbo&quot;,
      &quot;components&quot;: [&quot;PronunciationFeedback&quot;, &quot;analyze/route&quot;],
      &quot;dependencies&quot;: [&quot;openai&quot;]
    },
    {
      &quot;type&quot;: &quot;improvement&quot;,
      &quot;description&quot;: &quot;Sistema de fallback para análise gramatical&quot;,
      &quot;components&quot;: [&quot;analyze/route&quot;]
    },
    {
      &quot;type&quot;: &quot;feature&quot;,
      &quot;description&quot;: &quot;Feedback combinado de pronúncia e gramática&quot;,
      &quot;components&quot;: [&quot;PronunciationFeedback&quot;]
    },
    {
      &quot;type&quot;: &quot;improvement&quot;, 
      &quot;description&quot;: &quot;Tempo de gravação configurável (5-30s)&quot;,
      &quot;components&quot;: [&quot;PronunciationFeedback&quot;]
    },
    {
      &quot;type&quot;: &quot;feature&quot;,
      &quot;description&quot;: &quot;Suporte a internacionalização (i18n)&quot;,
      &quot;components&quot;: [&quot;Layout&quot;, &quot;SettingsSection&quot;],
      &quot;dependencies&quot;: [&quot;i18next&quot;, &quot;react-i18next&quot;]
    }
  ],
  &quot;last_updated&quot;: &quot;{{timestamp}}&quot;,
  &quot;schema_version&quot;: &quot;2.0&quot;
}
&#x60;&#x60;&#x60;

## Como Contribuir
1. Adicione mudanças na seção [Unreleased]
2. Use o formato JSON para novas entradas
3. Atualize a versão quando liberar

&lt;!-- AI-TEMPLATE:new-change
{
  &quot;type&quot;: &quot;feature|bugfix|refactor&quot;,
  &quot;ticket&quot;: &quot;ID-123&quot;,
  &quot;description&quot;: &quot;Descrição concisa&quot;,
  &quot;components&quot;: [&quot;component1&quot;, &quot;component2&quot;],
  &quot;dependencies&quot;: [],
  &quot;tests&quot;: []
}
--&gt;

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
