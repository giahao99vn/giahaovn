/* ==========================================================
   Hero 3D — Ví Cơ Khí Quạt Thẻ (Nhôm CNC 6061 + Lõi In 3D)
   Kéo để xoay 360°, bấm chấm màu để đổi màu lõi in 3D, rê chuột để xòe thẻ.
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
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 200);
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(-4, 10, 7);
    scene.add(key);

    /* ---------- Kích thước chuẩn (cm) ---------- */
    const W = 8.8, D = 5.8, R = 0.52;
    const PLATE = 0.28, CORE = 0.64;
    const CARD_W = 8.56, CARD_D = 5.4, CARD_T = 0.08;

    const roundedRect = (w, d, r) => {
      const s = new THREE.Shape(), x = -w / 2, y = -d / 2;
      s.moveTo(x + r, y);
      s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
      s.lineTo(x + w, y + d - r); s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
      s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
      s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
      return s;
    };

    // Ốp nhôm mặt trên có rãnh khuyết ngón cái ở cạnh trước (-y)
    const topShape = (() => {
      const s = new THREE.Shape(), x = -W / 2, y = -D / 2, r = R;
      const n0 = -1.65, n1 = 1.65, nd = 0.95;
      s.moveTo(x + r, y);
      s.lineTo(n0 - 0.35, y);
      s.quadraticCurveTo(n0, y, n0 + 0.2, y + nd * 0.55);
      s.quadraticCurveTo(n0 + 0.45, y + nd, n0 + 0.9, y + nd);
      s.lineTo(n1 - 0.9, y + nd);
      s.quadraticCurveTo(n1 - 0.45, y + nd, n1 - 0.2, y + nd * 0.55);
      s.quadraticCurveTo(n1, y, n1 + 0.35, y);
      s.lineTo(x + W - r, y); s.quadraticCurveTo(x + W, y, x + W, y + r);
      s.lineTo(x + W, y + D - r); s.quadraticCurveTo(x + W, y + D, x + W - r, y + D);
      s.lineTo(x + r, y + D); s.quadraticCurveTo(x, y + D, x, y + D - r);
      s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
      return s;
    })();

    const extrude = (shape, depth, bevel) => {
      const g = new THREE.ExtrudeGeometry(shape, {
        depth, curveSegments: 24,
        bevelEnabled: !!bevel, bevelThickness: bevel || 0, bevelSize: bevel || 0, bevelSegments: 2
      });
      g.rotateX(-Math.PI / 2);
      return g;
    };

    /* ---------- Vân nhôm xước 6061 + khắc chữ giahaoone ---------- */
    const brushed = (() => {
      const c = document.createElement("canvas");
      c.width = 1024; c.height = 680;
      const g = c.getContext("2d");
      g.fillStyle = "#d4d7dc";
      g.fillRect(0, 0, c.width, c.height);
      for (let i = 0; i < 3000; i++) {
        const y = Math.random() * c.height, l = 90 + Math.random() * 520, x = Math.random() * c.width;
        const v = 190 + Math.random() * 55;
        g.strokeStyle = `rgba(${v},${v},${v + 4},${0.08 + Math.random() * 0.12})`;
        g.lineWidth = Math.random() * 1.4;
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y); g.stroke();
      }
      g.font = "600 44px Inter, -apple-system, Helvetica, Arial, sans-serif";
      g.textAlign = "right";
      g.fillStyle = "rgba(62,65,72,.78)";
      g.fillText("giahaoone", c.width - 115, c.height - 110);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = renderer.capabilities.getMaxAnisotropy();
      t.repeat.set(1 / W, 1 / D);
      t.offset.set(0.5, 0.5);
      return t;
    })();

    // Texture cho thẻ (mặt thẻ đen mờ + chip + chữ)
    const makeCardTex = (title, accent) => {
      const c = document.createElement("canvas");
      c.width = 512; c.height = 320;
      const g = c.getContext("2d");
      g.fillStyle = "#23252a";
      g.fillRect(0, 0, c.width, c.height);
      g.fillStyle = "rgba(255,255,255,.16)";
      g.font = "700 22px Inter, -apple-system, sans-serif";
      g.fillText(title, 36, 52);
      g.font = "600 18px Inter, -apple-system, sans-serif";
      g.fillStyle = "rgba(255,255,255,.45)";
      g.fillText("GIAHAO ONE", 36, 272);
      if (accent) {
        g.fillStyle = "#eb5757";
        g.beginPath(); g.arc(430, 260, 22, 0, Math.PI * 2); g.fill();
        g.fillStyle = "rgba(242,153,74,.88)";
        g.beginPath(); g.arc(456, 260, 22, 0, Math.PI * 2); g.fill();
      }
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      t.repeat.set(1 / CARD_W, 1 / CARD_D);
      t.offset.set(0.5, 0.5);
      return t;
    };

    const aluTop = new THREE.MeshPhysicalMaterial({ color: 0xffffff, map: brushed, metalness: 0.92, roughness: 0.28, clearcoat: 0.25 });
    const aluBot = new THREE.MeshPhysicalMaterial({ color: 0xcfd3d9, metalness: 0.92, roughness: 0.34 });
    const startHex = (window.HERO_COLORS && window.HERO_COLORS[0].hex) || "#c8643b";
    const coreMat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(startHex), roughness: 0.52, metalness: 0.02, sheen: 0.35 });
    const darkTriggerMat = new THREE.MeshStandardMaterial({ color: 0x1b1c20, roughness: 0.45, metalness: 0.15 });
    const screwMat = new THREE.MeshStandardMaterial({ color: 0xa2a6ad, metalness: 0.95, roughness: 0.22 });

    const pivot = new THREE.Group();
    scene.add(pivot);

    const wallet = new THREE.Group();
    pivot.add(wallet);

    // Ốp nhôm dưới + Lõi in 3D + Ốp nhôm trên
    const bottom = new THREE.Mesh(extrude(roundedRect(W, D, R), PLATE, 0.06), aluBot);
    bottom.position.y = 0;

    const core = new THREE.Mesh(extrude(roundedRect(W - 0.36, D - 0.24, R * 0.82), CORE, 0.02), coreMat);
    core.position.set(-0.12, PLATE, 0);

    // Khối gạt đẩy thẻ ở rãnh trước (đen + điểm nhấn màu lõi)
    const sliderHousing = new THREE.Mesh(new THREE.BoxGeometry(1.75, CORE + PLATE * 1.4, 0.65), darkTriggerMat);
    sliderHousing.position.set(-0.2, PLATE + CORE * 0.5, D / 2 - 0.22);
    const sliderPad = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.22, 0.72), coreMat);
    sliderPad.position.set(-0.2, PLATE + CORE * 0.65, D / 2 - 0.35);

    const top = new THREE.Mesh(extrude(topShape, PLATE, 0.06), aluTop);
    top.position.y = PLATE + CORE;
    wallet.add(bottom, core, sliderHousing, sliderPad, top);

    // 4 ốc lục giác M3 ở 4 góc
    const screwGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.08, 24);
    const hexGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.09, 6);
    const hexMat = new THREE.MeshStandardMaterial({ color: 0x2a2c32, metalness: 0.6, roughness: 0.5 });
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
      const head = new THREE.Mesh(screwGeo, screwMat);
      head.position.set(sx * (W / 2 - 0.56), PLATE * 2 + CORE + 0.08, sz * (D / 2 - 0.56));
      const socket = new THREE.Mesh(hexGeo, hexMat);
      socket.position.copy(head.position);
      socket.position.y += 0.01;
      wallet.add(head, socket);
    });

    // Bộ 4 thẻ xòe quạt
    const cardSpecs = [
      ["MEMBERSHIP", true],
      ["CREDIT CARD", false],
      ["DEBIT CARD", false],
      ["VIP ACCESS", false]
    ];
    const cardGeo = extrude(roundedRect(CARD_W, CARD_D, 0.32), CARD_T, 0.01);
    cardGeo.translate(CARD_W / 2, 0, -CARD_D / 2);
    const cards = cardSpecs.map(([label, hasLogo], i) => {
      const holder = new THREE.Group();
      holder.position.set(-CARD_W / 2, PLATE + 0.06 + i * (CARD_T + 0.045), CARD_D / 2);
      const cMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, map: makeCardTex(label, hasLogo),
        roughness: 0.42, metalness: 0.08, clearcoat: 0.5, clearcoatRoughness: 0.3
      });
      const mesh = new THREE.Mesh(cardGeo, cMat);
      holder.add(mesh);
      wallet.add(holder);
      return holder;
    });

    // Đặt góc nghiêng isometric để thấy rõ cả mặt nhôm, lõi màu và thẻ xòe
    wallet.position.set(-0.9, -(PLATE + CORE * 0.5), 0);
    wallet.rotation.x = 0.22;
    wallet.rotation.z = -0.06;

    // Bóng đổ mềm dưới đáy
    const shadowTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 256;
      const g = c.getContext("2d");
      const grd = g.createRadialGradient(128, 128, 18, 128, 128, 128);
      grd.addColorStop(0, "rgba(0,0,0,.30)");
      grd.addColorStop(0.55, "rgba(0,0,0,.10)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grd;
      g.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    })();
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 11),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -1.65;
    scene.add(shadow);

    /* ---------- Canh khung hình theo kích thước màn hình ---------- */
    const resize = () => {
      const w = stage.clientWidth, h = stage.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const dist = 19.5 * Math.max(1, 1.38 / camera.aspect);
      camera.position.set(0, dist * 0.52, dist * 0.84);
      camera.lookAt(0, -0.15, 0);
      camera.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(stage);
    resize();

    /* ---------- Kéo để xoay & hiệu ứng quán tính ---------- */
    let rotY = -0.38, vel = reduced ? 0 : 0.0025, dragging = false, lastX = 0;
    let tiltX = 0, targetTilt = 0, hover = false;

    stage.addEventListener("pointerdown", (e) => {
      dragging = true;
      lastX = e.clientX;
      stage.setPointerCapture(e.pointerId);
    });
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
    stage.addEventListener("pointerenter", () => { hover = true; });
    stage.addEventListener("pointerleave", () => { hover = false; targetTilt = 0; });

    /* ---------- Đổi màu lõi in 3D ---------- */
    const targetColor = new THREE.Color(startHex);
    addEventListener("herocolor", (e) => targetColor.set(e.detail));

    /* ---------- Phóng nhẹ khi cuộn ---------- */
    let scrollP = 0;
    addEventListener("scroll", () => {
      const r = stage.getBoundingClientRect();
      scrollP = Math.min(1, Math.max(0, 1 - r.bottom / (innerHeight + r.height)));
    }, { passive: true });

    let visible = true;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(stage);

    let fan = 0.85;
    let readyMarked = false;
    const clock = new THREE.Clock();

    const tick = () => {
      requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();

      if (!dragging) {
        const idle = reduced ? 0 : Math.sin(t * 0.45) * 0.0022;
        vel += (idle - vel) * 0.04;
        rotY += vel;
      }
      tiltX += (targetTilt - tiltX) * 0.06;
      pivot.rotation.y = rotY;
      pivot.rotation.x = tiltX * 0.45;

      // Hiệu ứng đẩy quạt thẻ tự động hoặc khi rê chuột vào
      const loop = reduced ? 1 : 0.35 + 0.65 * (0.5 - 0.5 * Math.cos(Math.min(1, Math.max(0, (Math.sin(t * 0.8) + 0.35) * 1.1)) * Math.PI));
      const goal = hover ? 1 : loop;
      fan += (goal - fan) * 0.07;
      cards.forEach((c, i) => {
        const k = fan * (i + 1);
        c.rotation.y = -k * 0.085;
        c.position.x = -CARD_W / 2 + fan * (1.15 + i * 0.42);
        c.position.z = CARD_D / 2 - fan * (0.18 * (i + 1));
      });
      sliderPad.position.x = -0.2 + fan * 0.32;

      const s = 1 + scrollP * 0.1;
      pivot.scale.setScalar(s);
      shadow.scale.setScalar(s);

      coreMat.color.lerp(targetColor, 0.08);
      renderer.render(scene, camera);

      if (!readyMarked) {
        readyMarked = true;
        stage.classList.add("is-3d-ready");
      }
    };
    tick();
  } catch (err) {
    console.warn("3D không khả dụng, dùng ảnh tĩnh:", err);
    fallback();
  }
})();
