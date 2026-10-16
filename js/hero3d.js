/* ==========================================================
   Hero 3D — Bình hoa xoắn tham số, kéo để xoay, đổi màu
   Three.js qua CDN. Nếu WebGL/mạng lỗi → hiện ảnh tĩnh.
   ========================================================== */
(async () => {
  const stage = document.getElementById("stage");
  const canvas = document.getElementById("hero3d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fallback = () => stage.classList.add("is-fallback");

  try {
    const THREE = await import("three");
    const { RoomEnvironment } = await import("three/addons/environments/RoomEnvironment.js");

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 1.5, 9.5);
    camera.lookAt(0, 1.35, 0);

    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(3, 5, 4);
    scene.add(key);

    /* --- Parametric twisted vase --- */
    const H = 3.0, ribs = 7, twist = Math.PI * 1.1;
    const profile = (v) => {
      // bán kính theo chiều cao: thân phình, cổ thu
      const base = 0.62 + 0.38 * Math.sin(Math.PI * (0.15 + v * 0.75)) - 0.1 * v;
      return base * 0.95;
    };
    const segU = 220, segV = 160;
    const pos = [], idx = [];
    for (let j = 0; j <= segV; j++) {
      const v = j / segV, y = v * H;
      for (let i = 0; i <= segU; i++) {
        const u = (i / segU) * Math.PI * 2;
        const rib = 1 + 0.085 * Math.pow(Math.abs(Math.cos((ribs * (u + v * twist)) / 2)), 1.6) * 2 - 0.085;
        const r = profile(v) * rib;
        pos.push(Math.cos(u) * r, y, Math.sin(u) * r);
      }
    }
    for (let j = 0; j < segV; j++) {
      for (let i = 0; i < segU; i++) {
        const a = j * (segU + 1) + i, b = a + segU + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();

    // Fine layer lines for a real 3D-print feel
    const layerTex = (() => {
      const c = document.createElement("canvas");
      c.width = 4; c.height = 256;
      const g = c.getContext("2d");
      for (let y = 0; y < 256; y++) {
        const s = 128 + Math.sin((y / 256) * Math.PI * 2 * 32) * 30;
        g.fillStyle = `rgb(${s},${s},${s})`;
        g.fillRect(0, y, 4, 1);
      }
      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 6);
      return tex;
    })();
    const uv = [];
    for (let j = 0; j <= segV; j++) for (let i = 0; i <= segU; i++) uv.push(i / segU, j / segV);
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));

    const startHex = (window.HERO_COLORS && window.HERO_COLORS[0].hex) || "#c8643b";
    const mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(startHex), roughness: 0.62, metalness: 0, clearcoat: 0.15, clearcoatRoughness: 0.6,
      bumpMap: layerTex, bumpScale: 0.6, side: THREE.DoubleSide, sheen: 0.3, sheenRoughness: 0.8
    });
    const vase = new THREE.Mesh(geo, mat);

    // Base disc to close the bottom
    const bottom = new THREE.Mesh(new THREE.CircleGeometry(profile(0) * 0.95, 64), mat);
    bottom.rotation.x = Math.PI / 2;
    bottom.position.y = 0.002;

    const group = new THREE.Group();
    group.add(vase, bottom);
    scene.add(group);

    // Soft contact shadow
    const shadowTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 256;
      const g = c.getContext("2d");
      const grd = g.createRadialGradient(128, 128, 10, 128, 128, 128);
      grd.addColorStop(0, "rgba(0,0,0,.35)");
      grd.addColorStop(0.5, "rgba(0,0,0,.12)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grd;
      g.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    })();
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 3.6), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -0.01;
    scene.add(shadow);

    /* --- Resize --- */
    const resize = () => {
      const w = stage.clientWidth, h = stage.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(stage);
    resize();

    /* --- Drag to rotate with inertia --- */
    let rotY = -0.4, vel = reduced ? 0 : 0.004, dragging = false, lastX = 0, tiltX = 0, targetTilt = 0;
    stage.addEventListener("pointerdown", (e) => { dragging = true; lastX = e.clientX; stage.setPointerCapture(e.pointerId); });
    stage.addEventListener("pointermove", (e) => {
      const r = stage.getBoundingClientRect();
      targetTilt = ((e.clientY - r.top) / r.height - 0.5) * 0.25;
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      vel = dx * 0.006;
      rotY += vel;
    });
    const end = () => { dragging = false; };
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);
    stage.addEventListener("pointerleave", () => { targetTilt = 0; });

    /* --- Colour transitions --- */
    const targetColor = new THREE.Color(startHex);
    addEventListener("herocolor", (e) => targetColor.set(e.detail));

    /* --- Scroll: subtle lift & scale --- */
    let scrollP = 0;
    addEventListener("scroll", () => {
      const r = stage.getBoundingClientRect();
      scrollP = Math.min(1, Math.max(0, 1 - r.bottom / (innerHeight + r.height)));
    }, { passive: true });

    let visible = true;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(stage);

    const idle = reduced ? 0 : 0.0035;
    const tick = () => {
      requestAnimationFrame(tick);
      if (!visible) return;
      if (!dragging) { vel += (idle - vel) * 0.03; rotY += vel; }
      tiltX += (targetTilt - tiltX) * 0.06;
      group.rotation.y = rotY;
      group.rotation.x = tiltX * 0.4;
      const s = 1 + scrollP * 0.12;
      group.scale.setScalar(s);
      shadow.scale.setScalar(s);
      mat.color.lerp(targetColor, 0.08);
      renderer.render(scene, camera);
    };
    tick();
  } catch (err) {
    console.warn("3D không khả dụng, dùng ảnh tĩnh:", err);
    fallback();
  }
})();
