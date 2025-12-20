# Sistema de Estilos - LP-01 Biomo

## Paleta de Cores

### Cores Principais

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Roxo Principal | `#a800d2` | 168, 0, 210 | CTAs, destaques, shaders |
| Roxo Escuro | `#7b00a0` | 123, 0, 160 | Gradientes, sombras |
| Roxo Claro | `#c86bdb` | 200, 107, 219 | Hover, accents |
| Preto | `#000000` | 0, 0, 0 | Background base |
| Branco | `#ffffff` | 255, 255, 255 | Textos principais |

### Variáveis CSS

```css
:root {
  /* Cores */
  --color-primary: #a800d2;
  --color-primary-dark: #7b00a0;
  --color-primary-light: #c86bdb;
  --color-bg: #000000;
  --color-text: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.6);

  /* Tipografia */
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Espaçamento */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 80px;

  /* Bordas */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
}
```

---

## Tipografia

### Fontes

- **Primária:** Inter (Google Fonts)
- **Fallback:** system-ui, -apple-system, sans-serif

### Escalas

| Elemento | Desktop | Mobile | Weight |
|----------|---------|--------|--------|
| H1 (Hero) | 4rem | 2.5rem | 300 |
| H2 (Seção) | 2.5rem | 1.75rem | 400 |
| H3 (Card) | 1.25rem | 1.125rem | 500 |
| Body | 1rem | 0.9375rem | 400 |
| Small | 0.875rem | 0.8125rem | 400 |
| Tiny | 0.75rem | 0.75rem | 400 |

### Line Heights

- Headings: `1.1` - `1.2`
- Body: `1.6` - `1.7`
- UI elements: `1.4`

---

## Breakpoints

```css
/* Mobile First */
/* Base: 0 - 639px */

@media (min-width: 640px) {
  /* sm: Tablet portrait */
}

@media (min-width: 768px) {
  /* md: Tablet landscape */
}

@media (min-width: 1024px) {
  /* lg: Desktop */
}

@media (min-width: 1280px) {
  /* xl: Large desktop */
}
```

### Valores Comuns

| Breakpoint | Min-width | Uso |
|------------|-----------|-----|
| Mobile | 0 | Layout single column |
| sm | 640px | Grid 2 colunas |
| md | 768px | Navegação desktop |
| lg | 1024px | Grid 3 colunas |
| xl | 1280px | Max-width container |

---

## Sombras e Efeitos

### Box Shadows

```css
/* Sutil */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Cards */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

/* Hover glow */
box-shadow: 0 8px 30px rgba(168, 0, 210, 0.4);

/* WhatsApp button */
box-shadow: 0 4px 20px rgba(22, 163, 74, 0.4);
```

### Gradientes

```css
/* Background radial */
background: radial-gradient(ellipse at center, #5a0073 0%, #1a0020 50%, #000000 100%);

/* Botão CTA */
background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));

/* Overlay */
background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
```

### Backdrop Blur

```css
/* Glass effect */
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
background: rgba(0, 0, 0, 0.6);
```

---

## Transições e Animações

### Transições Padrão

```css
/* Default */
transition: all 0.3s ease;

/* Hover buttons */
transition: transform 0.3s, box-shadow 0.3s;

/* Modal */
transition: opacity 0.3s, visibility 0.3s;
```

### Animações Keyframes

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Componentes de UI

### Botões

```css
/* Primary */
.btn-primary {
  padding: 14px 28px;
  background: linear-gradient(135deg, #7b00a0, #a800d2);
  border-radius: 50px;
  color: white;
  font-weight: 600;
}

/* Secondary */
.btn-secondary {
  padding: 14px 28px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
}
```

### Cards

```css
.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px;
}

.card:hover {
  border-color: rgba(168, 0, 210, 0.3);
  transform: translateY(-4px);
}
```

### Inputs

```css
input, textarea, select {
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
}

input:focus {
  border-color: var(--color-primary);
  outline: none;
}
```

---

## Responsividade Mobile-First

### Container

```css
.section-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 1024px) {
  .section-container {
    padding: 0 48px;
  }
}
```

### Grid Responsivo

```css
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```
