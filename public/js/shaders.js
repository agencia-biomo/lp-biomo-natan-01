/**
 * Biomo Landing Page - WebGL Shaders
 * Background animado com halos roxos (#a800d2)
 */

(function() {
    'use strict';

    // Vertex shader (comum para todos)
    const vertexShader = `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `;

    // Fragment shader - Anéis Pulsantes Roxos #a800d2
    const fragmentShader = `
        #define TWO_PI 6.2831853072
        #define PI 3.14159265359

        precision highp float;
        uniform vec2 resolution;
        uniform float time;

        void main(void) {
            vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
            float lineWidth = 0.0024;

            vec3 color = vec3(0.0);

            // Cor alvo #a800d2: R=0.659, G=0.0, B=0.824
            for(int i = 0; i < 6; i++){
                float fi = float(i);

                // Velocidade variável: halos maiores (i maior) = mais lentos
                float speed = 0.06 / (1.0 + fi * 0.25);
                float t = time * speed;

                // Tamanho do halo aumenta com i
                float haloSize = 1.0 + fi * 0.4;

                float intensity = lineWidth * (fi * fi + 1.0) / abs(fract(t + fi * 0.08) * 5.0 * haloSize - length(uv) + mod(uv.x + uv.y, 0.2));

                // Proporção #a800d2
                color.r += intensity * 0.659;
                color.g += intensity * 0.0;
                color.b += intensity * 0.824;
            }

            // Mantém proporção roxo puro
            color.r = min(color.r, color.b * 0.8);

            // Escurece geral
            color *= 0.7;

            gl_FragColor = vec4(color, 1.0);
        }
    `;

    // Variáveis globais
    let renderer, scene, camera, mesh, uniforms;
    let animationId;

    /**
     * Inicializa o shader no container especificado
     */
    function init() {
        const container = document.getElementById('shader-bg');
        if (!container) {
            console.warn('Shader container not found');
            return;
        }

        // Camera
        camera = new THREE.Camera();
        camera.position.z = 1;

        // Scene
        scene = new THREE.Scene();

        // Geometry (fullscreen quad)
        const geometry = new THREE.PlaneGeometry(2, 2);

        // Uniforms
        uniforms = {
            time: { type: "f", value: 1.0 },
            resolution: { type: "v2", value: new THREE.Vector2() }
        };

        // Material
        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });

        // Mesh
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Renderer
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limita para performance
        renderer.setClearColor(0x000000, 1);

        container.appendChild(renderer.domElement);

        // Resize handler
        window.addEventListener('resize', onWindowResize, false);
        onWindowResize();

        // Start animation
        animate();
    }

    /**
     * Handler de resize
     */
    function onWindowResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width, height);
        uniforms.resolution.value.x = renderer.domElement.width;
        uniforms.resolution.value.y = renderer.domElement.height;
    }

    /**
     * Loop de animação
     */
    function animate() {
        animationId = requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
    }

    /**
     * Para a animação (para otimização quando não visível)
     */
    function stop() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    /**
     * Retoma a animação
     */
    function resume() {
        if (!animationId) {
            animate();
        }
    }

    // Visibility API - pausa quando a aba não está visível
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stop();
        } else {
            resume();
        }
    });

    // Inicializa quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expõe API pública (opcional)
    window.BiomoShader = {
        stop: stop,
        resume: resume
    };

})();
