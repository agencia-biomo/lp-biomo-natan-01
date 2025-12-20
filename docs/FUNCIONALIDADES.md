# Funcionalidades - LP-01 Biomo

## 1. Modal de Orçamento (Quote Modal)

### Visão Geral
Sistema de orçamento em 5 passos com cálculo dinâmico de preços.

### Arquivo
`public/js/quote-modal.js` (~654 linhas)

### Estrutura dos Passos

```
Passo 1: Escolha do Plano
├── Landing Page (R$ 993)
├── Site Institucional (R$ 3.491)
└── Site Enterprise + Intranet (R$ 5.994)

Passo 2: Personalização (tabs)
├── Conteúdo
│   ├── Páginas extras (R$ 293/un)
│   ├── Copywriting (R$ 114/un)
│   └── Imagens Premium (R$ 143/un)
└── Módulos
    ├── Blog (R$ 491)
    ├── Portfólio (R$ 594)
    ├── Equipe (R$ 289)
    ├── Depoimentos (R$ 294)
    ├── Catálogo (R$ 943)
    ├── Calculadora (R$ 891)
    ├── Agendamento (R$ 683)
    └── Multilíngue (R$ 991)

Passo 3: Marketing & Backend (tabs)
├── Visibilidade
│   ├── SEO Avançado (R$ 1.483)
│   └── Rastreamento (R$ 684)
├── Automação
│   ├── CRM (R$ 583)
│   ├── Chatbot (R$ 481)
│   └── Agent IA WhatsApp (consultar)
└── Gestão
    ├── Backend Padrão (R$ 793)
    └── Backend Custom (mín. R$ 1.491)

Passo 4: Hospedagem & Manutenção
├── Essencial (R$ 53/mês)
├── Performance (R$ 143/mês)
└── Manutenção 2h (R$ 241/mês)

Passo 5: Finalizar
├── Resumo do orçamento
├── Formulário (nome, email, telefone, mensagem)
└── Enviar pelo WhatsApp
```

### Features Técnicas

```javascript
// LocalStorage - salva progresso por 24h
const STORAGE_KEY = "biomo_quote_draft";
const STORAGE_EXPIRY = 24 * 60 * 60 * 1000;

// Cálculo dinâmico
function calculatePrice() {
  let setup = PLANS[selectedPlan].base;
  let monthly = 0;
  // ... soma addons e recurring
  return { setup, monthly };
}

// API pública
window.openQuoteModal = openQuoteModal;
window.closeQuoteModal = closeQuoteModal;
```

---

## 2. WebGL Shaders

### Visão Geral
Background animado com halos roxos usando Three.js e GLSL.

### Arquivo
`public/js/shaders.js` (~198 linhas)

### Configuração

```javascript
// Uniforms
uniforms = {
  time: { type: "f", value: 1.0 },
  resolution: { type: "v2", value: new THREE.Vector2() },
  scrollOffset: { type: "f", value: 0.0 }  // Parallax
};

// Cores no fragment shader
color.r += intensity * 0.659;  // #a800d2 ratio
color.g += intensity * 0.0;
color.b += intensity * 0.824;

// Velocidade variável por tamanho
float speed = 0.015 / (1.0 + fi * 0.25);
```

### Otimizações

```javascript
// Limita pixel ratio para performance
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Visibility API - pausa quando aba inativa
document.addEventListener('visibilitychange', function() {
  if (document.hidden) stop();
  else resume();
});

// Scroll handler com passive
window.addEventListener('scroll', onScroll, { passive: true });
```

---

## 3. WhatsApp Popup

### Visão Geral
Balão flutuante que aparece automaticamente após triggers.

### Triggers

| Trigger | Valor | Descrição |
|---------|-------|-----------|
| Scroll | 30% | Ao rolar 30% da página |
| Tempo | 15s | Após 15 segundos na página |
| Hover | - | Ao passar mouse no botão |

### Estados

```javascript
// sessionStorage para controle por sessão
const key = "biomo_whatsapp_popup_closed";

// Evita reabrir se fechado
if (sessionStorage.getItem(key)) return;

// Marca como fechado ao clicar X
sessionStorage.setItem(key, "true");
```

### Link WhatsApp

```javascript
const phone = "5547996067992";
const message = "Olá! Vim pelo site da Biomo...";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
```

---

## 4. Vídeos Vimeo Embeddados

### Configuração

```html
<div class="video-wrapper">
  <iframe
    src="https://player.vimeo.com/video/ID?title=0&byline=0&portrait=0"
    allow="fullscreen; picture-in-picture"
    title="Nome do Cliente"
  />
</div>
```

### Vídeos Atuais

| Cliente | Vimeo ID | Formato |
|---------|----------|---------|
| VM Eventos | 1126950771 | Vertical 9:16 |
| Med Menosso | 1128324994 | Vertical 9:16 |
| Eliore Studio | 1127665257 | Vertical 9:16 |

### CSS do Container

```css
.video-wrapper {
  position: relative;
  padding-top: 176.67%;  /* 9:16 aspect ratio */
}

.video-wrapper iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}
```

---

## 5. FAQ Accordion

### Comportamento

```javascript
// Toggle ao clicar
faqItem.classList.toggle('active');

// Fechar outros
document.querySelectorAll('.faq-item.active').forEach(item => {
  if (item !== faqItem) item.classList.remove('active');
});
```

### CSS

```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.faq-item.active .faq-answer {
  max-height: 300px;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}
```

---

## 6. Scroll Animations

### Intersection Observer

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### CSS

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 7. Mobile Menu

### Toggle

```javascript
function openMobileMenu() {
  document.querySelector('.mobile-menu').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  document.querySelector('.mobile-menu').classList.remove('active');
  document.body.style.overflow = '';
}
```

### Navegação

```html
<nav class="mobile-menu">
  <button class="mobile-menu-close" onclick="closeMobileMenu()">×</button>
  <a href="#servicos" onclick="closeMobileMenu()">Serviços</a>
  <a href="#resultados" onclick="closeMobileMenu()">Resultados</a>
  <a href="#contato" onclick="closeMobileMenu()">Contato</a>
  <button onclick="openQuoteModal(); closeMobileMenu();">Orçamento</button>
</nav>
```

---

## 8. Link Google Meu Negócio

### Implementação

```html
<!-- No badge -->
<a href="https://share.google/eCYIhrFlaLVZNJsSb"
   target="_blank"
   rel="noopener noreferrer"
   class="badge">
  <span>⭐</span>
  <span>5.0 Google Reviews</span>
</a>

<!-- Na seção de depoimentos -->
<p>
  Avaliações reais do Google -
  <a href="https://share.google/eCYIhrFlaLVZNJsSb">Nota 5.0 ★</a>
</p>
```
