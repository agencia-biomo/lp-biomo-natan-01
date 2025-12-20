# Changelog - LP-01 Biomo

## [1.4.0] - 2024-12-19

### Adicionado
- Vídeos Vimeo embeddados (VM Eventos, Med Menosso, Eliore Studio)
- Link Google Meu Negócio nos badges e depoimentos
- Página de Privacidade (`privacidade.html`)
- Página de Termos de Uso (`termos.html`)
- Modal de orçamento completo (`quote-modal.js`)
  - 5 passos com wizard
  - Cálculo dinâmico de preços
  - Progresso salvo em LocalStorage
  - Envio via WhatsApp

### Modificado
- Estilos de vídeos para formato vertical 9:16
- CSS responsivo mobile-first para vídeos
- Grid de vídeos centralizado com max-width

---

## [1.3.0] - 2024-12-18

### Adicionado
- WhatsApp popup com balão de fala
- Triggers automáticos (scroll 30%, tempo 15s)
- Estado persistente em sessionStorage

### Modificado
- Cor da logo mini de azul para roxo (#a800d2)

---

## [1.2.0] - 2024-12-17

### Adicionado
- Logos SVG (principal e mini)
- Velocidade variável nos shaders (halos maiores = mais lentos)
- Stats animados na hero (+150, 98%, +5)
- Badges de certificação (Google Partner, Reviews)

### Modificado
- Ajustes de velocidade do shader para 25% do original
- Parallax no scroll dos shaders

---

## [1.1.0] - 2024-12-16

### Adicionado
- WebGL shaders com Three.js
- Background animado com halos roxos (#a800d2)
- Visibility API para pausar quando aba inativa
- Documentação técnica dos shaders

---

## [1.0.0] - 2024-12-15

### Adicionado
- Estrutura inicial da Landing Page
- HTML5 semântico com todas as seções
- CSS crítico inline para performance
- Estilos responsivos mobile-first
- Configuração Firebase Hosting
- Documentação README.md

### Seções Iniciais
- Header com navegação
- Hero section
- Serviços (6 cards)
- Diferenciais
- Depoimentos
- FAQ accordion
- Contato (form + info)
- Footer

---

## Formato do Changelog

### Tipos de Mudança
- **Adicionado** - Novas funcionalidades
- **Modificado** - Mudanças em funcionalidades existentes
- **Corrigido** - Correções de bugs
- **Removido** - Funcionalidades removidas
- **Depreciado** - Em vias de remoção
- **Segurança** - Correções de vulnerabilidades

### Versionamento
Seguimos [Semantic Versioning](https://semver.org/):
- **MAJOR** - Mudanças incompatíveis
- **MINOR** - Novas funcionalidades compatíveis
- **PATCH** - Correções de bugs
