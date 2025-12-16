# Proposta de Redesign - Biomo
## Landing Page Premium para Agência de Marketing Digital

---

## 1. Análise do Site Atual

### 1.1 Informações Coletadas

| Aspecto | Situação Atual |
|---------|----------------|
| **Nome** | Biomo - Agência de Marketing Digital |
| **Tecnologia** | SPA (Single Page Application) com JavaScript |
| **Serviços** | Criação de Sites, SEO, Tráfego Pago, Landing Pages, Google ADS, Meta ADS |
| **Diferencial** | Garantia Total (mencionado) |
| **Estrutura** | Site institucional multi-página |

### 1.2 Problemas Identificados

1. **SEO Comprometido**: Site 100% JavaScript sem SSR (Server-Side Rendering), dificultando indexação
2. **Acessibilidade**: Mensagem "You need to enable JavaScript" impede acesso sem JS
3. **Performance**: Carregamento dependente de JavaScript impacta Core Web Vitals
4. **Estrutura Multi-página**: Dispersa atenção do usuário e reduz conversões
5. **Falta de Hierarquia Visual Clara**: Conteúdo institucional extenso sem foco em conversão

---

## 2. Objetivos do Redesign

### 2.1 Objetivos Primários
- Converter site institucional em **Landing Page Premium** de alta conversão
- Melhorar **responsividade** e experiência mobile-first
- **Modernizar** identidade visual mantendo essência da marca
- **Otimizar** performance e SEO técnico
- **Simplificar** jornada do usuário até a conversão

### 2.2 Métricas de Sucesso
- Tempo de carregamento < 3 segundos
- Score Lighthouse > 90 em todas as métricas
- Taxa de conversão > 5%
- Bounce rate < 40%

---

## 3. Nova Arquitetura - Landing Page Premium

### 3.1 Estrutura de Seções (Single Page)

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│  Logo Biomo │ Nav Âncoras │ CTA Principal "Fale Conosco"    │
├─────────────────────────────────────────────────────────────┤
│                     HERO SECTION                             │
│  Headline Impactante + Subheadline + CTA + Prova Social     │
├─────────────────────────────────────────────────────────────┤
│                   SOCIAL PROOF BAR                           │
│  Logos de Clientes / Números de Resultados                  │
├─────────────────────────────────────────────────────────────┤
│                      SERVIÇOS                                │
│  3 Cards: Sites | SEO | Tráfego Pago                        │
├─────────────────────────────────────────────────────────────┤
│                   DIFERENCIAIS                               │
│  Garantia Total | Metodologia | Suporte                     │
├─────────────────────────────────────────────────────────────┤
│                    RESULTADOS                                │
│  Cases de Sucesso com Métricas Reais                        │
├─────────────────────────────────────────────────────────────┤
│                   DEPOIMENTOS                                │
│  Carrossel de Testemunhos de Clientes                       │
├─────────────────────────────────────────────────────────────┤
│                      FAQ                                     │
│  Accordion com Perguntas Frequentes                         │
├─────────────────────────────────────────────────────────────┤
│                     CONTATO                                  │
│  Formulário Simplificado + WhatsApp + Mapa                  │
├─────────────────────────────────────────────────────────────┤
│                      FOOTER                                  │
│  Links Legais | Redes Sociais | Copyright                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Conteúdo Otimizado por Seção

### 4.1 Header (Fixo/Sticky)

**Elementos Essenciais:**
- Logo Biomo (versão compacta para mobile)
- Navegação por âncoras: Serviços | Resultados | Contato
- Botão CTA destacado: "Solicitar Orçamento"

**Remover:**
- Menus dropdown complexos
- Links para páginas internas desnecessárias
- Excesso de itens de navegação

---

### 4.2 Hero Section

**Estrutura Recomendada:**

```
HEADLINE PRINCIPAL (H1):
"Transformamos sua presença digital em resultados reais"

SUBHEADLINE:
"Agência de Marketing Digital Full Service com Garantia Total
de satisfação. Sites profissionais, SEO e Tráfego Pago."

CTAs (2 botões):
[Solicitar Orçamento Grátis] (primário)
[Ver Nossos Resultados] (secundário - âncora)

PROVA SOCIAL:
"+ de X clientes atendidos | X anos de experiência | 100% de satisfação"
```

**Visual:**
- Background com gradiente ou imagem abstrata moderna
- Animação sutil de entrada (fade-in)
- Sem vídeo autoplay (impacta performance)

---

### 4.3 Barra de Prova Social

**Formato:**
```
[Logo Cliente 1] [Logo Cliente 2] [Logo Cliente 3] [Logo Cliente 4] [Logo Cliente 5]

ou

[+150 Projetos] [98% Satisfação] [5 Anos] [Garantia Total]
```

**Estilo:**
- Logos em escala de cinza (hover: colorido)
- Fundo neutro com leve contraste
- Scroll horizontal em mobile se necessário

---

### 4.4 Seção de Serviços

**3 Cards Principais:**

#### Card 1: Criação de Sites
```
Ícone: Monitor/Código
Título: Sites Profissionais
Descrição: "Sites modernos, rápidos e otimizados
para converter visitantes em clientes."
Tópicos:
• Design responsivo
• Otimizado para SEO
• Integração com analytics
CTA: Saiba mais →
```

#### Card 2: SEO
```
Ícone: Gráfico/Busca
Título: SEO & Posicionamento
Descrição: "Apareça no topo do Google e seja
encontrado por quem procura seus serviços."
Tópicos:
• SEO técnico e on-page
• Estratégia de conteúdo
• Link building
CTA: Saiba mais →
```

#### Card 3: Tráfego Pago
```
Ícone: Alvo/Foguete
Título: Google & Meta ADS
Descrição: "Campanhas de alto desempenho com
ROI mensurável e otimização contínua."
Tópicos:
• Google Ads
• Facebook & Instagram Ads
• Remarketing
CTA: Saiba mais →
```

**Layout:**
- Grid 3 colunas (desktop) → 1 coluna (mobile)
- Cards com hover effect sutil
- Ícones minimalistas e consistentes

---

### 4.5 Seção de Diferenciais

**Título:** "Por que escolher a Biomo?"

**3-4 Diferenciais:**

| Diferencial | Descrição |
|-------------|-----------|
| **Garantia Total** | Se não gostar do resultado, refazemos sem custo adicional |
| **Atendimento Humanizado** | Equipe dedicada e comunicação direta via WhatsApp |
| **Resultados Mensuráveis** | Relatórios detalhados e transparência total |
| **Metodologia Própria** | Processo validado com foco em conversão |

**Visual:**
- Ícones grandes e diferenciados
- Background alternado (claro/escuro)
- Numeração opcional (01, 02, 03...)

---

### 4.6 Seção de Resultados/Cases

**Título:** "Resultados que falam por si"

**Formato:**

```
┌─────────────────────────────────────────┐
│  CASE 1: [Nome do Cliente]              │
│  ─────────────────────────────          │
│  Segmento: E-commerce                   │
│                                         │
│  [+340%]     [+180%]     [-45%]        │
│  Tráfego    Conversões   Custo/Lead    │
│                                         │
│  "Breve depoimento do cliente..."       │
└─────────────────────────────────────────┘
```

**Recomendações:**
- 2-3 cases com métricas reais
- Antes/depois quando possível
- Sem revelar dados confidenciais

---

### 4.7 Seção de Depoimentos

**Formato Carrossel:**

```
"A Biomo transformou completamente nossa presença
online. Em 3 meses, triplicamos nossos leads."

— João Silva
   CEO, Empresa XYZ
   ⭐⭐⭐⭐⭐
```

**Elementos:**
- Foto do cliente (opcional)
- Nome e cargo
- Empresa
- Avaliação em estrelas
- Navegação por dots/setas

---

### 4.8 Seção FAQ

**Perguntas Sugeridas:**

1. **Quanto tempo leva para criar um site?**
   - Resposta objetiva com prazo médio

2. **Quanto custa os serviços da Biomo?**
   - Explicar que depende do projeto + CTA para orçamento

3. **Como funciona a Garantia Total?**
   - Detalhar política de satisfação

4. **Vocês atendem empresas de qualquer tamanho?**
   - Reforçar versatilidade

5. **Como acompanho os resultados?**
   - Mencionar relatórios e dashboards

**Formato:**
- Accordion (clique para expandir)
- Schema markup para SEO (FAQ structured data)

---

### 4.9 Seção de Contato

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  LADO ESQUERDO              │  LADO DIREITO                │
│  ───────────────            │  ─────────────               │
│                             │                              │
│  "Pronto para              │  [Formulário]                │
│   transformar              │  Nome:________               │
│   seu negócio?"            │  Email:_______               │
│                             │  WhatsApp:____               │
│  📱 (XX) XXXXX-XXXX        │  Serviço: [▼]                │
│  📧 contato@biomo.com.br   │  Mensagem:____               │
│  📍 Localização             │  [ENVIAR MENSAGEM]           │
│                             │                              │
│  [WhatsApp Direto]         │                              │
│                             │                              │
└─────────────────────────────────────────────────────────────┘
```

**Formulário Simplificado (máx. 5 campos):**
1. Nome
2. E-mail
3. WhatsApp
4. Serviço de interesse (dropdown)
5. Mensagem (opcional)

**Elementos Adicionais:**
- Botão flutuante de WhatsApp
- Mapa do Google (se houver endereço físico)
- Horário de atendimento

---

### 4.10 Footer

**Conteúdo Mínimo:**
```
© 2024 Biomo - Agência de Marketing Digital
CNPJ: XX.XXX.XXX/XXXX-XX

[Instagram] [LinkedIn] [Facebook]

Política de Privacidade | Termos de Uso
```

---

## 5. Diretrizes de Design

### 5.1 Identidade Visual (Manter/Modernizar)

**Paleta de Cores Sugerida:**

| Cor | Uso | Hex Sugerido |
|-----|-----|--------------|
| Primária | CTAs, destaques | Manter atual ou evoluir |
| Secundária | Acentos, ícones | Complementar à primária |
| Neutro Escuro | Textos, headers | #1a1a2e ou similar |
| Neutro Claro | Backgrounds | #f8f9fa ou #ffffff |
| Sucesso | Validações | #28a745 |

### 5.2 Tipografia

**Recomendação:**
- **Headlines:** Font moderna sem serifa (Inter, Poppins, Manrope)
- **Corpo:** Font legível (Inter, Open Sans, Roboto)
- **Tamanhos responsivos** via clamp() ou rem

```css
/* Exemplo */
--font-heading: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
p { font-size: clamp(1rem, 2vw, 1.125rem); }
```

### 5.3 Espaçamento e Grid

- Sistema de 8px (8, 16, 24, 32, 48, 64, 96...)
- Max-width container: 1200px
- Padding lateral: 24px (mobile) / 48px (desktop)
- Seções com padding vertical generoso (80-120px)

### 5.4 Componentes Visuais

**Cards:**
- Border-radius: 12-16px
- Sombra sutil (box-shadow suave)
- Hover com elevação

**Botões:**
- Primário: Fundo colorido, texto claro
- Secundário: Outline ou ghost
- Border-radius: 8px ou pill (999px)
- Padding: 16px 32px

**Ícones:**
- Biblioteca consistente (Phosphor, Lucide, Heroicons)
- Stroke width uniforme
- Tamanho: 24px padrão

---

## 6. Especificações Técnicas

### 6.1 Stack Recomendada

| Camada | Tecnologia Sugerida | Justificativa |
|--------|---------------------|---------------|
| Framework | Next.js 14+ ou Astro | SSG/SSR para SEO |
| Estilização | Tailwind CSS | Utility-first, responsivo |
| Animações | Framer Motion | Transições suaves |
| Formulário | React Hook Form + Zod | Validação robusta |
| Analytics | GA4 + GTM | Tracking de conversões |
| Hospedagem | Vercel / Netlify | Edge, CDN global |

### 6.2 Performance

**Metas Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Otimizações:**
- Imagens: WebP/AVIF com lazy loading
- Fonts: font-display: swap + preload
- CSS: Critical CSS inline
- JS: Code splitting + defer
- Compressão: Brotli/Gzip

### 6.3 SEO Técnico

**Implementar:**
- Meta tags otimizadas (title, description)
- Open Graph + Twitter Cards
- Schema.org (LocalBusiness, FAQ, Service)
- Sitemap.xml + robots.txt
- Canonical URLs
- Alt text em todas as imagens

### 6.4 Responsividade

**Breakpoints:**
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

**Adaptações Mobile:**
- Menu hamburger
- CTAs full-width
- Stack vertical de cards
- Font sizes ajustados
- Touch targets mínimo 44x44px

---

## 7. Conteúdo a Remover/Simplificar

### 7.1 Remover

| Item | Motivo |
|------|--------|
| Páginas internas separadas | Consolidar em single page |
| Blog (se existir) | Foco em conversão, não conteúdo |
| Sobre detalhado | Resumir em 1 parágrafo |
| Portfolio extenso | Apenas 2-3 cases de destaque |
| Múltiplos formulários | Um único formulário estratégico |
| Links de rodapé excessivos | Mínimo necessário |
| Pop-ups intrusivos | Apenas WhatsApp flutuante |

### 7.2 Simplificar

| De | Para |
|----|------|
| Lista extensa de serviços | 3 categorias principais |
| Textos longos | Bullets e highlights |
| Muitas opções de contato | WhatsApp + Formulário |
| Animações pesadas | Transições sutis |

---

## 8. Checklist de Implementação

### Fase 1: Estrutura
- [ ] Configurar projeto (Next.js/Astro + Tailwind)
- [ ] Criar estrutura de componentes
- [ ] Implementar layout base responsivo
- [ ] Configurar fontes e cores

### Fase 2: Seções
- [ ] Header com navegação sticky
- [ ] Hero section com CTAs
- [ ] Barra de prova social
- [ ] Cards de serviços
- [ ] Seção de diferenciais
- [ ] Cases/resultados
- [ ] Carrossel de depoimentos
- [ ] FAQ com accordion
- [ ] Formulário de contato
- [ ] Footer

### Fase 3: Funcionalidades
- [ ] Formulário funcional (integração)
- [ ] WhatsApp flutuante
- [ ] Animações de scroll
- [ ] Menu mobile
- [ ] Navegação por âncoras smooth

### Fase 4: Otimização
- [ ] Otimização de imagens
- [ ] Performance audit
- [ ] SEO técnico
- [ ] Schema markup
- [ ] Testes cross-browser
- [ ] Testes de responsividade

### Fase 5: Lançamento
- [ ] Configurar domínio
- [ ] SSL/HTTPS
- [ ] Analytics + GTM
- [ ] Testes finais
- [ ] Go-live

---

## 9. Wireframe Visual (ASCII)

### Desktop (1440px)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]                    Serviços   Resultados   Contato   [ORÇAMENTO]   │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│                    TRANSFORMAMOS SUA PRESENÇA                              │
│                    DIGITAL EM RESULTADOS REAIS                             │
│                                                                            │
│                    Agência Full Service com Garantia Total                 │
│                                                                            │
│                    [ORÇAMENTO GRÁTIS]  [VER RESULTADOS]                   │
│                                                                            │
│                    +150 Projetos • 98% Satisfação • 5 Anos                │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│     [Logo1]    [Logo2]    [Logo3]    [Logo4]    [Logo5]    [Logo6]        │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│                           NOSSOS SERVIÇOS                                  │
│                                                                            │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐        │
│  │   🖥️ SITES       │  │   📈 SEO         │  │   🎯 TRÁFEGO     │        │
│  │                  │  │                  │  │                  │        │
│  │   Sites modernos │  │   Apareça no     │  │   Campanhas de   │        │
│  │   e otimizados   │  │   topo do Google │  │   alto ROI       │        │
│  │                  │  │                  │  │                  │        │
│  │   [Saiba mais]   │  │   [Saiba mais]   │  │   [Saiba mais]   │        │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘        │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
```

### Mobile (375px)

```
┌─────────────────────────┐
│ [LOGO]           [≡]    │
├─────────────────────────┤
│                         │
│   TRANSFORMAMOS SUA     │
│   PRESENÇA DIGITAL      │
│   EM RESULTADOS REAIS   │
│                         │
│   Agência Full Service  │
│   com Garantia Total    │
│                         │
│   [ORÇAMENTO GRÁTIS]    │
│                         │
│   [VER RESULTADOS]      │
│                         │
│   +150 Projetos         │
│   98% Satisfação        │
│                         │
├─────────────────────────┤
│  [Logo1] [Logo2] [Logo3]│
│        →  scroll  →     │
├─────────────────────────┤
│                         │
│    NOSSOS SERVIÇOS      │
│                         │
│  ┌───────────────────┐  │
│  │   🖥️ SITES        │  │
│  │                   │  │
│  │   Sites modernos  │  │
│  │   e otimizados    │  │
│  │                   │  │
│  │   [Saiba mais]    │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │   📈 SEO          │  │
│  │      ...          │  │
│  └───────────────────┘  │
│                         │
└─────────────────────────┘
```

---

## 10. Próximos Passos

1. **Aprovação** deste documento de redesign
2. **Coleta de assets** (logo em alta, fotos, depoimentos reais)
3. **Definição de copy** final para cada seção
4. **Desenvolvimento** seguindo as especificações
5. **Revisão e ajustes** com feedback do cliente
6. **Testes** de performance e responsividade
7. **Lançamento** da nova landing page

---

## 11. Considerações Finais

Este redesign visa transformar o site institucional da Biomo em uma **landing page premium de alta conversão**, mantendo a essência da marca enquanto moderniza a experiência do usuário.

**Principais benefícios esperados:**
- Aumento significativo na taxa de conversão
- Melhor posicionamento no Google (SEO)
- Experiência mobile superior
- Carregamento mais rápido
- Comunicação mais clara e objetiva
- Redução da taxa de rejeição

---

*Documento elaborado em: Dezembro/2024*
*Versão: 1.0*
