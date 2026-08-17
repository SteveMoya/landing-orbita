/**
 * Hero 3D: planeta procedural + anillos + estrellas (Three.js).
 * - Carga diferida (dynamic import) y pausa fuera de viewport / pestaña oculta.
 * - El planeta rota suavemente siguiendo el cursor (desktop, sin reduced-motion).
 * - Fallback: visual CSS estático si hay reduced-motion o falla WebGL.
 */
export function initHeroPlanet(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-planet-canvas]');
  const fallback = document.querySelector<HTMLElement>('[data-planet-fallback]');
  if (!canvas || !fallback) return;
  // Aliases no-nulos para uso dentro de closures
  const canvasEl: HTMLCanvasElement = canvas;
  const fallbackEl: HTMLElement = fallback;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    // Fallback CSS estático, sin animaciones
    canvasEl.classList.add('hidden');
    fallbackEl.classList.remove('hidden');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          start();
          io.disconnect();
        }
      }
    },
    { threshold: 0.1 },
  );
  io.observe(canvasEl);

  let started = false;
  async function start(): Promise<void> {
    if (started) return;
    started = true;

    try {
      const THREE = await import('three');
      const { WebGLRenderer, Scene, PerspectiveCamera, SphereGeometry, MeshStandardMaterial, Mesh, TorusGeometry, PointsMaterial, BufferGeometry, Float32BufferAttribute, Points, AmbientLight, PointLight, Color } = THREE;

      const renderer = new WebGLRenderer({ canvas: canvasEl, antialias: true, alpha: true });
      const sizes = { w: canvasEl.clientWidth || 560, h: canvasEl.clientHeight || 560 };
      renderer.setSize(sizes.w, sizes.h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new Scene();
      const camera = new PerspectiveCamera(45, sizes.w / sizes.h, 0.1, 100);
      camera.position.z = 6;

      scene.add(new AmbientLight(0x5eead4, 0.35));
      const key = new PointLight(0xe8eaff, 1.2, 30);
      key.position.set(4, 3, 5);
      scene.add(key);
      const rim = new PointLight(0xa78bfa, 0.8, 30);
      rim.position.set(-5, -2, 2);
      scene.add(rim);

      const group = new THREE.Group();
      scene.add(group);

      // Planeta
      const planet = new Mesh(
        new SphereGeometry(1.5, 64, 64),
        new MeshStandardMaterial({ color: new Color(0x1a1b33), roughness: 0.55, metalness: 0.25, emissive: new Color(0x0e1028), emissiveIntensity: 0.4 }),
      );
      group.add(planet);

      // Wireframe técnico
      const wire = new Mesh(
        new SphereGeometry(1.53, 24, 24),
        new MeshStandardMaterial({ color: new Color(0x5eead4), wireframe: true, transparent: true, opacity: 0.08 }),
      );
      group.add(wire);

      // Anillos
      const ring = new Mesh(
        new TorusGeometry(2.3, 0.035, 16, 120),
        new MeshStandardMaterial({ color: new Color(0x5eead4), emissive: new Color(0x0b3b36), transparent: true, opacity: 0.85 }),
      );
      ring.rotation.x = Math.PI / 2.6;
      ring.rotation.z = -0.25;
      group.add(ring);

      const ring2 = new Mesh(
        new TorusGeometry(2.75, 0.018, 16, 120),
        new MeshStandardMaterial({ color: new Color(0xa78bfa), emissive: new Color(0x2b2450), transparent: true, opacity: 0.5 }),
      );
      ring2.rotation.x = Math.PI / 2.6;
      ring2.rotation.z = -0.25;
      group.add(ring2);

      // Estrellas
      const starCount = 900;
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i += 3) {
        const r = 10 + Math.random() * 14;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i] = r * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = r * Math.cos(phi);
      }
      const starGeo = new BufferGeometry();
      starGeo.setAttribute('position', new Float32BufferAttribute(positions, 3));
      const stars = new Points(starGeo, new PointsMaterial({ color: new Color(0xe8eaff), size: 0.035, transparent: true, opacity: 0.9 }));
      scene.add(stars);

      // Rotación con cursor
      const target = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent): void => {
        const rect = canvasEl.getBoundingClientRect();
        target.y = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        target.x = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      canvasEl.addEventListener('pointermove', onPointer, { passive: true });

      // Pausa fuera de viewport / pestaña oculta
      let visible = true;
      const ioPause = new IntersectionObserver((entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      });
      ioPause.observe(canvasEl);
      const onVisibility = (): void => {
        visible = document.visibilityState === 'visible';
      };
      document.addEventListener('visibilitychange', onVisibility);

      const clock = new THREE.Clock();
      let raf = 0;
      const loop = (): void => {
        raf = requestAnimationFrame(loop);
        if (!visible) return;
        const t = clock.getElapsedTime();
        group.rotation.y += 0.0016;
        group.rotation.y += (target.y - group.rotation.y) * 0.03;
        group.rotation.x += (target.x - group.rotation.x) * 0.03;
        planet.rotation.y = t * 0.06;
        stars.rotation.y = t * 0.008;
        renderer.render(scene, camera);
      };
      loop();

      const onResize = (): void => {
        const w = canvasEl.clientWidth || 560;
        const h = canvasEl.clientHeight || 560;
        sizes.w = w;
        sizes.h = h;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      // Limpieza
      window.addEventListener(
        'beforeunload',
        () => {
          cancelAnimationFrame(raf);
          ioPause.disconnect();
          document.removeEventListener('visibilitychange', onVisibility);
          canvasEl.removeEventListener('pointermove', onPointer);
          window.removeEventListener('resize', onResize);
          renderer.dispose();
        },
        { once: true },
      );
    } catch {
      // WebGL no disponible: mostrar fallback CSS
      canvasEl.classList.add('hidden');
      fallbackEl.classList.remove('hidden');
    }
  }
}
