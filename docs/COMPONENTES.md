# Componentes - LP-01 Biomo

## Visão Geral

A LP-01 usa componentes HTML/CSS/JS puros, organizados por seções.

---

## Seções da Landing Page

### 1. Header
**Arquivo:** `index.html` (linhas ~850-900)

```html
<header class="header">
  <a href="#" class="header-logo">...</a>
  <nav class="nav">...</nav>
  <button class="header-cta" onclick="openQuoteModal()">Orçamento</button>
</header>
```

**Funcionalidades:**
- Logo clicável (volta ao topo)
- Navegação desktop com links âncora
- Botão CTA que abre modal de orçamento
- Menu hamburguer mobile

---

### 2. Hero Section
**Arquivo:** `index.html` (linhas ~900-980)

```html
<section class="hero">
  <div class="hero-content">
    <h1>Transformamos ideias em resultados digitais</h1>
    <p>Descrição...</p>
    <div class="hero-ctas">...</div>
    <div class="social-proof">...</div>
  </div>
</section>
```

**Elementos:**
- Título principal (`<h1>`)
- Subtítulo descritivo
- 2 botões CTA (primário e secundário)
- Stats animados (+150, 98%, +5)
- Badges de certificação (Google Partner, 5.0 Reviews)

---

### 3. Shader Background
**Arquivo:** `js/shaders.js`

```javascript
window.BiomoShader = {
  stop: function() { ... },
  resume: function() { ... }
};
```

**Configuração:**
- Container: `#shader-bg`
- Cores: `#a800d2`, `#7b00a0`, `#c86bdb`
- Velocidade: `0.015` (base) - halos maiores = mais lentos
- Parallax: scroll offset aplicado ao UV

---

### 4. Serviços Grid
**Arquivo:** `index.html` (linhas ~1000-1100)

```html
<section class="services" id="servicos">
  <div class="services-grid">
    <article class="service-card">
      <div class="service-icon">📱</div>
      <h3>Landing Pages</h3>
      <p>Descrição...</p>
    </article>
    ...
  </div>
</section>
```

**Cards disponíveis:**
1. Landing Pages
2. Sites Institucionais
3. Google Ads
4. Meta Ads
5. SEO
6. Automação

---

### 5. Depoimentos
**Arquivo:** `index.html` (linhas ~1100-1150)

```html
<section class="testimonials" id="resultados">
  <div class="testimonials-slider">
    <div class="testimonial">
      <p class="testimonial-text">"Texto..."</p>
      <div class="testimonial-author">...</div>
    </div>
  </div>
</section>
```

**Dados dos depoimentos:**
- Nome do cliente
- Cargo/Empresa
- Avatar (iniciais ou imagem)
- Estrelas (5/5)

---

### 6. Vídeos de Prova Social
**Arquivo:** `index.html` (linhas ~1211-1269)

```html
<section class="video-proofs" id="videos">
  <div class="videos-grid">
    <div class="video-card">
      <div class="video-wrapper">
        <iframe src="https://player.vimeo.com/video/..." />
      </div>
      <div class="video-info">
        <h4>Nome do Cliente</h4>
        <p>Descrição</p>
      </div>
    </div>
  </div>
</section>
```

**Vídeos embeddados:**
1. VM Eventos - `vimeo.com/video/1126950771`
2. Med Menosso - `vimeo.com/video/1128324994`
3. Eliore Studio - `vimeo.com/video/1127665257`

**Formato:** Vertical 9:16 (mobile)

---

### 7. FAQ Accordion
**Arquivo:** `index.html` (linhas ~1270-1350)

```html
<section class="faq" id="faq">
  <div class="faq-list">
    <div class="faq-item">
      <button class="faq-question">Pergunta?</button>
      <div class="faq-answer"><p>Resposta...</p></div>
    </div>
  </div>
</section>
```

**Comportamento:**
- Click no botão toggle a resposta
- Apenas 1 resposta aberta por vez
- Ícone rotaciona 45° quando aberto

---

### 8. Contato Form
**Arquivo:** `index.html` (linhas ~1350-1450)

```html
<section class="contact" id="contato">
  <div class="contact-grid">
    <div class="contact-info">...</div>
    <form class="contact-form">
      <input name="name" required />
      <input name="email" type="email" required />
      <select name="service">...</select>
      <textarea name="message"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</section>
```

---

### 9. Quote Modal (5 passos)
**Arquivo:** `js/quote-modal.js`

```javascript
window.openQuoteModal = function() { ... };
window.closeQuoteModal = function() { ... };
```

**Passos:**
1. Escolha do Plano (Landing/Institucional/Premium)
2. Personalização - Conteúdo e Módulos
3. Marketing & Backend
4. Hospedagem & Manutenção
5. Formulário de Contato → WhatsApp

**Features:**
- Progresso salvo em LocalStorage (24h)
- Cálculo dinâmico de preços
- Envio formatado via WhatsApp

---

### 10. WhatsApp Popup
**Arquivo:** `index.html` (inline JS)

```javascript
// Triggers
- Scroll 30%
- Tempo 15s
- Hover no botão
```

**Estados:**
- Fechado por padrão
- Abre automaticamente (1x por sessão)
- Salva estado em sessionStorage

---

### 11. Footer
**Arquivo:** `index.html` (linhas ~1500-1600)

```html
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">Logo + descrição</div>
    <div class="footer-links">Links úteis</div>
    <div class="footer-contact">Contato</div>
    <div class="footer-social">Redes sociais</div>
  </div>
  <div class="footer-bottom">© 2024 Biomo</div>
</footer>
```

---

## CSS Classes Principais

| Classe | Uso |
|--------|-----|
| `.section-container` | Container max-width centralizado |
| `.section-header` | Título + subtítulo de seção |
| `.service-card` | Card de serviço |
| `.btn-primary` | Botão CTA principal |
| `.btn-secondary` | Botão CTA secundário |
| `.glass-card` | Card com glassmorphism |
