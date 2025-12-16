# LP Biomo - Landing Page Premium

Landing Page Premium para a Biomo - Agência de Marketing Digital.

## Sobre o Projeto

Este projeto é um redesign completo do site institucional da Biomo, convertendo-o em uma **Landing Page Premium** de alta conversão com foco em:

- Modernização visual
- Responsividade mobile-first
- Performance otimizada
- Background com WebGL Shaders animados
- Deploy via Firebase Hosting

## Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS
- **JavaScript ES6+** - Interatividade
- **Three.js** - WebGL Shaders para background animado
- **Firebase Hosting** - Deploy e hospedagem

## Estrutura do Projeto

```
lp-biomo-natan-01/
├── public/                  # Arquivos para deploy
│   ├── index.html          # Landing page principal
│   ├── assets/             # Imagens e recursos
│   ├── css/                # Estilos
│   │   └── styles.css
│   └── js/                 # Scripts
│       └── shaders.js
├── docs/                    # Documentação
│   ├── REDESIGN.md         # Proposta de redesign
│   └── SHADERS.md          # Documentação dos shaders
├── firebase.json           # Configuração Firebase
├── .firebaserc             # Projeto Firebase
└── README.md
```

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Roxo Principal | `#a800d2` | Cor primária, halos, CTAs |
| Roxo Escuro | `#7b00a0` | Gradientes, sombras |
| Roxo Claro | `#c86bdb` | Destaques, hover |
| Preto | `#000000` | Background base |
| Branco | `#ffffff` | Textos principais |

## WebGL Shaders

O background da landing page utiliza shaders WebGL customizados com as seguintes características:

### Estilos Disponíveis

1. **Rings (Anéis Pulsantes)** - Anéis concêntricos com movimento radial
2. **Waves (Ondas Fluidas)** - Ondulações orgânicas sobrepostas
3. **Mesh (Malha Orgânica)** - Grid distorcido com noise procedural
4. **Vortex (Vórtice)** - Espiral hipnótica com brilho central

### Características Técnicas

- **Cor base**: `#a800d2` (R: 0.659, G: 0.0, B: 0.824)
- **Velocidade variável**: Halos maiores movem mais lentamente
- **Fórmula de velocidade**: `speed = base / (1.0 + index * factor)`
- **Proporção R/B**: Limitada a 80% para manter tom roxo puro

## Seções da Landing Page

1. **Header** - Logo + navegação + CTA
2. **Hero** - Headline + subheadline + CTAs + prova social
3. **Social Proof** - Logos de clientes / métricas
4. **Serviços** - Cards: Sites | SEO | Tráfego Pago
5. **Diferenciais** - Garantia Total, metodologia, suporte
6. **Resultados** - Cases de sucesso com métricas
7. **Depoimentos** - Carrossel de testemunhos
8. **FAQ** - Perguntas frequentes (accordion)
9. **Contato** - Formulário + WhatsApp + mapa
10. **Footer** - Links legais + redes sociais

## Deploy

### Firebase Hosting

```bash
# Instalar Firebase CLI (se necessário)
npm install -g firebase-tools

# Login no Firebase
firebase login

# Inicializar projeto (já configurado)
firebase init hosting

# Deploy
firebase deploy --only hosting
```

### Comandos Úteis

```bash
# Servidor local de desenvolvimento
firebase serve --only hosting

# Deploy com preview
firebase hosting:channel:deploy preview

# Ver status do deploy
firebase hosting:channel:list
```

## Performance

### Metas Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Otimizações Implementadas

- Imagens otimizadas (WebP quando possível)
- CSS crítico inline
- JavaScript com defer
- Fonts com font-display: swap
- Compressão Brotli/Gzip via Firebase

## Responsividade

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm - Tablets pequenos */ }
@media (min-width: 768px)  { /* md - Tablets */ }
@media (min-width: 1024px) { /* lg - Desktop */ }
@media (min-width: 1280px) { /* xl - Desktop grande */ }
```

## Histórico de Desenvolvimento

### Fase 1 - Análise e Documentação
- [x] Análise do site atual biomo.com.br
- [x] Identificação de problemas e oportunidades
- [x] Criação do documento de redesign
- [x] Definição da arquitetura da landing page

### Fase 2 - Background WebGL
- [x] Criação do shader base (anéis pulsantes)
- [x] Implementação de 4 variações de shader
- [x] Ajuste de cores para #a800d2 (roxo)
- [x] Implementação de velocidades variáveis
- [x] Remoção de tons rosa das bordas

### Fase 3 - Estrutura do Projeto (atual)
- [x] Criação do repositório
- [x] Estrutura de pastas para Firebase
- [x] Documentação completa
- [ ] Implementação da landing page
- [ ] Configuração do Firebase
- [ ] Deploy inicial

## Arquivos de Referência

Os seguintes arquivos foram criados durante o desenvolvimento e servem como referência:

- `/home/natan/biomo-redesign-proposta.md` - Documento completo de redesign
- `/home/natan/biomo-background-demo.html` - Demo CSS do background (versão inicial)
- `/home/natan/biomo-shader-background.html` - Demo WebGL com shaders (versão final)

## Contribuição

Este projeto é desenvolvido para a Biomo Agência. Para contribuições:

1. Crie uma branch: `git checkout -b feature/nova-feature`
2. Commit suas mudanças: `git commit -m 'Add nova feature'`
3. Push para a branch: `git push origin feature/nova-feature`
4. Abra um Pull Request

## Licença

Projeto proprietário - Biomo Agência de Marketing Digital

---

Desenvolvido com Claude Code
