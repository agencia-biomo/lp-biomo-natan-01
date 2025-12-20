# Arquitetura - LP-01 Biomo

## Stack Tecnológica

| Tecnologia | Versão | Função |
|------------|--------|--------|
| HTML5 | - | Estrutura semântica |
| CSS3 | - | Estilização com variáveis CSS |
| JavaScript ES6+ | - | Interatividade e DOM |
| Three.js | CDN | WebGL e shaders animados |
| Firebase Hosting | - | Deploy e hospedagem |

## Estrutura de Pastas

```
lp-biomo-natan-01/
├── public/                     # Arquivos de produção
│   ├── index.html             # Landing page principal (~1650 linhas)
│   ├── privacidade.html       # Política de privacidade
│   ├── termos.html            # Termos de uso
│   ├── css/
│   │   └── styles.css         # Estilos globais (~1600 linhas)
│   ├── js/
│   │   ├── shaders.js         # WebGL shaders Three.js
│   │   └── quote-modal.js     # Modal de orçamento (5 passos)
│   └── assets/
│       ├── logo-biomo.svg     # Logo principal
│       └── logo-biomo-mini.svg # Logo header
├── docs/                       # Documentação
│   ├── REDESIGN.md            # Proposta de redesign
│   ├── SHADERS.md             # Documentação técnica shaders
│   └── shader-demo.html       # Demo interativa
├── firebase.json              # Config Firebase Hosting
├── .firebaserc                # Projeto Firebase
└── README.md                  # Documentação principal
```

## Padrões de Código

### HTML
- Estrutura semântica com `<section>`, `<article>`, `<nav>`
- Atributos `aria-*` para acessibilidade
- IDs para navegação interna (`#servicos`, `#contato`)
- CSS crítico inline no `<head>` para performance

### CSS
- Variáveis CSS em `:root` para cores e tipografia
- Mobile-first com media queries `min-width`
- BEM-like naming: `.section-header`, `.service-card`
- Transições suaves em hover states (0.3s)

### JavaScript
- IIFE para encapsulamento (`(function() { ... })()`)
- Event delegation quando possível
- `requestAnimationFrame` para animações
- Visibility API para pausar shaders quando tab inativa

## Decisões Arquiteturais

### Por que HTML/CSS/JS puro?
1. **Performance** - Sem overhead de frameworks
2. **Simplicidade** - Fácil manutenção
3. **Tamanho** - Bundle final < 400KB
4. **SEO** - Conteúdo renderizado no servidor

### Por que Three.js para shaders?
1. **Compatibilidade** - WebGL cross-browser
2. **API simples** - ShaderMaterial abstraído
3. **Performance** - GPU-accelerated
4. **CDN** - Sem necessidade de build

### Por que Firebase Hosting?
1. **SSL grátis** - HTTPS automático
2. **CDN global** - Baixa latência
3. **Simples** - Deploy com 1 comando
4. **Integração** - Mesmo ecossistema LP-02

## Fluxo de Dados

```
Usuário → index.html → CSS (variáveis) → JS (interações)
                    ↓
              Three.js (shaders) → WebGL Canvas
                    ↓
              quote-modal.js → LocalStorage → WhatsApp
```

## Performance Targets

| Métrica | Target | Atual |
|---------|--------|-------|
| LCP | < 2.5s | ~1.8s |
| FID | < 100ms | ~50ms |
| CLS | < 0.1 | ~0.05 |
| Bundle | < 500KB | ~385KB |
