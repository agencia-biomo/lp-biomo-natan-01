# Deploy - LP-01 Biomo

## Firebase Hosting

### Projeto
- **ID:** `lp-biomo-natan-01`
- **URL:** https://lp-biomo-natan-01.web.app
- **Console:** https://console.firebase.google.com/project/lp-biomo-natan-01

### Configuração

**firebase.json**
```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|svg|png|jpg|jpeg|gif|ico|woff|woff2)",
        "headers": [
          { "key": "Cache-Control", "value": "max-age=31536000" }
        ]
      },
      {
        "source": "index.html",
        "headers": [
          { "key": "Cache-Control", "value": "no-cache" }
        ]
      }
    ]
  }
}
```

**.firebaserc**
```json
{
  "projects": {
    "default": "lp-biomo-natan-01"
  }
}
```

---

## Comandos de Deploy

### Deploy Completo
```bash
cd /mnt/c/Users/Natan/lp-biomo-natan-01
firebase deploy --only hosting
```

### Deploy via Windows (WSL)
```bash
cmd.exe /c "firebase deploy --only hosting --project lp-biomo-natan-01"
```

### Preview (antes de produção)
```bash
firebase hosting:channel:deploy preview
```

---

## Estrutura de Arquivos para Deploy

```
public/
├── index.html          # Página principal
├── privacidade.html    # Política de privacidade
├── termos.html         # Termos de uso
├── css/
│   └── styles.css      # Estilos globais
├── js/
│   ├── shaders.js      # WebGL shaders
│   └── quote-modal.js  # Modal de orçamento
└── assets/
    ├── logo-biomo.svg
    └── logo-biomo-mini.svg
```

---

## Cache Strategy

| Tipo de Arquivo | Cache-Control | Motivo |
|-----------------|---------------|--------|
| JS, CSS, SVG, fontes | 1 ano (31536000s) | Conteúdo estático, usa hash se mudar |
| index.html | no-cache | Sempre atualizado |
| Imagens | 1 ano | Raramente mudam |

---

## Pré-requisitos

### Ferramentas
- Node.js 18+ (para Firebase CLI)
- Firebase CLI: `npm install -g firebase-tools`
- Login: `firebase login`

### Verificar Login
```bash
firebase login:list
```

### Verificar Projeto
```bash
firebase projects:list
```

---

## Troubleshooting

### Erro: "Permission denied"
```bash
firebase login --reauth
```

### Erro: "Project not found"
```bash
firebase use lp-biomo-natan-01
```

### Cache não atualiza
1. Limpar cache do navegador
2. Usar Ctrl+Shift+R
3. Verificar se index.html tem `no-cache`

### Deploy demora muito
1. Verificar tamanho dos arquivos
2. Remover arquivos desnecessários
3. Verificar `.gitignore` e `firebase.json` ignore

---

## Checklist Pré-Deploy

- [ ] Testar localmente (`npx serve public`)
- [ ] Verificar console sem erros
- [ ] Testar em mobile (DevTools)
- [ ] Verificar links internos
- [ ] Testar modal de orçamento
- [ ] Verificar shaders carregando
- [ ] Testar WhatsApp popup

---

## Rollback

### Ver releases anteriores
```bash
firebase hosting:releases:list
```

### Rollback para versão anterior
```bash
firebase hosting:rollback
```

---

## Monitoramento

### Firebase Hosting Analytics
- Requests por dia
- Bandwidth usado
- Erros 404

### Google Analytics (se configurado)
- Pageviews
- Tempo na página
- Taxa de conversão

---

## Performance

### Lighthouse Targets

| Métrica | Target | Peso |
|---------|--------|------|
| Performance | > 90 | Alto |
| Accessibility | > 90 | Médio |
| Best Practices | > 90 | Médio |
| SEO | > 90 | Médio |

### Otimizações Aplicadas
1. CSS crítico inline no `<head>`
2. JavaScript defer para shaders
3. Imagens SVG (vetorial)
4. Fonts com `display: swap`
5. Cache de 1 ano para assets
