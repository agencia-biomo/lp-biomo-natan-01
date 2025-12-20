# Diário de Prompts e Metodologia - LP-01 Biomo

> Este documento registra os prompts utilizados, erros e acertos, para que Claude possa entender melhor a metodologia de trabalho do usuário e ser mais assertivo em projetos futuros.

---

## Perfil do Usuário

### Estilo de Comunicação
- **Direto e objetivo** - Não faz rodeios
- **Visual** - Usa comparações ("igual à LP-02")
- **Iterativo** - Prefere pequenos ajustes a grandes mudanças
- **Prático** - Quer ver resultado rápido

### Preferências Identificadas
- Mobile-first sempre
- Animações sutis (não exageradas)
- Performance é prioridade
- Deploys frequentes para testar
- Documentação completa

---

## Registro de Prompts

### Sessão 1: Estrutura Inicial

**Prompt:**
> "Crie uma landing page para a Biomo, agência de marketing digital"

**Ação:** Criada estrutura HTML/CSS completa com todas as seções
**Resultado:** ✅ Aprovado com ajustes menores
**Aprendizado:** Começar com estrutura completa economiza iterações

---

### Sessão 2: Shaders

**Prompt:**
> "Adicione um background animado com shaders roxos"

**Ação:** Implementado Three.js com fragment shader customizado
**Resultado:** ✅ Aprovado
**Ajuste pedido:** "Diminua a velocidade dos shaders"
**Aprendizado:** Shaders devem ser sutis, não distraentes

---

### Sessão 3: Mobile First

**Prompt:**
> "Reveja espaçamento e aplique mobile first, preciso de maior alinhamento e distribuição visual perfeita dos elementos"

**Ação:** Refatorado CSS com breakpoints mobile-first
**Resultado:** ✅ Aprovado
**Aprendizado:** Sempre começar pelo mobile e expandir

---

### Sessão 4: Stats Alignment

**Prompt:**
> "+150 Projetos Entregues... estão com espaçamento comprometido, coloque todos os elementos alinhados adequadamente"

**Erro identificado:** Grid `grid-cols-3` não funcionava bem em todas as resoluções
**Solução:** Mudado para `flex flex-wrap` com gaps responsivos
**Aprendizado:** Flex é mais seguro que grid para elementos de tamanho variável

---

### Sessão 5: Vídeos Vimeo

**Prompt:**
> "Embede esses vídeos todos com visualização no esquema mobile... VM Eventos, Med Menosso, Eliore Studio"

**Formato fornecido:** Links Vimeo com aspect ratio 9:16
**Ação:** Substituídos mocks por iframes reais
**Resultado:** ✅ Aprovado
**Aprendizado:** Vídeos verticais usam `padding-top: 176.67%`

---

### Sessão 6: Consistência LP-01/LP-02

**Prompt:**
> "Na 01 você alterou os vídeos, eles devem ter meio que o mesmo estilo com resolução mobile da 02"

**Ação:** Sincronizados estilos entre LP-01 e LP-02
**Resultado:** ✅ Aprovado
**Aprendizado:** Manter consistência visual entre projetos relacionados

---

### Sessão 7: Google Meu Negócio

**Prompt:**
> "Aproveite também para linkar os comentários do Google com o Google Meu Negócio da empresa"

**URL fornecida:** https://share.google/eCYIhrFlaLVZNJsSb
**Ação:** Adicionado link nos badges e seção de depoimentos
**Resultado:** ✅ Aprovado
**Aprendizado:** Links externos sempre com target="_blank" e rel="noopener"

---

## Padrões de Erro

### Erros Comuns a Evitar

| Erro | Contexto | Solução |
|------|----------|---------|
| Grid quebrado | Stats em resoluções médias | Usar flex-wrap |
| Vídeo esticado | Aspect ratio errado | padding-top % |
| Deploy falhou | Diretório errado | Sempre usar `cd` antes |
| CSS conflitante | Inline + arquivo externo | Remover duplicatas |

### Como o Usuário Corrige

1. **Descreve o problema visualmente** - "está comprometido", "não está alinhado"
2. **Compara com referência** - "igual à LP-02"
3. **Pede verificação** - "build e deploy" para testar

---

## Comandos Frequentes

### Atalhos Identificados

| Comando do Usuário | Significado |
|--------------------|-------------|
| "build e deploy" | `npm run build` + `firebase deploy` |
| "igual à LP-01/02" | Copiar estilo/padrão do outro projeto |
| "mobile" | Formato vertical 9:16 |
| "commit e push" | `git add . && git commit && git push` |
| "faça isso na X também" | Aplicar mesma mudança no outro projeto |

### Fluxo de Trabalho Preferido

```
1. Usuário descreve mudança
2. Claude implementa
3. Claude faz build/deploy
4. Usuário testa no site
5. Usuário pede ajustes (se necessário)
6. Repete até aprovação
```

---

## O que Funcionou

### Acertos

1. **Proatividade em deploy** - Fazer deploy imediato após mudanças
2. **Mostrar resumo** - Tabelas com antes/depois
3. **Commits descritivos** - Mensagens claras no git
4. **Múltiplas ações em paralelo** - Editar LP-01 e LP-02 juntas
5. **Verificar status antes de commitar**

### Padrões de Sucesso

- Sempre verificar `git status` antes de commit
- Testar build antes de assumir sucesso
- Manter consistência visual entre projetos
- Documentar decisões tomadas

---

## O que NÃO Fazer

### Anti-padrões

1. **Não adicionar features não pedidas** - Foco no que foi solicitado
2. **Não quebrar o que já funciona** - Testar sempre
3. **Não fazer over-engineering** - Simples é melhor
4. **Não esquecer mobile** - Sempre testar em viewport pequena
5. **Não deixar console com erros** - Limpar warnings

---

## Próximos Projetos

### Como Aplicar Este Conhecimento

1. **Ler este documento antes de começar**
2. **Usar os mesmos padrões de cores/tipografia**
3. **Seguir a mesma estrutura de pastas**
4. **Aplicar mobile-first desde o início**
5. **Fazer deploys frequentes para validação**

### Template de Prompt Ideal

```
"Crie [tipo de projeto] para [cliente].
- Visual similar à LP-01/LP-02
- Cores: roxo #a800d2
- Mobile-first
- Deploy em Firebase
- [Funcionalidades específicas]"
```

---

## Métricas de Sucesso

### O que o Usuário Valoriza

| Prioridade | Critério |
|------------|----------|
| Alta | Performance (carregamento rápido) |
| Alta | Responsividade (funciona em mobile) |
| Média | Animações (sutis e funcionais) |
| Média | Código limpo (fácil manutenção) |
| Baixa | Features extras (só se pedidas) |
