# WebGL Shaders - Documentação Técnica

## Visão Geral

Os shaders WebGL da landing page Biomo criam um background animado com halos luminosos em tons de roxo (#a800d2) sobre fundo preto.

## Tecnologia

- **Three.js** (r128+) - Biblioteca WebGL
- **GLSL** - OpenGL Shading Language
- **Fragment Shaders** - Processamento por pixel

## Arquitetura

```
┌─────────────────────────────────────────┐
│              Three.js Scene              │
├─────────────────────────────────────────┤
│  Camera (Orthographic)                  │
│  ↓                                      │
│  PlaneGeometry (2x2 fullscreen)         │
│  ↓                                      │
│  ShaderMaterial                         │
│  ├── Vertex Shader (posicionamento)     │
│  └── Fragment Shader (cor por pixel)    │
│  ↓                                      │
│  WebGLRenderer                          │
└─────────────────────────────────────────┘
```

## Uniforms (Variáveis Globais)

| Uniform | Tipo | Descrição |
|---------|------|-----------|
| `time` | float | Tempo acumulado para animação |
| `resolution` | vec2 | Resolução da tela (width, height) |

## Cor Base - #a800d2

### Conversão RGB para GLSL

```
Hex: #a800d2
R: 168 → 168/255 = 0.659
G: 0   → 0/255   = 0.0
B: 210 → 210/255 = 0.824
```

### Proporção nos Shaders

```glsl
// Aplicação da cor
color.r += intensity * 0.659;
color.g += intensity * 0.0;
color.b += intensity * 0.824;

// Limitador para evitar rosa nas bordas
color.r = min(color.r, color.b * 0.8);
```

## Shaders Implementados

### 1. Rings (Anéis Pulsantes)

```glsl
// Conceito: Anéis concêntricos expandindo do centro
// Baseado no efeito de ondas de rádio

for(int i = 0; i < 6; i++){
    float fi = float(i);

    // Velocidade variável: halos maiores = mais lentos
    float speed = 0.06 / (1.0 + fi * 0.25);
    float t = time * speed;

    // Tamanho do halo aumenta com i
    float haloSize = 1.0 + fi * 0.4;

    float intensity = lineWidth * (fi * fi + 1.0) /
        abs(fract(t + fi * 0.08) * 5.0 * haloSize - length(uv) + mod(uv.x + uv.y, 0.2));

    // Aplicar cor
    color.r += intensity * 0.659;
    color.b += intensity * 0.824;
}
```

**Características:**
- 6 camadas de anéis
- Velocidade: 0.06 (rápido) → 0.024 (lento)
- Tamanho: 1.0 (pequeno) → 3.0 (grande)

### 2. Waves (Ondas Fluidas)

```glsl
// Conceito: Ondulações orgânicas com distorção senoidal

for(int i = 0; i < 8; i++) {
    float fi = float(i);

    // Velocidade variável
    float speed = 0.04 / (1.0 + fi * 0.2);
    float t = time * speed;

    // Tamanho da onda aumenta
    float waveSize = 0.3 + fi * 0.12;

    vec2 p = uv;
    p.x += sin(p.y * 4.0 + t + fi * 0.5) * waveSize;
    p.y += cos(p.x * 3.0 + t * 1.2 + fi * 0.3) * waveSize;

    float d = length(p) - waveSize - fi * 0.06;
    float wave = 0.01 / abs(sin(d * 8.0 - t * 2.0));

    // Aplicar cor
    color.r += wave * 0.659;
    color.b += wave * 0.824;
}
```

**Características:**
- 8 camadas de ondas
- Distorção senoidal em X e Y
- Sobreposição cria padrão orgânico

### 3. Mesh (Malha Orgânica)

```glsl
// Conceito: Grid distorcido com Perlin noise

float noise(vec2 p) {
    // Implementação de noise procedural
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    // ... interpolação
}

for(int layer = 0; layer < 3; layer++) {
    float fl = float(layer);

    // Velocidade: camadas maiores = mais lentas
    float speed = 0.025 / (1.0 + fl * 0.4);
    float t = time * speed;

    // Escala da malha aumenta por camada
    float scale = 6.0 + fl * 4.0;
    vec2 p = uv * scale;

    // Acumular noise
    float n = 0.0;
    for(int i = 0; i < 4; i++) {
        n += noise(p + t) * amp;
        p *= 2.0;
        amp *= 0.5;
    }

    // Grid lines distorcidas
    vec2 grid = abs(fract(uv * gridSize + n * 0.5) - 0.5);
    float line = min(grid.x, grid.y);
}
```

**Características:**
- 3 camadas de malha
- Noise procedural para distorção
- Linhas de grid com espessura variável

### 4. Vortex (Vórtice)

```glsl
// Conceito: Espiral hipnótica com coordenadas polares

float angle = atan(uv.y, uv.x);
float radius = length(uv);

for(int i = 0; i < 6; i++) {
    float fi = float(i);

    // Velocidade variável: espirais maiores = mais lentas
    float speed = 0.05 / (1.0 + fi * 0.3);
    float t = time * speed;

    // Raio da espiral aumenta
    float spiralRadius = 1.0 + fi * 0.3;

    // Distorção espiral
    float localAngle = angle + radius * (3.0 - fi * 0.3) - t * 2.0;

    float spiral = sin(localAngle * (3.0 + fi) + t * (1.0 + fi * 0.15)) * 0.5 + 0.5;
    float ring = abs(sin(radius * (10.0 - fi) - t * (3.0 - fi * 0.4) + fi));

    float intensity = 0.01 / (abs(spiral - 0.5) + 0.1) * ring;
    intensity *= smoothstep(1.5 * spiralRadius, 0.0, radius);
}

// Brilho central
float glow = 0.05 / (radius + 0.15);
color += vec3(0.659, 0.0, 0.824) * glow * 0.15;
```

**Características:**
- 6 braços espirais
- Coordenadas polares (angle, radius)
- Brilho central suave
- Fade nas bordas

## Sistema de Velocidade Variável

### Fórmula Base

```glsl
float speed = velocidade_base / (1.0 + indice * fator_reducao);
```

### Tabela de Velocidades

| Shader | Base | Fator | Halo 0 | Halo 5 |
|--------|------|-------|--------|--------|
| Rings | 0.06 | 0.25 | 0.060 | 0.024 |
| Waves | 0.04 | 0.20 | 0.040 | 0.015 |
| Mesh | 0.025 | 0.40 | 0.025 | 0.014 |
| Vortex | 0.05 | 0.30 | 0.050 | 0.019 |

### Benefícios

1. **Profundidade visual** - Halos maiores parecem mais distantes
2. **Movimento orgânico** - Evita sincronização artificial
3. **Performance** - Menos cálculos para elementos grandes

## Otimizações de Performance

### 1. Redução de Iterações

```glsl
// Ao invés de loops aninhados pesados
for(int j = 0; j < 3; j++){
    for(int i = 0; i < 6; i++){
        // 18 iterações
    }
}

// Usar loop único com cálculo combinado
for(int i = 0; i < 6; i++){
    // 6 iterações, cor calculada diretamente
    color.r += intensity * 0.659;
    color.b += intensity * 0.824;
}
```

### 2. Evitar Branching

```glsl
// Ruim - causa branch divergence
if(j == 0) color[j] += intensity * 0.659;
if(j == 1) color[j] += intensity * 0.0;
if(j == 2) color[j] += intensity * 0.824;

// Bom - cálculo direto
color.r += intensity * 0.659;
color.g += intensity * 0.0;
color.b += intensity * 0.824;
```

### 3. Limitador de Cor Eficiente

```glsl
// Evita rosa nas bordas de alta intensidade
color.r = min(color.r, color.b * 0.8);
```

## Integração com a Landing Page

### HTML

```html
<div id="shader-container"></div>
<div class="content">
    <!-- Conteúdo da LP sobre o shader -->
</div>
```

### CSS

```css
#shader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.content {
    position: relative;
    z-index: 10;
}
```

### JavaScript

```javascript
// Inicialização
import * as THREE from 'three';

function initShader(fragmentShader) {
    const container = document.getElementById('shader-container');

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() }
    };

    const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    container.appendChild(renderer.domElement);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
    }

    animate();
}
```

## Troubleshooting

### Shader não renderiza

1. Verificar se WebGL está habilitado no navegador
2. Checar console para erros de compilação GLSL
3. Verificar se Three.js foi carregado

### Performance baixa

1. Reduzir número de iterações nos loops
2. Diminuir resolução do canvas
3. Usar `renderer.setPixelRatio(1)` em dispositivos móveis

### Cores incorretas

1. Verificar proporção RGB (R deve ser ~80% de B)
2. Checar limitador: `color.r = min(color.r, color.b * 0.8)`
3. Verificar multiplicador geral de intensidade

---

Documentação técnica - Biomo LP
