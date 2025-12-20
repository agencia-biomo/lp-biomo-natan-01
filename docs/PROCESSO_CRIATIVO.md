# Processo Criativo - LP-01 Biomo

> Este documento descreve o processo criativo completo para que Claude possa recriar projetos similares de forma mais autônoma no futuro.

---

## 1. Briefing Inicial

### O que o cliente pediu
- Landing page para agência de marketing digital
- Visual moderno e tecnológico
- Cores roxas como identidade
- Foco em conversão (leads via WhatsApp)
- Performance excelente (mobile-first)

### Público-alvo
- Pequenas e médias empresas
- Empresários buscando presença digital
- Profissionais liberais

### Objetivos de conversão
1. Contato via WhatsApp
2. Preenchimento de formulário
3. Solicitação de orçamento

---

## 2. Referências Visuais

### Inspirações
- Sites de SaaS modernos (Vercel, Linear)
- Glassmorphism e blur effects
- Animações sutis de scroll
- Dark mode como padrão

### O que NÃO copiar
- Designs muito complexos
- Animações que prejudicam performance
- Layouts que não funcionam em mobile

---

## 3. Decisões de Design

### Por que roxo #a800d2?
- Cor diferenciadora no mercado de marketing
- Transmite inovação e criatividade
- Funciona bem em dark mode
- Boa legibilidade em contrastes

### Por que shaders WebGL?
- Diferencial visual único
- Background dinâmico sem vídeo pesado
- Mostra expertise técnica da agência
- Performance controlável (pause quando invisível)

### Por que mobile-first?
- Maioria do tráfego é mobile
- Força simplicidade no design
- Melhor performance inicial
- Progressive enhancement

### Por que glassmorphism nos cards?
- Visual premium e moderno
- Funciona bem sobre shaders
- Cria hierarquia visual
- Tendência atual que não é exagerada

---

## 4. Iterações do Projeto

### V1 - Estrutura Básica
- HTML5 semântico
- CSS com variáveis
- Layout responsivo
- Seções principais

**Aprendizado:** Começar simples e iterar. Não tentar fazer tudo de uma vez.

### V2 - Shaders Implementados
- Three.js para WebGL
- Fragment shader customizado
- Parallax no scroll
- Visibility API para performance

**Aprendizado:** Shaders precisam de otimização constante. Limitar pixel ratio, pausar quando invisível.

### V3 - Modal de Orçamento
- Wizard de 5 passos
- Cálculo dinâmico
- LocalStorage para persistência
- Envio via WhatsApp

**Aprendizado:** Modais complexos devem ser em arquivos separados. Salvar progresso é essencial para UX.

### V4 - Vídeos e Polish Final
- Embeds Vimeo verticais
- Link Google Meu Negócio
- Páginas legais
- Ajustes de responsividade

**Aprendizado:** Vídeos verticais (9:16) são o formato ideal para depoimentos. Usar padding-top para aspect ratio.

---

## 5. Padrões de Qualidade

### O que define "pronto"

| Critério | Verificação |
|----------|-------------|
| Responsivo | Testar em 320px, 768px, 1280px |
| Performance | Lighthouse > 90 |
| Acessibilidade | Sem erros no axe DevTools |
| Cross-browser | Chrome, Safari, Firefox |
| Animações | 60fps constante |
| CTAs | Todos funcionando |
| Links | Nenhum 404 |
| Forms | Validação funcionando |

### Checklist Final
- [ ] Console sem erros
- [ ] Mobile menu funciona
- [ ] Shaders carregam
- [ ] Modal abre/fecha
- [ ] WhatsApp popup aparece
- [ ] Vídeos carregam
- [ ] Links externos com target="_blank"

---

## 6. Lições Aprendidas

### O que funcionou

1. **CSS crítico inline** - Melhora LCP significativamente
2. **Shaders pausáveis** - Performance em tabs inativas
3. **LocalStorage para modal** - Não perde progresso
4. **Flexbox/Grid híbrido** - Melhor responsividade
5. **Variáveis CSS** - Fácil manutenção de cores

### O que evitar

1. **Animações em loop infinito** - Drena bateria mobile
2. **Muitas fontes** - Aumenta bundle size
3. **Imagens não otimizadas** - Usar SVG quando possível
4. **JavaScript bloqueante** - Sempre defer ou async
5. **Frameworks pesados** - Vanilla é suficiente para LP

---

## 7. Como Recriar

### Template Base
1. Criar estrutura HTML semântica
2. Adicionar CSS crítico inline
3. Configurar variáveis de cores
4. Implementar layout mobile-first
5. Adicionar interações JS
6. Otimizar performance
7. Testar e refinar

### Ordem de Implementação Recomendada
```
1. HTML estrutural (sem estilos)
2. CSS crítico (cores, tipografia, layout básico)
3. CSS completo (responsivo, animações)
4. JavaScript (interações básicas)
5. Features avançadas (shaders, modais)
6. Polish (detalhes, micro-interações)
7. Otimização (performance, SEO)
```

### Tempo Estimado
- LP básica: 2-4 horas
- LP com shaders: 4-6 horas
- LP completa (modal, vídeos): 6-10 horas

---

## 8. Assets Necessários

### Para começar
- [ ] Logo SVG (principal e mini)
- [ ] Paleta de cores definida
- [ ] Textos aprovados
- [ ] Fotos/vídeos dos clientes

### Opcionais
- [ ] Ícones customizados
- [ ] Imagens de background
- [ ] Vídeos de depoimentos
- [ ] Badges/certificações

---

## 9. Configuração do Ambiente

### Ferramentas Usadas
- VS Code com extensões (Prettier, ESLint)
- Chrome DevTools para debug
- Firebase CLI para deploy
- Git para versionamento

### Comandos Frequentes
```bash
# Servir localmente
npx serve public

# Deploy
firebase deploy --only hosting

# Git
git add . && git commit -m "feat: ..." && git push
```
