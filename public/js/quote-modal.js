/**
 * Biomo Quote Modal - Sistema de Orçamento (5 Passos com Tabs)
 */

// ==================== DADOS ====================
const PLANS = {
  landing: {
    id: "landing",
    label: "Landing Page",
    base: 993,
    pagesIncluded: 1,
    icon: "⚡",
    help: "Uma página única com uma proposta clara, prova social e um botão para falar com você.",
    details: "Incluso: 1 seção hero, 3 seções de benefícios, 1 call-to-action com WhatsApp, rodapé.",
  },
  institucional: {
    id: "institucional",
    label: "Site Institucional",
    base: 3491,
    pagesIncluded: 6,
    icon: "📈",
    help: "Um site completo com as páginas essenciais para gerar confiança e explicar seu serviço.",
    details: "Incluso: Até 6 páginas (Home, Sobre, Serviços, Blog, Contato, Políticas).",
  },
  premium: {
    id: "premium",
    label: "Site Enterprise + Intranet",
    base: 5994,
    pagesIncluded: 6,
    includes: ["tracking_avancado", "crm"],
    icon: "🚀",
    help: "A solução completa para escalar com segurança, incluindo dashboards, CRM e integrações.",
    details: "Incluso: Múltiplas páginas, dashboards internos, CRM e integrações avançadas.",
  },
};

// Addons organizados por categoria
const ADDONS = {
  // Categoria: Conteúdo
  extraPage: { label: "Páginas extras", type: "counter", unit: 293, category: "conteudo", help: "Adiciona uma nova página completa ao site." },
  copywriting: { label: "Copywriting", type: "counter", unit: 114, category: "conteudo", help: "Redação de texto otimizado em SEO e persuasão." },
  imagensPremium: { label: "Pacote de Imagem Premium", type: "counter", unit: 143, category: "conteudo", help: "Até 10 imagens exclusivas em alta qualidade." },
  // Categoria: Módulos
  blog: { label: "Blog", type: "toggle", setup: 491, category: "modulos", includedIn: ["institucional", "premium"], help: "Publique artigos e suba no Google." },
  portfolio: { label: "Portfólio/Cases", type: "toggle", setup: 594, category: "modulos", includedIn: ["premium"], help: "Mostre trabalhos com fotos e filtros." },
  team: { label: "Página de Equipe", type: "toggle", setup: 289, category: "modulos", help: "Apresente as pessoas por trás da marca." },
  testimonials: { label: "Sessão de Depoimentos", type: "toggle", setup: 294, category: "modulos", help: "Prova social que vende." },
  catalogo: { label: "Catálogo de Produtos", type: "toggle", setup: 943, category: "modulos", help: "Área para exibir produtos com fotos e categorias." },
  calculadora: { label: "Calculadora/Orçamento", type: "toggle", setup: 891, category: "modulos", help: "O cliente simula preço e te manda o lead." },
  agenda: { label: "Sistema de Agendamento", type: "toggle", setup: 683, category: "modulos", help: "O cliente escolhe dia/horário." },
  multilanguage: { label: "Site Multilíngue", type: "toggle", setup: 991, category: "modulos", help: "Seu site em mais de um idioma." },
  // Categoria: Visibilidade (SEO & Marketing)
  seo_avancado: { label: "SEO Avançado", type: "toggle", setup: 1483, category: "visibilidade", help: "Otimização completa para máximo desempenho orgânico." },
  tracking_avancado: { label: "Rastreamento Avançado", type: "toggle", setup: 684, category: "visibilidade", includedIn: ["premium"], help: "Coleta avançada de dados dos visitantes." },
  // Categoria: Automação
  crm: { label: "Integração com CRM", type: "toggle", setup: 583, category: "automacao", includedIn: ["premium"], help: "CRM próprio sob medida para sua operação." },
  chatbot_site: { label: "Chatbot no Site", type: "toggle", setup: 481, category: "automacao", help: "Chatbot para automatizar respostas e capturar leads." },
  agent_ia_whatsapp: { label: "Agent IA para WhatsApp", type: "toggle", setup: 0, category: "automacao", customPriceLabel: "A consultar", help: "IA avançada para WhatsApp. Valor: R$ 1.193 a R$ 2.491 + mensalidade." },
  // Categoria: Gestão (Backend)
  backend_padrao: { label: "Back-end Padrão", type: "toggle", setup: 793, category: "gestao", includedIn: ["premium"], help: "Painel para gerenciar conteúdos básicos do site." },
  backend_custom: { label: "Back-end Personalizado", type: "range", min: 1491, category: "gestao", help: "Campos específicos, regras, automações, dashboards." },
};

const RECURRING = {
  host_essencial: { label: "Essencial - Compartilhada", monthly: 53, help: "SSL, backups semanais, uptime monitorado." },
  host_performance: { label: "Performance (Ideal para tráfego pago)", monthly: 143, help: "CDN, backups diários, anti-bot, servidores rápidos." },
  manutencao_2h: { label: "Plano de Manutenção", monthly: 241, help: "2h/mês para ajustes e atualizações." },
};

// Nova estrutura de 5 passos com tabs
const STEPS = [
  { title: "Escolha seu Plano", type: "plans" },
  {
    title: "Personalização",
    type: "tabs",
    tabs: [
      { id: "conteudo", label: "Conteúdo" },
      { id: "modulos", label: "Módulos" },
    ],
  },
  {
    title: "Marketing & Backend",
    type: "tabs",
    tabs: [
      { id: "visibilidade", label: "Visibilidade" },
      { id: "automacao", label: "Automação" },
      { id: "gestao", label: "Gestão" },
    ],
  },
  { title: "Hospedagem & Manutenção", type: "recurring" },
  { title: "Finalizar Orçamento", type: "final" },
];

// ==================== STATE ====================
let currentStep = 0;
let selectedPlan = null;
let addonsState = {};
let recurringState = {};
let formData = { name: "", email: "", phone: "", message: "" };
let activeTabs = {}; // Para controlar tab ativa em cada step

// LocalStorage key
const STORAGE_KEY = "biomo_quote_draft";
const STORAGE_EXPIRY = 24 * 60 * 60 * 1000; // 24 horas

// ==================== FUNÇÕES ====================

function formatPrice(value) {
  return value.toLocaleString("pt-BR");
}

function calculatePrice() {
  if (!selectedPlan) return { setup: 0, monthly: 0 };

  let setup = PLANS[selectedPlan].base;
  let monthly = 0;
  const plan = PLANS[selectedPlan];
  const includedAddons = plan.includes || [];

  Object.keys(addonsState).forEach((key) => {
    const addon = ADDONS[key];
    const value = addonsState[key];
    const isIncluded = (addon.includedIn && addon.includedIn.includes(selectedPlan)) || includedAddons.includes(key);

    if (addon.type === "counter" && typeof value === "number" && value > 0) {
      setup += addon.unit * value;
    } else if (addon.type === "toggle" && value && !isIncluded) {
      if (addon.setup !== undefined) setup += addon.setup;
    } else if (addon.type === "range" && typeof value === "number" && value > 0) {
      setup += value;
    }
  });

  Object.keys(recurringState).forEach((key) => {
    if (recurringState[key]) {
      monthly += RECURRING[key].monthly;
    }
  });

  return { setup, monthly };
}

function isAddonIncluded(addonKey) {
  if (!selectedPlan) return false;
  const addon = ADDONS[addonKey];
  const plan = PLANS[selectedPlan];
  const includedAddons = plan.includes || [];
  return (addon.includedIn && addon.includedIn.includes(selectedPlan)) || includedAddons.includes(addonKey);
}

function getAddonsByCategory(category) {
  return Object.entries(ADDONS).filter(([_, addon]) => addon.category === category);
}

function formatPhone(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}

function validateForm() {
  const errors = {};
  if (formData.name.length < 2) errors.name = "Nome deve ter pelo menos 2 caracteres";
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
    errors.email = "Email inválido";
  }
  return errors;
}

function generateWhatsAppMessage() {
  const { setup, monthly } = calculatePrice();
  const planLabel = selectedPlan ? PLANS[selectedPlan].label : "";
  let msg = `Olá! Gostaria de finalizar meu orçamento para um site. 🚀\n\n`;
  msg += `*Meu nome:* ${formData.name}\n`;
  msg += `*Email:* ${formData.email}\n`;
  if (formData.phone) msg += `*Telefone:* ${formData.phone}\n`;
  msg += `*Plano escolhido:* ${planLabel}\n`;
  msg += `*Valor estimado:* R$ ${formatPrice(setup)} (setup)`;
  if (monthly > 0) msg += ` + R$ ${monthly}/mês`;
  msg += `\n\nPodemos conversar sobre os detalhes? 😊`;
  return encodeURIComponent(msg);
}

// ==================== LOCAL STORAGE ====================

function saveProgress() {
  if (selectedPlan) {
    const data = {
      step: currentStep,
      selectedPlan,
      addonsState,
      recurringState,
      formData,
      activeTabs,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Não foi possível salvar progresso:", e);
    }
  }
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      // Verifica expiração de 24h
      if (Date.now() - data.timestamp < STORAGE_EXPIRY) {
        currentStep = data.step || 0;
        selectedPlan = data.selectedPlan;
        addonsState = data.addonsState || {};
        recurringState = data.recurringState || {};
        formData = data.formData || { name: "", email: "", phone: "", message: "" };
        activeTabs = data.activeTabs || {};
        return true;
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch (e) {
    console.warn("Não foi possível carregar progresso:", e);
  }
  return false;
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn("Não foi possível limpar progresso:", e);
  }
}

// ==================== RENDERIZAÇÃO ====================

function renderAddonCard(addonKey, addon) {
  const included = isAddonIncluded(addonKey);
  const value = addonsState[addonKey];
  const isActive = included || value;

  let control = "";
  if (addon.type === "counter") {
    control = `
      <div class="quote-addon-control">
        <span class="quote-addon-unit">R$ ${addon.unit}/un</span>
        <div class="quote-counter">
          <button class="quote-counter-btn" data-addon="${addonKey}" data-action="minus">−</button>
          <span class="quote-counter-value">${value || 0}</span>
          <button class="quote-counter-btn" data-addon="${addonKey}" data-action="plus">+</button>
        </div>
      </div>
    `;
  } else if (addon.type === "toggle" && !included) {
    control = `
      <div class="quote-addon-control">
        <span class="quote-addon-price">${addon.customPriceLabel || `R$ ${addon.setup}`}</span>
        <button class="quote-toggle ${value ? "active" : ""}" data-addon="${addonKey}">
          <span class="quote-toggle-knob"></span>
        </button>
      </div>
    `;
  } else if (addon.type === "range") {
    control = `
      <div class="quote-addon-control">
        <span class="quote-addon-price">Mín: R$ ${addon.min}</span>
        <input type="number" class="quote-range-input" data-addon="${addonKey}"
          min="${addon.min}" step="100" value="${value || ""}" placeholder="${addon.min}">
      </div>
    `;
  }

  return `
    <div class="quote-addon-card ${isActive ? "active" : ""} ${included ? "included" : ""}">
      <div class="quote-addon-info">
        <span class="quote-addon-label">${addon.label}</span>
        ${included ? '<span class="quote-addon-badge">Incluso</span>' : ""}
        <p class="quote-addon-help">${addon.help}</p>
      </div>
      ${control}
    </div>
  `;
}

function renderTabs(stepIndex, tabs) {
  const activeTab = activeTabs[stepIndex] || tabs[0].id;

  const tabButtons = tabs
    .map(
      (tab) => `
      <button class="quote-tab-btn ${activeTab === tab.id ? "active" : ""}" data-tab="${tab.id}" data-step="${stepIndex}">
        ${tab.label}
      </button>
    `
    )
    .join("");

  const addons = getAddonsByCategory(activeTab);
  const addonCards = addons.map(([key, addon]) => renderAddonCard(key, addon)).join("");

  return `
    <div class="quote-tabs">
      <div class="quote-tabs-header">
        ${tabButtons}
      </div>
      <div class="quote-tabs-content">
        ${addonCards || '<p class="quote-empty-tab">Nenhum addon disponível nesta categoria.</p>'}
      </div>
    </div>
  `;
}

function renderModal() {
  const { setup, monthly } = calculatePrice();
  const step = STEPS[currentStep];
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  let content = "";

  // Step 0: Planos
  if (step.type === "plans") {
    content = Object.values(PLANS)
      .map(
        (plan) => `
      <button class="quote-plan-card ${selectedPlan === plan.id ? "selected" : ""}" data-plan="${plan.id}">
        <div class="quote-plan-icon">${plan.icon}</div>
        <div class="quote-plan-info">
          <div class="quote-plan-header">
            <h3>${plan.label}</h3>
            <span class="quote-plan-price">R$ ${formatPrice(plan.base)}</span>
          </div>
          <p class="quote-plan-help">${plan.help}</p>
          <p class="quote-plan-details">${plan.details}</p>
        </div>
        ${selectedPlan === plan.id ? '<div class="quote-plan-check">✓</div>' : ""}
      </button>
    `
      )
      .join("");
  }

  // Steps com Tabs (Personalização e Marketing & Backend)
  else if (step.type === "tabs") {
    content = renderTabs(currentStep, step.tabs);
  }

  // Step Recurring (Hospedagem)
  else if (step.type === "recurring") {
    content = Object.entries(RECURRING)
      .map(([key, service]) => {
        const isSelected = recurringState[key];
        return `
        <button class="quote-recurring-card ${isSelected ? "selected" : ""}" data-recurring="${key}">
          <div class="quote-recurring-info">
            <h4>${service.label}</h4>
            <p>${service.help}</p>
          </div>
          <div class="quote-recurring-control">
            <span class="quote-recurring-price">R$ ${service.monthly}/mês</span>
            <div class="quote-checkbox ${isSelected ? "checked" : ""}">
              ${isSelected ? "✓" : ""}
            </div>
          </div>
        </button>
      `;
      })
      .join("");
  }

  // Step Final (Form)
  else if (step.type === "final") {
    const errors = validateForm();
    content = `
      <div class="quote-summary">
        <h4>Resumo do Orçamento</h4>
        <div class="quote-summary-row">
          <span>Plano:</span>
          <span>${selectedPlan ? PLANS[selectedPlan].label : "-"}</span>
        </div>
        <div class="quote-summary-row">
          <span>Setup:</span>
          <span class="quote-summary-price">R$ ${formatPrice(setup)}</span>
        </div>
        ${
          monthly > 0
            ? `
        <div class="quote-summary-row">
          <span>Mensalidade:</span>
          <span class="quote-summary-price">R$ ${monthly}/mês</span>
        </div>
        `
            : ""
        }
      </div>

      <div class="quote-form">
        <div class="quote-form-group">
          <label>Nome *</label>
          <input type="text" id="quoteFormName" value="${formData.name}" placeholder="Seu nome">
          ${errors.name ? `<span class="quote-form-error">${errors.name}</span>` : ""}
        </div>

        <div class="quote-form-group">
          <label>Email *</label>
          <input type="email" id="quoteFormEmail" value="${formData.email}" placeholder="seu@email.com">
          ${errors.email ? `<span class="quote-form-error">${errors.email}</span>` : ""}
        </div>

        <div class="quote-form-group">
          <label>WhatsApp (opcional)</label>
          <input type="tel" id="quoteFormPhone" value="${formData.phone}" placeholder="(47) 99999-9999">
        </div>

        <div class="quote-form-group">
          <label>Mensagem (opcional)</label>
          <textarea id="quoteFormMessage" rows="3" placeholder="Conte um pouco sobre seu projeto...">${formData.message}</textarea>
        </div>
      </div>
    `;
  }

  // Floating summary (entre steps 1-3)
  const floatingSummary =
    currentStep > 0 && currentStep < 4 && selectedPlan
      ? `
    <div class="quote-floating-summary">
      <span>${PLANS[selectedPlan].label}</span>
      <div>
        <span class="quote-floating-price">R$ ${formatPrice(setup)}</span>
        ${monthly > 0 ? `<span class="quote-floating-monthly">+ R$ ${monthly}/mês</span>` : ""}
      </div>
    </div>
  `
      : "";

  const modalHTML = `
    <div class="quote-modal-backdrop" id="quoteModalBackdrop"></div>
    <div class="quote-modal" id="quoteModalContent">
      <div class="quote-modal-header">
        <div>
          <h2>Orçamento Personalizado</h2>
          <p>${step.title}</p>
        </div>
        <button class="quote-modal-close" id="quoteModalClose">×</button>
      </div>

      <div class="quote-progress">
        <div class="quote-progress-info">
          <span>Passo ${currentStep + 1} de ${STEPS.length}</span>
          <span class="quote-progress-percent">${Math.round(progress)}%</span>
        </div>
        <div class="quote-progress-bar">
          <div class="quote-progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>

      <div class="quote-modal-content">
        ${content}
      </div>

      <div class="quote-modal-footer">
        ${floatingSummary}
        <div class="quote-modal-actions">
          ${currentStep > 0 ? '<button class="quote-btn-back" id="quoteBack">← Voltar</button>' : "<div></div>"}
          ${
            currentStep < STEPS.length - 1
              ? `<button class="quote-btn-next" id="quoteNext" ${currentStep === 0 && !selectedPlan ? "disabled" : ""}>
              Continuar →
            </button>`
              : `<button class="quote-btn-whatsapp" id="quoteWhatsApp">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar pelo WhatsApp
            </button>`
          }
        </div>
      </div>
    </div>
  `;

  return modalHTML;
}

function attachEvents() {
  // Close modal
  document.getElementById("quoteModalBackdrop")?.addEventListener("click", closeQuoteModal);
  document.getElementById("quoteModalClose")?.addEventListener("click", closeQuoteModal);

  // Navigation
  document.getElementById("quoteBack")?.addEventListener("click", () => {
    currentStep--;
    saveProgress();
    updateModal();
  });

  document.getElementById("quoteNext")?.addEventListener("click", () => {
    currentStep++;
    saveProgress();
    updateModal();
  });

  // Plan selection
  document.querySelectorAll(".quote-plan-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedPlan = card.dataset.plan;
      saveProgress();
      updateModal();
    });
  });

  // Tab buttons
  document.querySelectorAll(".quote-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      const stepIndex = parseInt(btn.dataset.step);
      activeTabs[stepIndex] = tabId;
      saveProgress();
      updateModal();
    });
  });

  // Counter buttons
  document.querySelectorAll(".quote-counter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const addon = btn.dataset.addon;
      const action = btn.dataset.action;
      const current = addonsState[addon] || 0;
      addonsState[addon] = action === "plus" ? current + 1 : Math.max(0, current - 1);
      saveProgress();
      updateModal();
    });
  });

  // Toggle buttons
  document.querySelectorAll(".quote-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const addon = toggle.dataset.addon;
      addonsState[addon] = !addonsState[addon];
      saveProgress();
      updateModal();
    });
  });

  // Range inputs
  document.querySelectorAll(".quote-range-input").forEach((input) => {
    input.addEventListener("change", () => {
      const addon = input.dataset.addon;
      addonsState[addon] = parseInt(input.value) || 0;
      saveProgress();
      updateModal();
    });
  });

  // Recurring buttons
  document.querySelectorAll(".quote-recurring-card").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.recurring;
      recurringState[key] = !recurringState[key];
      saveProgress();
      updateModal();
    });
  });

  // Form inputs
  document.getElementById("quoteFormName")?.addEventListener("input", (e) => {
    formData.name = e.target.value;
    saveProgress();
  });

  document.getElementById("quoteFormEmail")?.addEventListener("input", (e) => {
    formData.email = e.target.value;
    saveProgress();
  });

  document.getElementById("quoteFormPhone")?.addEventListener("input", (e) => {
    formData.phone = formatPhone(e.target.value);
    e.target.value = formData.phone;
    saveProgress();
  });

  document.getElementById("quoteFormMessage")?.addEventListener("input", (e) => {
    formData.message = e.target.value;
    saveProgress();
  });

  // WhatsApp button
  document.getElementById("quoteWhatsApp")?.addEventListener("click", () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      updateModal();
      return;
    }
    const url = `https://wa.me/5547996067992?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
    clearProgress();
    closeQuoteModal();
  });
}

function updateModal() {
  const container = document.getElementById("quoteModalContainer");
  if (container) {
    container.innerHTML = renderModal();
    attachEvents();
  }
}

// ==================== API PÚBLICA ====================

function openQuoteModal() {
  // Tenta carregar progresso salvo
  const hasProgress = loadProgress();

  if (!hasProgress) {
    // Reset state se não houver progresso
    currentStep = 0;
    selectedPlan = null;
    addonsState = {};
    recurringState = {};
    formData = { name: "", email: "", phone: "", message: "" };
    activeTabs = {};
  }

  // Create container if not exists
  let container = document.getElementById("quoteModalContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "quoteModalContainer";
    document.body.appendChild(container);
  }

  container.innerHTML = renderModal();
  container.style.display = "block";
  document.body.style.overflow = "hidden";
  attachEvents();
}

function closeQuoteModal() {
  const container = document.getElementById("quoteModalContainer");
  if (container) {
    container.style.display = "none";
    container.innerHTML = "";
  }
  document.body.style.overflow = "";
}

// Export for global use
window.openQuoteModal = openQuoteModal;
window.closeQuoteModal = closeQuoteModal;
